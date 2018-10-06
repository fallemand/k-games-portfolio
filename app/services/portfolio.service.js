/**
 * Get portfolio from LocalStorage
 * @returns {Set} list of games
 */
const getPortfolioSet = () => {
  let portfolio = window.localStorage.getItem('portfolio');
  portfolio = (portfolio) ? new Set(JSON.parse((portfolio))) : new Set();
  return portfolio;
};

/**
 * Save portfolio in LocalStorage
 * @returns {Set} list of games
 */
const savePortfolio = (portfolio) => {
  window.localStorage.setItem('portfolio', JSON.stringify(Array.from(portfolio)));
  return portfolio;
};

/**
 * Get games from portfolio
 * @returns {Array} list of games
 */
const getGames = () => Array.from(getPortfolioSet());

/**
 * Add game to portfolio
 * @param {String} shortname of the game to add
 * @returns {Array} list of games in portfolio
 */
const add = (id) => {
  const portfolioGames = getPortfolioSet();
  portfolioGames.add(id);
  savePortfolio(portfolioGames);
  return getGames();
};

/**
 * Remove game from portfolio
 * @param {String} shortname of the game to remove
 * @returns {Array} list of games in portfolio
 */
const remove = (id) => {
  const portfolioGames = getPortfolioSet();
  portfolioGames.delete(id);
  savePortfolio(portfolioGames);
  return getGames();
};

export default {
  add,
  remove,
  getGames,
};
