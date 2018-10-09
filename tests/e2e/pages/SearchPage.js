module.exports = {
  commands: [{
    filter(query) {
      this.waitForElementVisible('@filterField', 2000)
        .setValue('@filterField', query);
      return this;
    },
    sortDesc() {
      this.waitForElementVisible('@sortField', 2000)
        .click('@filterField')
        .waitForElementVisible('@sortOptionDesc', 2000)
        .click('@sortOptionDesc');
      return this;
    },
    hoverFirstElement(callback) {
      this
        .waitForElementVisible('@loadingNotVisible', 4000)
        .waitForElementVisible('@gamesFirstChild', 2000)
        .moveToElement('@gamesFirstChild', 10, 10, callback);
      return this;
    },
    waitNoLoading() {
      this.waitForElementVisible('@loadingNotVisible', 4000);
      return this;
    },
  }],
  elements: {
    filterField: '.filter__field[name="filter"]',
    sortField: '.filter__field[name="sort"]',
    sortOptionDesc: '.filter__field[name="sort"] option[value="descendant"]',
    listOfGames: '.search__list',
    gamesFirstChild: '.search__list .game-card:first-child',
    gamesFirstChildTitle: '.game-card:first-child .game-card__title',
    gamesFirstChildFirstButton: '.game-card:first-child .game-card__button:first-child',
    pagination: '.pagination',
    paginationButtons: '.pagination .pagination__number',
    loadingNotVisible: '.search__list:not(.search__list--loading)',
  },
};
