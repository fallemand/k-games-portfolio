import React from 'react';
import PortfolioPage from '../../../app/pages/portfolio/PortfolioPage';

jest.mock('../../../app/services/games.service', () => ({
  getGame: () => ({
    name: '__NAME__',
    short: '__ID__',
    images: {
      screenshot: '__SCREENSHOT-URL__',
    },
  }),
}));

jest.mock('../../../app/services/portfolio.service', () => ({
  getGames: () => ['game1', 'game2', 'game3'],
}));

describe('PortfolioPage', () => {
  const props = {
    history: { goBack: jest.fn() },
    match: { params: { id: 1 } },
  };

  it('render with props', () => {
    const component = shallow(<PortfolioPage {...props} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('render without games in portfolio', () => {
    const component = shallow(<PortfolioPage {...props} />);
    component.setState({ games: [] });
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });
});
