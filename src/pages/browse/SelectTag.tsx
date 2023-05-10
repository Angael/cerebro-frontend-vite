import React from 'react';
import Btn from '../../styled/btn/Btn';
import { useTagsQuery } from '../../api/tags/fetchTags';
import css from './SelectTag.module.scss';
import Card from '../../styled/card/Card';
import { Tag } from '@vanih/cerebro-contracts';

type Props = {
  selectedTags: Tag[]; // Currenty support only one tag
  setSelectedTags: (selectedTags: Tag[]) => void;
};

const SelectTag = ({ selectedTags, setSelectedTags }: Props) => {
  const tagsQuery = useTagsQuery();

  const selectedTag = selectedTags[0] as Tag | undefined;

  return (
    <nav>
      <Card className={css.tagChips}>
        <Btn onClick={() => setSelectedTags([])} disabled={!selectedTag}>
          All
        </Btn>
        {tagsQuery.data?.map((tag) => (
          <Btn
            key={tag.id}
            onClick={() => setSelectedTags([tag])}
            disabled={tag.id === selectedTag?.id}
          >
            {tag.name}
          </Btn>
        ))}
      </Card>
    </nav>
  );
};

export default SelectTag;
