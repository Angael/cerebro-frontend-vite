import React, { useEffect, useMemo } from 'react';
import Btn from '../../styled/btn/Btn';
import css from './Pagination.module.scss';
import clamp from 'clamp';
import { getPagination } from './getPagination';

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

  useEffect(() => {
    if (page > pageCount) {
      setPage(clamp(page, 1, pageCount));
    }
  }, [page, pageCount]);

  const shownButtons = getPagination(page, pageCount, 9);

  return (
    <nav className={css.paginationStack}>
      <Btn onClick={onPrevious} disabled={!canGoBack}>
        Back
      </Btn>

      <div className={css.pages}>
        {shownButtons.map((nr) => (
          <Btn
            className={css.mobileHidden}
            key={nr}
            onClick={goTo(nr)}
            disabled={page === nr}
          >
            {nr}
          </Btn>
        ))}
      </div>

      <Btn onClick={onNext} disabled={!canGoForward}>
        Next
      </Btn>
    </nav>
  );
};

export default React.memo(Pagination);
