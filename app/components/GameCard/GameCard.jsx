import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../Button';
import './_game-card.scss';

const GameCard = ({ className, game, onAction, actions }) => (
  <div className={classnames(className, 'game-card')}>
    <img className="game-card__image" src={game.images.banner} alt={`${game.name}`} />
    <div className="game-card__description">
      <h3 className="game-card__title">{game.name}</h3>
      <div className="game-card__actions">
        {actions.includes('add') && (
          <Button onClick={() => onAction('add', game.short)} color={Button.colors.GREEN}>
            Add to Portfolio
          </Button>
        )}
        {actions.includes('remove') && (
          <Button onClick={() => onAction('remove', game.short)} color={Button.colors.DEFAULT}>
            Remove from Portfolio
          </Button>
        )}
        {actions.includes('play') && (
          <Button onClick={() => onAction('play', game.short)} color={Button.colors.BLUE}>
            Play
          </Button>
        )}
      </div>
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
