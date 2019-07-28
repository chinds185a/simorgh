import React from 'react';
import { shape } from 'prop-types';
import frontPagePropTypes from '../../models/propTypes/frontPage';
import FrontPageMain from '../FrontPageMain';

const FrontPageContainer = ({ data: { pageData } }) => (
  <FrontPageMain frontPageData={pageData} />
);

FrontPageContainer.propTypes = {
  pageData: shape(frontPagePropTypes),
};

FrontPageContainer.defaultProps = {
  pageData: null,
};

export default FrontPageContainer;
