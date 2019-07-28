import React from 'react';
import Article from '../containers/Article';
import FrontPage from '../containers/FrontPage';
import MediaPage from '../containers/MediaPage';
import getArticleInitialData from './getInitialData/article';
import getFrontpageInitialData from './getInitialData/frontpage';
import getMediaPageInitialData from './getInitialData/mediapage';
import {
  articleRegexPath,
  frontpageRegexPath,
  mediaRadioAndTvRegexPathsArray,
} from './regex';
import { mount, route } from 'navi';

const routes = mount({
  '/:service/articles/:id': route(async req => {
    const { service, id, isAmp = false } = req.params;
    const data = await getArticleInitialData(service, id);
    return {
      view: <Article data={data} />,
      service,
      id,
      isAmp,
      pageType: 'article',
    };
  }),

  '/:service': route(async req => {
    const { service, isAmp = false } = req.params;
    const data = await getFrontpageInitialData(service);
    return {
      view: <FrontPage data={data} />,
      service,
      isAmp,
      pageType: 'frontPage',
    };
  }),
});

// const routes = [
//   {
//     path: articleRegexPath,
//     exact: true,
//     component: Article,
//     getInitialData: getArticleInitialData,
//     pageType: 'article',
//   },
//   {
//     path: frontpageRegexPath,
//     exact: true,
//     component: FrontPage,
//     getInitialData: getFrontpageInitialData,
//     pageType: 'frontPage',
//   },
//   {
//     path: mediaRadioAndTvRegexPathsArray,
//     exact: true,
//     component: MediaPage,
//     getInitialData: getMediaPageInitialData,
//     pageType: 'media',
//   },
// ];

export default routes;
