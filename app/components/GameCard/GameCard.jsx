import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './_game-card.scss';

const GameCard = ({ className, game }) => (
  <div className={classnames(className, 'game-card')}>
    <img className="game-card__image" src={game.images.banner} alt={`${game.name}`} />
    <div className="game-card__description">
      <h3 className="game-card__title">{game.name}</h3>
      <button className="game-card__button game-card__button--add">Add to Portfolio</button>
      <button className="game-card__button game-card__button--remove">Remove from Portfolio</button>
      <button className="game-card__button game-card__button--play">Play</button>
    </div>
  </div>
);

GameCard.propTypes = {
  className: PropTypes.string,
  game: PropTypes.object.isRequired,
};

GameCard.defaultProps = {
  className: null,
};

export default GameCard;
