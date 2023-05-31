import { useState } from 'react';

type UseTagInput = [string, (newTags: string) => void, string[]];

export const useTagInput = (): UseTagInput => {
  const [tags, setTags] = useState('');
  const tagsArr = tags.split(',').map((t) => t.trim().toLowerCase());

  return [tags, setTags, tagsArr];
};
