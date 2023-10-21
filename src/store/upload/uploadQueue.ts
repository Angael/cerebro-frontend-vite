import PQueue from 'p-queue';

const isProd = process.env.NODE_ENV === 'production';

export const uploadQueue = new PQueue({ concurrency: isProd ? 1 : 3 });
