import React from 'react';
import Btn from '../../styled/btn/Btn';
import css from './Pagination.module.scss';
import { PAGINATION_LIMIT } from '../../utils/consts';

type Props = {
  count?: number;
  page: number;
  setPage: (cursor: number) => void;
};

const Pagination = ({ count, page, setPage }: Props) => {
  const pageNr = page + 1;
  const pageCount = Math.ceil((count ?? 0) / PAGINATION_LIMIT);

  const onNext = () => {
    setPage(page + 1);
  };

  const canGoBack = pageNr > 1;
  const canGoForward = page < pageCount - 1;

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

      <p style={{ whiteSpace: 'nowrap' }}>Page {pageNr}</p>

      {Array(pageCount)
        .fill(null)
        .map((_, pageIndex) => (
          <Btn
            className={css.mobileHidden}
            key={pageIndex}
            onClick={goTo(pageIndex)}
            disabled={page === pageIndex}
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

export default Pagination;
