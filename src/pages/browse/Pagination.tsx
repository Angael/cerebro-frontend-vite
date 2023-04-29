import React from 'react';
import Btn from '../../styled/btn/Btn';
import css from './Pagination.module.scss';

type Props = {
  page: number;
  setPage: (cursor: number) => void;
  pageCount: number;
};

const Pagination = ({ page, setPage, pageCount }: Props) => {
  const onNext = () => {
    setPage(page + 1);
  };

  const canGoBack = page > 1;
  const canGoForward = page < pageCount;

  const onPrevious = () => {
    setPage(page - 1);
  };

  const goTo = (index: number) => () => {
    setPage(index);
  };

  return (
    <nav className={css.pagination}>
      <Btn onClick={onPrevious} disabled={!canGoBack}>
        Back
      </Btn>

      <p style={{ whiteSpace: 'nowrap' }}>Page {page}</p>

      {Array(pageCount)
        .fill(null)
        .map((_, pageIndex) => (
          <Btn
            className={css.mobileHidden}
            key={pageIndex + 1}
            onClick={goTo(pageIndex + 1)}
            disabled={page === pageIndex + 1}
          >
            {pageIndex + 1}
          </Btn>
        ))}

      <div style={{ flex: 1 }} />

      <Btn onClick={onNext} disabled={!canGoForward}>
        Next
      </Btn>
    </nav>
  );
};

export default React.memo(Pagination);
