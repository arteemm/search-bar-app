import { SearchBar, PageControl } from '../../components/index';
import { useAppDispatch } from '../../hooks/redux';
import { fetchCard } from '../../store/reducers/actionCreators';
import { useEffect } from 'react';
import { SearchCards } from '../../components';

const MainPage = () => {
  const searchValue = localStorage.getItem('val') || 'summer';

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCard({ searchValue, page: '1', per_page: '10', options: '' }));
  });

  return (
    <section className="wrapper section-wrapper">
      <SearchBar />
      <SearchCards />
      <PageControl />
    </section>
  );
};

export default MainPage;
