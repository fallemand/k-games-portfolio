import React from 'react';
import GamePage from '../../../app/pages/game/GamePage';

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
  contains: () => true,
}));


describe('GamePage', () => {
  const props = {
    history: { goBack: jest.fn() },
    match: { params: { id: 1 } },
  };

  it('render with props', () => {
    const component = shallow(<GamePage {...props} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('change state and render', () => {
    const component = shallow(<GamePage {...props} />);
    component.setState({ inPortfolio: false });
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });
});
