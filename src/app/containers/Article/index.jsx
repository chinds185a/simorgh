import React from 'react';
import { shape } from 'prop-types';
import articlePropTypes from '../../models/propTypes/article';
import ArticleMain from '../ArticleMain';

const ArticleContainer = ({ data: { pageData } }) => {
  return <ArticleMain articleData={pageData} />;
};

ArticleContainer.propTypes = {
  pageData: shape(articlePropTypes),
};

ArticleContainer.defaultProps = {
  pageData: null,
};

export default ArticleContainer;
