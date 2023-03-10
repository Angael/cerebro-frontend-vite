import PQueue from 'p-queue';
import { ExtendedFile, UploadStatusEnum } from './uploadTypes';
import { uploadStoreActions } from './uploadStore';
import { API } from '../../api/api';
import { AxiosProgressEvent } from 'axios';

export const uploadQueue = new PQueue({ concurrency: 1 });

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
  dir?: string;
  private?: boolean;
}

export const uploadFileToBackend = ({ file }: IOptions) => {
  const formData = new FormData();
  formData.append('file', file.file);

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
