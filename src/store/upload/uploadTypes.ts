export enum UploadStatusEnum {
  notStarted,
  started,
  success,
  failed,
}

export interface ExtendedFile {
  previewSrc: string;
  id: string;
  file: File;
  uploadStatus: UploadStatusEnum;
  uploadProgress: number;
}
