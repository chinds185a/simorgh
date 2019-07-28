/* eslint-disable react/jsx-filename-extension  */
import React from 'react';
import Loadable from 'react-loadable';
import { hydrate } from 'react-dom';
import App from './app/containers/App';
import routes from './app/routes';
import { createBrowserNavigation } from 'navi';
import { template, templateStyles } from './app/lib/joinUsTemplate';

const root = document.getElementById('root');

let navigation = createBrowserNavigation({
  routes,
});

const hydration = async () => {
  let {
    lastChunk: { request, url },
  } = await navigation.getRoute();
  const { service, id, pageType, isAmp } = request.context;
  const { pathname } = url;

  const pageProps = {
    service,
    id,
    isAmp,
    pageType,
    url: pathname,
  };

  // console.log(`route: ${JSON.stringify(route)}`);
  Loadable.preloadReady().then(() => {
    hydrate(<App navigation={navigation} {...pageProps} />, root);
  });
};

hydration();

if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line no-console
  console.log(template, ...templateStyles);
}

if (module.hot) {
  module.hot.accept();
}
