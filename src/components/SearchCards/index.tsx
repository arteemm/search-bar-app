import { useAppSelector } from '../../hooks/redux';
import { SearchCard } from '../index';
import { Card } from '../../types';

const SearchCards = () => {
  let cardsArr = [] as Card[];
  const cards = useAppSelector((state) => state.card);
  if (cards.card.photos) cardsArr = cards.card.photos.photo;

  return (
    <div className="cards-wrapper">
      {cardsArr.length > 0
        ? cardsArr.map((item) => <SearchCard key={item.id} card={item} />)
        : null}
    </div>
  );
};

export default SearchCards;
