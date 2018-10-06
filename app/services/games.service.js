import { games } from './data/games.json';

const baseUrl = 'http://royal1.midasplayer.com/images/games/';

/**
 * Get games list from json mock
 * @param {String} query to filter - [optional]
 * @returns {Array} list of games
 */
const getGames = query => (
  query ? games.filter(
    game => game.name.toLowerCase().includes(query.toLowerCase()),
  ) : games
);

/**
 * Get games list with images url
 * @param {String} query to filter - [optional]
 * @returns {Array} list of games
 */
const getGamesWithImages = query => (
  getGames(query).map(game => ({
    name: game.name,
    short: game.short,
    url: game.url,
    images: {
      screenshot: `${baseUrl}${game.short}/dumps/screen_${game.short}.gif`,
      iconS: `${baseUrl}${game.short}/${game.short}_60x60.gif`,
      iconM: `${baseUrl}${game.short}/${game.short}_81x46.gif`,
      iconL: `${baseUrl}${game.short}/${game.short}_170x80.gif`,
      banner: `${baseUrl}${game.short}/tournamentPage/${game.short}_764x260.jpg`,
      character: `https://k1.midasplayer.com/images/games/${game.short}/gameAssets/decorRight.png`,
    },
  }))
);

export default {
  getGamesWithImages,
  getGames,
};
