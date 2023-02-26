import React from 'react';
import numeral from 'numeral';
import { ExtendedFile } from '../../../store/upload/uploadTypes';

interface IProps {
  files: ExtendedFile[];
}

const FilesStats = ({ files }: IProps) => {
  let summedSize, avgSize, minSize, maxSize;
  let types: string[] = [];
  if (!files || !files.length) {
    summedSize = 0;
    avgSize = 0;
    minSize = 0;
    maxSize = 0;
    types = [];
  } else {
    types = [
      ...new Set<string>(
        files.map((file) => file.file.type.replace('image/', '')),
      ),
    ];
    const sizes = files.map((file) => file.file.size);
    summedSize = sizes.reduce((a, b) => a + b, 0);

    avgSize = summedSize / sizes.length;
    minSize = Math.min(...sizes);
    maxSize = Math.max(...sizes);
  }

  if (files.length < 2) {
    return null;
  }

  return (
    <div>
      <p>Sum size: {numeral(summedSize).format('0.00b')}</p>
      <p>Average: {numeral(avgSize).format('0.00b')}</p>
      <p>Biggest: {numeral(maxSize).format('0.00b')}</p>
      <p>Smallest: {numeral(minSize).format('0.00b')}</p>
      <p>{types.join(',')}</p>
    </div>
  );
};

export default FilesStats;
