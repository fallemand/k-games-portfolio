const searchCellphone = (client, query) => {
  const searchPage = client.page.SearchPage();
  searchPage.search(query);
};

module.exports = {
  'Should search Iphone': (client) => {
    searchCellphone(client, 'iphone');
  },
  beforeEach: function (client) {
    client.url(client.globals.site);
  },
  after: function (client) {
    client.end();
  },
};
