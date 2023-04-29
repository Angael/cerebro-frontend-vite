import React from 'react';
import { LocalFile } from '../../api/local/localApi';
import PreviewLocalFile from './PreviewLocalFile';
import css from './PreviewLocalFiles.module.scss';
import { useLocalStore } from './localStores';
import Pagination from '../../pages/browse/Pagination';

type Props = {
  files: LocalFile[];
};

const FILES_PER_PAGE = 3 * 3;

const PreviewLocalFiles = (props: Props) => {
  const { filePaths, toggleFilePath } = useLocalStore();
  const [page, setPage] = React.useState(0);

  const ref = React.useRef<HTMLDivElement>(null);
  const handlePageChange = (_page: number) => {
    setPage(_page - 1);
    ref.current?.scrollIntoView();
  };

  const start = page * FILES_PER_PAGE;
  const end = start + FILES_PER_PAGE;
  const paginatedFiles = props.files.slice(start, end);
  const pageCount = Math.ceil(props.files.length / FILES_PER_PAGE);

  return (
    <div>
      <Pagination
        page={page + 1}
        setPage={handlePageChange}
        pageCount={pageCount}
      />

      <div className={css.previewLocalStack} ref={ref}>
        {paginatedFiles.map((file) => (
          <PreviewLocalFile
            key={file.path}
            file={file}
            selected={filePaths.includes(file.path)}
            onToggle={toggleFilePath}
          />
        ))}
      </div>

      <Pagination
        page={page + 1}
        setPage={handlePageChange}
        pageCount={pageCount}
      />
    </div>
  );
};

export default PreviewLocalFiles;
