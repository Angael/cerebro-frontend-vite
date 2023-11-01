import React, { useState } from 'react';
import Textfield from '../../../styled/textfield/Textfield';
import { Btn } from '../../../styled/btn/Btn';
import { uploadFileFromLink } from '../../../api/uploads/uploadFileFromLink';
import css from './ImportFromLink.module.scss';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getStatsFromLink } from '../../../api/uploads/getStatsFromLink';
import StatsFromLink from './StatsFromLink';

const isUrl = (str: string) => {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
};

type Props = {
  tags: string[];
};

const ImportFromLink = ({ tags }: Props) => {
  const [link, setLink] = useState('');

  const mutation = useMutation({
    mutationFn: () => uploadFileFromLink(link, tags),
  });
  const statsFromLink = useQuery({
    queryKey: ['statsFromLink', link],
    queryFn: () => getStatsFromLink(link),
    retry: false,
  });

  const disabled =
    !isUrl(link) || mutation.isLoading || !statsFromLink.isFetched;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <form onSubmit={onSubmit} className={css.stack}>
      <Textfield
        label='Import from link'
        input={{
          value: link,
          onChange: (e) => setLink(e.currentTarget.value),
          placeholder: 'https://example.com/watcg?v=123',
          type: 'url',
          name: 'video-link',
        }}
      />

      <StatsFromLink stats={statsFromLink.data} />
      <Btn
        disabled={disabled}
        type='submit'
        style={{ alignSelf: 'flex-start' }}
      >
        Download from link
      </Btn>

      {!mutation.isLoading && mutation.isError && (
        <p className='error'>Error!</p>
      )}
      {!mutation.isLoading && mutation.isSuccess && (
        <p className='success'>Success!</p>
      )}
    </form>
  );
};

export default ImportFromLink;
