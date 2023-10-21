import { API } from '../api';
import { uploadStoreActions } from '../../store/upload/uploadStore';
import { ExtendedFile, UploadStatusEnum } from '../../store/upload/uploadTypes';
import { AxiosProgressEvent } from 'axios';

export const uploadFileFromLink = async (link: string, tags: string[]) =>
  API.post('/items/upload/file-from-link', { link, tags });

const onUploadProgress = (file: ExtendedFile) => (e: AxiosProgressEvent) => {
  const totalLength = e.total;

  if (totalLength !== undefined) {
    const uploadProgress = Math.round((e.loaded * 100) / totalLength);

    uploadStoreActions.updateFile(file.id, {
      uploadProgress,
      uploadStatus: UploadStatusEnum.started,
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
  })
    .then(() => {
      uploadStoreActions.updateFile(file.id, {
        uploadStatus: UploadStatusEnum.success,
      });
    })
    .catch((e) => {
      uploadStoreActions.updateFile(file.id, {
        uploadStatus: UploadStatusEnum.failed,
      });
      throw e;
    });
};
