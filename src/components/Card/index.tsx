import { Card } from '../../types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCard } from '../../store/reducers/actionCreators';

type SearchCardProps = {
  card: Card;
};

const SearchCard = (props: SearchCardProps) => {
  // const dispatch = useDispatch();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    // dispatch(fetchCard(props.card));
    // dispatch(openCardPage());
  };

  return (
    <Link to="/details">
      <div onClick={handleClick} className="search-card" data-testid="search-card">
        <h3 data-testid="search-title" className="search-card__title">
          {props.card.title}
        </h3>
        <div
          className="search-card__image"
          style={{
            backgroundImage: `url(${props.card.url_m})`,
          }}
        />
      </div>
    </Link>
  );
};

export default SearchCard;
