import React from 'react';
import Btn from '../../styled/btn/Btn';
import { FrontItem } from '@vanih/cerebro-contracts';
import css from './Pagination.module.scss';
import { useQueryItemCount } from '../../api/itemsApi';
import { PAGINATION_LIMIT } from '../../utils/consts';

type Props = {
  items: FrontItem[];
  page: number;
  setCursor: (cursor: number) => void;
};

const Pagination = (props: Props) => {
  const { items, page, setCursor } = props;

  const itemCount = useQueryItemCount();

  const pageNr = page + 1;
  const pageCount = Math.ceil((itemCount.data ?? 0) / PAGINATION_LIMIT);

  const onNext = () => {
    setCursor(page + 1);
  };

  const canGoBack = pageNr > 1;
  const canGoForward = page < pageCount - 1;

  const onPrevious = () => {
    setCursor(page - 1);
  };

  const goTo = (index: number) => () => {
    setCursor(index);
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
