import gamesService from '../../../app/services/games.service';

jest.mock('../../../app/services/data/games', () => ({
  games: [
    {
      name: 'Game 1',
      short: 'game1',
    },
    {
      name: 'Game 2',
      short: 'game2',
    }],
}));

describe('gamesService', () => {
  it('test getGames()', () => {
    const games = gamesService.getGames({});
    expect(typeof games).toBe('object');
    expect(games).toEqual({
      total: 2,
      games: [{
        images: {
          banner: 'http://royal1.midasplayer.com/images/games/game1/tournamentPage/game1_764x260.jpg',
          character: 'https://k1.midasplayer.com/images/games/game1/gameAssets/decorRight.png',
          iconL: 'http://royal1.midasplayer.com/images/games/game1/game1_170x80.gif',
          iconM: 'http://royal1.midasplayer.com/images/games/game1/game1_81x46.gif',
          iconS: 'http://royal1.midasplayer.com/images/games/game1/game1_60x60.gif',
          screenshot: 'http://royal1.midasplayer.com/images/games/game1/dumps/screen_game1.gif',
        },
        name: 'Game 1',
        short: 'game1',
      },
      {
        images: {
          banner: 'http://royal1.midasplayer.com/images/games/game2/tournamentPage/game2_764x260.jpg',
          character: 'https://k1.midasplayer.com/images/games/game2/gameAssets/decorRight.png',
          iconL: 'http://royal1.midasplayer.com/images/games/game2/game2_170x80.gif',
          iconM: 'http://royal1.midasplayer.com/images/games/game2/game2_81x46.gif',
          iconS: 'http://royal1.midasplayer.com/images/games/game2/game2_60x60.gif',
          screenshot: 'http://royal1.midasplayer.com/images/games/game2/dumps/screen_game2.gif',
        },
        name: 'Game 2',
        short: 'game2',
      }],
    });
  });

  it('test getGame()', () => {
    const game = gamesService.getGame('game1');
    expect(typeof game).toBe('object');
    expect(game).toEqual({
      images: {
        banner: 'http://royal1.midasplayer.com/images/games/game1/tournamentPage/game1_764x260.jpg',
        character: 'https://k1.midasplayer.com/images/games/game1/gameAssets/decorRight.png',
        iconL: 'http://royal1.midasplayer.com/images/games/game1/game1_170x80.gif',
        iconM: 'http://royal1.midasplayer.com/images/games/game1/game1_81x46.gif',
        iconS: 'http://royal1.midasplayer.com/images/games/game1/game1_60x60.gif',
        screenshot: 'http://royal1.midasplayer.com/images/games/game1/dumps/screen_game1.gif',
      },
      name: 'Game 1',
      short: 'game1',
    });
  });
});
