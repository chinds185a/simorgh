import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { Helmet } from 'react-helmet';
import App from '../../app/containers/App';

import { getStyleTag } from '../styles';
import { getAssetsArray, getAssetOrigins } from '../assets';
import DocumentComponent from './component';

const renderDocument = async ({
  bbcOrigin,
  isAmp,
  dials,
  routes,
  service,
  url,
  navigation,
}) => {
  const sheet = new ServerStyleSheet();

  const app = renderToString(
    sheet.collectStyles(
      <App
        location={url}
        routes={routes}
        bbcOrigin={bbcOrigin}
        context={{}}
        service={service}
        isAmp={isAmp}
        navigation={navigation}
      />,
    ),
  );

  const assets = getAssetsArray(service);
  const headHelmet = Helmet.renderStatic();
  const assetOrigins = getAssetOrigins();
  const doc = renderToStaticMarkup(
    <DocumentComponent
      assets={assets}
      assetOrigins={assetOrigins}
      app={app}
      styleTags={getStyleTag(sheet, isAmp)}
      helmet={headHelmet}
      service={service}
      isAmp={isAmp}
      dials={dials}
      navigation={navigation}
    />,
  );

  return `<!doctype html>${doc}`;
};

export default renderDocument;
