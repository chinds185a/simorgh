import React, { Fragment } from 'react';
import { string, shape } from 'prop-types';
import AMPShadowDocument from 'react-amp-shadow';
import Header from '../../components/Header';
import Footer from '../Footer';
import MainContent from '../../components/MainContent';
import { ServiceContextProvider } from '../../components/ServiceContext';

const constructAMPUrl = location => {
  const regex = /^\/([a-z]*)(\S*)/;
  const match = location.match(regex);

  return `https://www.test.bbc.com/${match[1]}/amp${match[2]}`;
};

const elementsToRemove = [
  'div.branding',
  'div#service-toolbar',
  '[role="banner"]',
  'div.footer',
];

const CPSArticleContainer = ({ error, location, match }) => {
  const ampUrl = constructAMPUrl(location.pathname);
  if (error) return 'Something went wrong :(';
  const { service } = match.params;
  return (
    <Fragment>
      <ServiceContextProvider service={service}>
        <Header />
        <MainContent>
          <AMPShadowDocument src={ampUrl} removeElements={elementsToRemove} />
        </MainContent>
        <Footer />
      </ServiceContextProvider>
    </Fragment>
  );
};

CPSArticleContainer.propTypes = {
  error: string,
  location: shape,
  match: shape,
};

CPSArticleContainer.defaultProps = {
  error: null,
  location: null,
  match: null,
};

export default CPSArticleContainer;
