import React from 'react';
import { string } from 'prop-types';
import { Headline } from '@bbc/psammead-headings';
import { textDefaultPropTypes } from '../../models/propTypes';
import { headlineModelPropTypes } from '../../models/propTypes/headline';

const HeadingsContainer = ({ text }) => {
  if (!text) {
    return null;
  }

  return <Headline text={text}>{text}</Headline>;
};

HeadingsContainer.propTypes = {
  ...headlineModelPropTypes,
  text: string.isRequired,
};

HeadingsContainer.defaultProps = textDefaultPropTypes;

export default HeadingsContainer;
