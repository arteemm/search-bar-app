import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from '../../types';
import { useEffect } from 'react';

function CardPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      // dispatch(openCardPage());
    };
  }, []);

  const currentCard = useSelector<{ showCurrentCard: { showCurrentCard: Card } }, Card>((state) => {
    return state.showCurrentCard.showCurrentCard;
  });

  return (
    <div className="wrapper card-page">
      <h3 className="card-page__title">{currentCard ? currentCard.title : null}</h3>
      <div
        className="card-page__image"
        style={{
          backgroundImage: `url(${currentCard ? currentCard.url_m : null})`,
        }}
      />
      <p className="card-page__owner">Owner: {currentCard ? currentCard.owner : null}</p>
      <Link to="/" className="card-page__button">
        &larr; Back
      </Link>
    </div>
  );
}

export default CardPage;
