import React from 'react';
import { filterForBlockType } from '../../helpers/blockHandlers';
import { imageModelPropTypes } from '../../models/propTypes/image';
import Figure from '../Figure';

const DEFAULT_IMAGE_RES = 640;

const getText = ({ model }) => model.blocks[0].model.blocks[0].model.text;

const getCopyright = copyrightHolder => {
  if (copyrightHolder === 'BBC') {
    return null;
  }

  return copyrightHolder;
};

const getIChefURL = (originCode, locator) => {
  // temp code - default to 'cpsdevpb' until Optimo complete work to supply non-empty originCode
  const overridableOriginCode = originCode || 'cpsdevpb';

  return `https://ichef.bbci.co.uk/news/${DEFAULT_IMAGE_RES}/${overridableOriginCode}/${locator}`;
};

// Not yest getting the ichef image due to needing originCode and locator
const getRawImageSrc = (originCode, locator) =>
  originCode !== 'pips' ? getIChefURL(originCode, locator) : locator;

const ImageContainer = ({
  href,
  altText,
  caption,
  copyrightHolder,
  height,
  width,
}) => {
  // console.log(`ImageContainer Props: ${JSON.stringify(href)}`);

  if (!href || !altText) {
    return null;
  }

  const ratio = (height / width) * 100;

  return (
    <Figure
      alt={altText}
      captionBlock={caption}
      copyright={copyrightHolder}
      height={height}
      ratio={ratio}
      src={href}
      width={width}
    />
  );
};

ImageContainer.propTypes = imageModelPropTypes;

export default ImageContainer;
