import React from 'react';
import Textfield from '../../../styled/textfield/Textfield';
import { Btn } from '../../../styled/btn/Btn';
import { uploadFileFromLink } from '../../../api/uploads/uploadFileFromLink';

type Props = {
  tags: string[];
};

const ImportFromLink = ({ tags }: Props) => {
  const [link, setLink] = React.useState('');

  const isUrl = (str: string) => {
    try {
      new URL(str);
      return true;
    } catch {
      return false;
    }
  };

  const downloadFromLink = () => {
    uploadFileFromLink(link, tags);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    downloadFromLink();
  };

  return (
    <form onSubmit={onSubmit}>
      <Textfield
        label='Import from link'
        input={{
          value: link,
          onChange: (e) => setLink(e.currentTarget.value),
          placeholder: 'https://example.com/watcg?v=123',
        }}
      />
      <Btn disabled={!isUrl(link)} type='submit'>
        Download from link
      </Btn>
    </form>
  );
};

export default ImportFromLink;
