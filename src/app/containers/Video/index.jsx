import React from 'react';
import Video from '../../components/Video';
import {
  videoPropTypes,
  emptyBlockArrayDefaultProps,
} from '../../models/propTypes';
import { filterForBlockType } from '../../helpers/blockHandlers';

const VideoContainer = props => {
  const rawVideo = filterForBlockType(props.blocks, 'rawVideo');

  if (!rawVideo) {
    return <h3>NOT SUPPORTED: Video Here - {props.title}</h3>;
  }

  const { locator: videoLocator, duration, versionID, kind } = rawVideo.model;

  const imageBlock = filterForBlockType(props.blocks, 'image');

  if (!imageBlock) {
    return null;
  }

  const rawImage = filterForBlockType(
    imageBlock.model.props.blocks,
    'rawImage',
  );

  if (!rawImage) {
    return null;
  }

  const { locator: imageLocator } = rawImage.model;
  const rawImageSrc = `https://ichef.bbci.co.uk/news/640${imageLocator}`;

  return (
    <Video
      videoLocator={videoLocator}
      duration={duration}
      rawImageSrc={rawImageSrc}
      versionID={versionID}
      imageLocator={imageLocator}
      kind={kind}
    />
  );
};

VideoContainer.propTypes = videoPropTypes;

VideoContainer.defaultProps = emptyBlockArrayDefaultProps;

export default VideoContainer;
