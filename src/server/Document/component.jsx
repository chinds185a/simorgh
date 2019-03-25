import React, { Fragment } from 'react';
import {
  AMP_SCRIPT,
  AMP_NO_SCRIPT,
} from '@bbc/psammead-assets/amp-boilerplate';
import ResourceHints from '../../app/components/ResourceHints';

/* eslint-disable react/prop-types */
const Document = ({ assets, assetOrigins, app, data, styleTags, helmet }) => {
  const htmlAttrs = helmet.htmlAttributes.toComponent();
  const meta = helmet.meta.toComponent();
  const title = helmet.title.toComponent();
  const links = helmet.link.toComponent();
  const headScript = helmet.script.toComponent();
  const serialisedData = JSON.stringify(data);
  const scriptsAllowed = !data.isAmp;
  const scripts = assets.map(asset => (
    <script
      crossOrigin="anonymous"
      key={asset}
      type="text/javascript"
      src={asset}
      defer
    />
  ));

  return (
    <html lang="en-GB" {...htmlAttrs}>
      <head>
        {meta}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <ResourceHints assetOrigins={assetOrigins} />
        {title}
        {links}
        {styleTags}
        {headScript}
        {data.isAmp && (
          <Fragment>
            <style amp-boilerplate="">{AMP_SCRIPT}</style>
            <noscript>
              <style amp-boilerplate="">{AMP_NO_SCRIPT}</style>
            </noscript>
          </Fragment>
        )}
        {data.isAmp && (
          <script key="amp" async src="https://cdn.ampproject.org/v0.js" />
        )}
      </head>
      <body>
        {/* eslint-disable react/no-danger */
        /* disabling the rule that bans the use of dangerouslySetInnerHTML until a more appropriate implementation can be implemented */}
        <div id="root" dangerouslySetInnerHTML={{ __html: app }} />
        {scriptsAllowed && (
          <script
            dangerouslySetInnerHTML={{
              __html: `window.SIMORGH_DATA=${serialisedData}`,
            }}
          />
        )}
        {scriptsAllowed && scripts}
      </body>
    </html>
  );
};

export default Document;
