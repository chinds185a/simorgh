import React from 'react';
import ArticleMain from '../containers/ArticleMain';
import FrontPageMain from '../containers/FrontPageMain';
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
      view: <ArticleMain articleData={data.pageData} />,
      service,
      id,
      isAmp,
      pageType: 'article',
    };
  }),

  '/:service': route(async req => {
    const { service, isAmp = false } = req.params;
    const data = await getFrontpageInitialData(service);
    console.log(data.pageData);
    return {
      view: <FrontPageMain frontPageData={data.pageData} />,
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
