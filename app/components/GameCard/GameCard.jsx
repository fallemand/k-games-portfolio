import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './_game-card.scss';

const GameCard = ({ className, game, onAction, actions }) => (
  <div className={classnames(className, 'game-card')}>
    <img className="game-card__image" src={game.images.banner} alt={`${game.name}`} />
    <div className="game-card__description">
      <h3 className="game-card__title">{game.name}</h3>
      {actions.includes('add') && (
        <button
          type="button"
          onClick={() => onAction('add', game.short)}
          className="game-card__button game-card__button--add"
        >
          Add to Portfolio
        </button>
      )}
      {actions.includes('remove') && (
        <button
          type="button"
          onClick={() => onAction('remove', game.short)}
          className="game-card__button game-card__button--remove"
        >
          Remove from Portfolio
        </button>
      )}
      {actions.includes('play') && (
        <button
          type="button"
          onClick={() => onAction('play', game.short)}
          className="game-card__button game-card__button--play"
        >
          Play
        </button>
      )}
    </div>
  </div>
);

GameCard.propTypes = {
  className: PropTypes.string,
  game: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired,
  actions: PropTypes.array.isRequired,
};

GameCard.defaultProps = {
  className: null,
};

export default GameCard;
