module.exports = {
  url: '',
  get: get,
  getPageTitle: getPageTitle,
};


/**
 * Navigate to the home page.
 * @return {undefined}
 */
function get() {
  var url = this.url;
  if (!url) {
    throw new TypeError('A page object must have a URL defined in order to call \'get\'');
  }
  browser.get(this.url);
}


/**
 * Get the page title.
 * @return {string} page title.
 */
function getPageTitle() {
  return browser.getTitle();
}