import PQueue from 'p-queue';
import { ExtendedFile, UploadStatusEnum } from './uploadTypes';
import { uploadStoreActions } from './uploadStore';
import { API } from '../../api/api';
import { AxiosProgressEvent } from 'axios';

const isProd = process.env.NODE_ENV === 'production';

export const uploadQueue = new PQueue({ concurrency: isProd ? 1 : 3 });

const onUploadProgress = (file: ExtendedFile) => (e: AxiosProgressEvent) => {
  const totalLength = e.total;

  if (totalLength !== undefined) {
    const uploadProgress = Math.round((e.loaded * 100) / totalLength);
    const uploadStatus =
      uploadProgress >= 100
        ? UploadStatusEnum.success
        : UploadStatusEnum.started;

    uploadStoreActions.updateFile(file.id, {
      uploadProgress,
      uploadStatus,
    });
  }
};

interface IOptions {
  file: ExtendedFile;
  tags: string[];
  dir?: string;
  private?: boolean;
}

export const uploadFileToBackend = ({ file, tags }: IOptions) => {
  const formData = new FormData();
  formData.append('file', file.file);
  tags.forEach((tag) => {
    formData.append('tags', tag);
  });

  return API.post('/items/upload/file', formData, {
    onUploadProgress: onUploadProgress(file),
    timeout: Infinity,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }).catch((e) => {
    uploadStoreActions.updateFile(file.id, {
      uploadStatus: UploadStatusEnum.failed,
    });
    throw e;
  });
};
