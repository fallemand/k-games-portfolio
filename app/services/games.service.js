import { games } from './data/games.json';

const baseUrl = 'http://royal1.midasplayer.com/images/games/';

/**
 * Get games list with images url
 * @param {String} query to filter - [optional]
 * @returns {Array} list of games
 */
const addImagesAttributes = game => ({
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
});

/**
 * Get games list from json mock
 * @param {Object} params to filter and sort response - [optional]
 * @returns {Object} games: list of games, total: total games
 */
const getGames = ({ filter, sort, page, pageSize }) => {
  const filteredGames = filter ? games.filter(
    game => game.name.toLowerCase().includes(filter.toLowerCase()),
  ) : games;

  if (sort) {
    filteredGames.sort((a, b) => {
      switch (sort) {
        case 'RANDOM': return 0.5 - Math.random();
        case 'ASC': return a.name.localeCompare(b.name);
        case 'DESC': return a.name.localeCompare(b.name) * -1;
        default: return 0;
      }
    });
  }

  let paginatedGames = [];
  if (page) {
    const startElement = (page - 1) * pageSize;
    const endElement = page * pageSize;
    paginatedGames = filteredGames.slice(startElement, endElement);
  }

  return {
    games: paginatedGames.map(game => addImagesAttributes(game)),
    total: filteredGames.length,
  };
};

/**
 * Get game by id.
 * @param {id} short name of the game
 * @returns {Object} games: list of games, total: total games
 */
const getGame = id => addImagesAttributes(games.find(game => game.short === id));

export default {
  getGame,
  getGames,
};
