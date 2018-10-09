module.exports = {
  '@tags': ['mla', 'mlb', 'mlm', 'mlv', 'mco', 'mlu', 'mlc', 'mpe', 'mec', 'mcr', 'mpa', 'mbo', 'mpy', 'mpt', 'mgt', 'mdo'],
  before: (browser) => {
    this.url = browser.globals.urls.demo;
  },

  after: (browser) => {
    browser.end();
  },

  'should contain the demo button': (browser) => {
    const demoPage = browser.page['demo-page']();

    demoPage
      .navigate(this.url)
      .waitForElementPresent('@root', 5000)
      .assert.title('Demo Page')
      .waitForElementVisible('@btn_demo', 1000)
      .assert.containsText('@btn_demo', 'Click Me!');
  },
};
