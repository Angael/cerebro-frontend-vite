import React, { useState } from 'react';
import Btn from '../../styled/btn/Btn';
import {
  AutoComplete,
  AutoCompleteCompleteEvent,
  AutoCompleteSelectEvent,
} from 'primereact/autocomplete';
import { useTagsQuery } from '../../api/tags/fetchTags';

type Props = {};

const WallSelectInput = (props: Props) => {
  const tagsQuery = useTagsQuery();

  const [value, setValue] = useState<string>('');
  const [items, setItems] = useState<string[]>([]);

  const search = (event: AutoCompleteCompleteEvent) => {
    if (tagsQuery.data) {
      const suggestions = tagsQuery.data
        .map((tag) => tag.name)
        .filter((tag) => tag.startsWith(value));

      setItems(suggestions);
    }
  };

  const onSelect = (event: AutoCompleteSelectEvent) => {
    console.log('select event', event.value);
  };

  let suggestions;
  if (tagsQuery.data) {
    suggestions = tagsQuery.data
      .map((tag) => tag.name)
      .filter((tag) => tag.startsWith(value));
  }

  return (
    <AutoComplete
      placeholder={'Meme'}
      inputClassName='textfield'
      value={value}
      suggestions={items}
      completeMethod={search}
      onChange={(e) => setValue(e.value)}
      onSelect={onSelect}
      delay={100}
    />
  );
};

export default WallSelectInput;
