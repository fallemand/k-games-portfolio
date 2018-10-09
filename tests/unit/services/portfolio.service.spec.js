import portfolioService from '../../../app/services/portfolio.service';

global.window = {
  localStorage: {
    setItem: jest.fn(),
    getItem: jest.fn().mockImplementation(() => '["game1", "game2"]'),
  },
};

describe('portfolioService', () => {
  it('test getGames', () => {
    const games = portfolioService.getGames();
    expect(Array.isArray(games)).toBe(true);
    expect(games).toEqual(['game1', 'game2']);
  });

  it('test contains', () => {
    expect(portfolioService.contains('game1')).toBe(true);
    expect(portfolioService.contains('game-no-in-portfolio')).toBe(false);
  });

  it('test add', () => {
    portfolioService.add('new-game');
    const newPortfolio = '["game1","game2","new-game"]';
    expect(window.localStorage.setItem).toHaveBeenCalledWith('portfolio', newPortfolio);
  });

  it('test remove', () => {
    portfolioService.remove('game1');
    const newPortfolio = '["game2"]';
    expect(window.localStorage.setItem).toHaveBeenCalledWith('portfolio', newPortfolio);
  });
});
