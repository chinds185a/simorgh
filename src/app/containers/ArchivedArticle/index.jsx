import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { shape } from 'prop-types';
import AMPDocument from 'react-amp-document';
import Header from '../../components/Header';
import Footer from '../Footer';

/*
  [1] This handles async data fetching, and a 'loading state', which we should look to handle more intelligently.
*/
const ArcivedArticleContainer = ({ data, history }) => {
  console.log(data.ampUrl);
  return (
    <Fragment>
      <Header />
      <AMPDocument src={data.ampUrl} router={history} />
      <Footer />
    </Fragment>
  );
};

ArcivedArticleContainer.propTypes = {
  data: shape,
  history: shape,
};

ArcivedArticleContainer.defaultProps = {
  data: null,
  history: null,
};

export default withRouter(ArcivedArticleContainer);
