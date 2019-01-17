import Article from '../containers/Article';
import CPSArticle from '../containers/CPSArticle';
import getInitialData from './getInitialData';
import services from '../lib/config/services';

const serviceRegex = Object.keys(services)
  .filter(serviceName => serviceName !== 'default')
  .join('|');
const idRegex = 'c[a-zA-Z0-9]{10}o';
const ampRegex = '.amp';

export const articleRegexPath = `/:service(${serviceRegex})/articles/:id(${idRegex}):amp(${ampRegex})?`;
export const cpsArticleRegexPath = `/:service(${serviceRegex})/:id`;

const routes = [
  {
    path: articleRegexPath,
    exact: true,
    component: Article,
    getInitialData,
  },
  {
    path: cpsArticleRegexPath,
    exact: true,
    component: CPSArticle,
    getInitialData,
  },
];

export default routes;
