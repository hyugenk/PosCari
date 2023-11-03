import '../component/result-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const resultListElement = document.querySelector('result-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchPostcode(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    const data = []
    for (const iterator in results) {
      const res = results[iterator]
      res.ticker = iterator
      data.push(res)
    }
    resultListElement.postcodes = data;
  };

  const fallbackResult = message => {
    resultListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
