import { useState } from 'react';

type UseTagInput = [string, (newTags: string) => void, string[]];

export const useTagInput = (): UseTagInput => {
  const [tags, setTags] = useState('');
  const tagsArr = tags
    .split(',')
    .map((t) => t.trim().toLowerCase())
    .filter(Boolean);

  return [tags, setTags, tagsArr];
};
