import { Loading } from '../index';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCard } from '../../store/reducers/actionCreators';
import { cardSlice } from '../../store/reducers/cardSlice';

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const { setSearchWord, setPerPageCards } = cardSlice.actions;
  const cards = useAppSelector((state) => state.card);

  let per_page = '10';
  let page = '1';
  const { searchValue, options } = cards;

  if (cards.card.photos) {
    per_page = `${cards.card.photos.perpage}`;
    page = `${cards.card.photos.page}`;
  }
  // const dispatch = useDispatch();

  // const searchValue = useSelector<{ search: { searchValue: string } }, string>((state) => {
  //   return state.search.searchValue;
  // });
  // const isDisabled = useSelector<{ loader: { isDisabled: boolean } }, boolean>(
  //   (state) => state.loader.isDisabled
  // );

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchWord(event.target.value));
  };

  // const page = useSelector<{ changePageReducer: { page: string } }, string>(
  //   (state) => state.changePageReducer.page
  // );

  // const count = useSelector<{ countInPage: { count: string } }, string>(
  //   (state) => state.countInPage.count
  // );

  // const opt = useSelector<{ searchOptions: { opt: string } }, string>(
  //   (state) => state.searchOptions.opt
  // );

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    // dispatch(changeLoader());
    dispatch(fetchCard({ searchValue, page, per_page, options }));
  };

  // const optChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   dispatch(changeOptionParam(event.target.value));
  // };

  const changeCountCard = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setPerPageCards(+event.target.value));
  };

  useEffect(() => {
    return () => localStorage.setItem('val', searchValue);
  }, [searchValue]);

  useEffect(() => {
    // dispatch(changeLoader());
    dispatch(fetchCard({ searchValue, page, per_page, options }));
  }, [per_page, options]);

  return (
    <form className="search-bar" data-testid="main-page" onSubmit={handleSubmit}>
      <label htmlFor="search">
        <input
          id="search"
          // disabled={isDisabled}
          type="text"
          onChange={inputChange}
          value={searchValue}
          className="search-bar__input"
          required
          data-testid="input-search"
        />
        <span className="search-bar__highlight"></span>
      </label>
      <button
        className="search-bar__submit"
        type="submit"
        // disabled={isDisabled}
        data-testid="search-submit"
      >
        {/* {isDisabled ? <Loading /> : 'Search'} */}
      </button>
      {/* <select className="search-bar__opt" value={opt} onChange={optChange}>
        <option value="interestingness-desc">interestingness-desc</option>
        <option value="interestingness-asc">interestingness-asc</option>
        <option value="relevance">relevance</option>
      </select> */}
      <label className="search-bar__page-opt">
        per in page:
        <select className="search-bar__opt" value={per_page} onChange={changeCountCard}>
          <option value="10">10</option>
          <option value="100">100</option>
        </select>
      </label>
    </form>
  );
};

export default SearchBar;
