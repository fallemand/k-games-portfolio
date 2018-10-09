import React from 'react';
import SearchPage from '../../../app/pages/search/SearchPage';
import portfolioService from '../../../app/services/portfolio.service';

jest.mock('../../../app/services/games.service', () => ({
  getGame: () => ({
    name: '__NAME__',
    short: '__ID__',
    images: {
      screenshot: '__SCREENSHOT-URL__',
    },
  }),
  getGames: () => ({
    total: 10,
    games: [{
      name: '__NAME__',
      short: '__ID__',
      images: {
        screenshot: '__SCREENSHOT-URL__',
      },
    }],
  }),
}));

jest.mock('../../../app/services/portfolio.service', () => ({
  getGames: () => ['game1', 'game2', 'game3'],
  remove: jest.fn().mockImplementation(() => ['game1', 'game2', 'game3']),
  add: jest.fn().mockImplementation(() => ['game1', 'game2', 'game3']),
}));

describe('SearchPage', () => {
  const props = {
    history: { push: jest.fn() },
    location: { search: '' },
  };

  it('render with props', () => {
    const component = shallow(<SearchPage {...props} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('handle different actions', () => {
    const component = shallow(<SearchPage {...props} />);
    component.instance().onCardButtonPressed('add', 'game1');
    expect(portfolioService.add).toHaveBeenCalledWith('game1');
    component.instance().onCardButtonPressed('remove', 'game1');
    expect(portfolioService.remove).toHaveBeenCalledWith('game1');
  });
});
