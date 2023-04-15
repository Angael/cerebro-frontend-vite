import React, { useState } from 'react';
import Layout from '../../lib/layout/Layout';
import UsedSpace from '../../lib/used-space/UsedSpace';
import css from './ImportPage.module.scss';
import UploadMedia from '../../lib/import/UploadMedia';

const ImportPage = () => {
  const [tags, setTags] = useState('');
  const tagsArr = tags.split(',').map((t) => t.trim().toLowerCase());

  return (
    <Layout isMaxWidth>
      <div className={css.titleAndLimit}>
        <h1 className='h2'>Import files</h1>
        <UsedSpace />
      </div>
      <label>
        <p>Tags to apply</p>
        <input
          className='textfield'
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder='meme, funny, trip to spain'
          maxLength={100}
        />
      </label>
      <UploadMedia tags={tagsArr} />
    </Layout>
  );
};

export default ImportPage;
