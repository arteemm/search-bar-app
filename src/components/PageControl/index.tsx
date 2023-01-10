import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCard } from '../../store/reducers/actionCreators';
import { cardSlice } from '../../store/reducers/cardSlice';

const PageControl = () => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.card);
  const { incrementPage, decrementPage } = cardSlice.actions;

  let per_page = '10';
  let page = '1';
  const { searchValue, options } = cards;

  if (cards.card.photos) {
    per_page = `${cards.card.photos.perpage}`;
    page = `${cards.card.photos.page}`;
  }

  useEffect(() => {
    dispatch(fetchCard({ searchValue, page, per_page, options }));
  }, [page]);

  return (
    <div className="page-control">
      <button className="page-control__button" onClick={() => dispatch(incrementPage())}>
        &laquo;
      </button>
      <span className="page-control__num">{page}</span>
      <button className="page-control__button" onClick={() => dispatch(decrementPage())}>
        &raquo;
      </button>
    </div>
  );
};

export default PageControl;
