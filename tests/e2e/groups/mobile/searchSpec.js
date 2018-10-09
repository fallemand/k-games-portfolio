module.exports = {
  'Should filter with game name': (client) => {
    const searchPage = client.page.SearchPage();
    searchPage
      .filter('Amazon Speed');
    client.elements('css selector', '.search__list .game-card', (result) => {
      client.assert.equal(result.value.length, 1);
      searchPage.expect.element('@gamesFirstChildTitle').text.to.equal('Amazon Speed');
    });
  },
  'Should sort games DESC': (client) => {
    const searchPage = client.page.SearchPage();
    searchPage
      .sortDesc()
      .waitNoLoading()
      .expect.element('@gamesFirstChildTitle').text.to.equal('Yo-yo Jackpot');
  },
  beforeEach: (client) => {
    client.url(client.globals.site);
  },
  after: (client) => {
    client.end();
  },
};
