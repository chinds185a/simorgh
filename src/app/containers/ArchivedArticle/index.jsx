import React, { Fragment } from 'react';
import { shape } from 'prop-types';
import AMPShadowDocument from 'react-amp-shadow';
import Header from '../../components/Header';
import Footer from '../Footer';

const elementsToRemove = [
  'div.news--branding',
  'div.service-toolbar',
  'div.related-articles',
  'div.footer',
  'div.service-toolbar__news',
  '[role="banner"]',
];

const ArcivedArticleContainer = ({ data }) => (
  <Fragment>
    <Header />
    <AMPShadowDocument src={data.ampUrl} removeElements={elementsToRemove} />
    <Footer />
  </Fragment>
);

ArcivedArticleContainer.propTypes = {
  data: shape,
};

ArcivedArticleContainer.defaultProps = {
  data: null,
};

export default ArcivedArticleContainer;
