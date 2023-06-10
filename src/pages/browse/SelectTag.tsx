import React from 'react';
import { Btn } from '../../styled/btn/Btn';
import { useTagsQuery } from '../../api/tags/fetchTags';
import css from './SelectTag.module.scss';
import Card from '../../styled/card/Card';
import { Tag } from '@vanih/cerebro-contracts';
import {
  DropdownContent,
  DropdownItem,
  DropdownPortal,
  DropdownRoot,
  DropdownTrigger,
} from '../../styled/dropdown/Dropdown';

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
        <DropdownRoot>
          <DropdownTrigger asChild>
            <Btn>Tags: {selectedTag?.name ?? 'All'}</Btn>
          </DropdownTrigger>
          <DropdownPortal>
            <DropdownContent>
              <DropdownItem
                onClick={() => setSelectedTags([])}
                disabled={!selectedTag}
              >
                All
              </DropdownItem>
              {tagsQuery.data?.map((tag) => (
                <DropdownItem
                  key={tag.id}
                  onClick={() => setSelectedTags([tag])}
                  disabled={tag.id === selectedTag?.id}
                >
                  {tag.name}
                </DropdownItem>
              ))}
            </DropdownContent>
          </DropdownPortal>
        </DropdownRoot>
      </Card>
    </nav>
  );
};

export default SelectTag;
