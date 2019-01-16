import React from 'react';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import Caption from '@bbc/psammead-caption';
import { ServiceContext } from '../../contexts/ServiceContext';

const CaptionContainer = ({ block }) => {
  return (
    <ServiceContext.Consumer>
      {
        ({imageCaptionOffscreenText}) => (
          <Caption>
            {
              imageCaptionOffscreenText
                ? (
                  <VisuallyHiddenText>{imageCaptionOffscreenText}</VisuallyHiddenText>
                )
                : null
            }
            {block}
          </Caption>
        )
      }
    </ServiceContext.Consumer>
  )
};

export default CaptionContainer;
