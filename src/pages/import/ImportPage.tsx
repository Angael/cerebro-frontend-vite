import React from 'react';
import Layout from '../../lib/layout/Layout';
import UsedSpace from '../../lib/used-space/UsedSpace';
import css from './ImportPage.module.scss';
import UploadMedia from '../../lib/import/UploadMedia';
import { useTagInput } from './useTagInput';
import Textfield from '../../styled/textfield/Textfield';
import { useTagsQuery } from '../../api/tags/fetchTags';
import ImportFromLink from '../../lib/import/import-from-link/ImportFromLink';
import { Route, Routes } from 'react-router';
import { BtnNavlink } from '../../styled/btn/Btn';

const ImportPage = () => {
  const [tags, setTags, tagsArr] = useTagInput();
  const tagsQuery = useTagsQuery();

  return (
    <Layout isMaxWidth>
      <div className={css.titleAndLimit}>
        <h1 className='h2'>Import files</h1>
        <UsedSpace />
      </div>
      <Textfield
        label='Tags to apply'
        input={{
          value: tags,
          onChange: (e) => setTags(e.currentTarget.value),
          placeholder: 'meme, funny, trip to spain',
          maxLength: 100,
          list: 'tags',
        }}
      />
      <datalist id='tags'>
        {tagsQuery.data?.map((tag) => (
          <option key={tag.id} value={tag.name} />
        ))}
      </datalist>

      <nav className={css.navBtns}>
        <BtnNavlink to={'/import/files'}>Upload files</BtnNavlink>
        <BtnNavlink to={'/import/file-from-link'}>Import from link</BtnNavlink>
      </nav>

      <Routes>
        <Route path='files' element={<UploadMedia tags={tagsArr} />} />
        <Route
          path='file-from-link'
          element={<ImportFromLink tags={tagsArr} />}
        />
      </Routes>
    </Layout>
  );
};

export default ImportPage;
