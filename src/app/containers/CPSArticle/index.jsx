import React, { Fragment } from 'react';
import { bool, string, shape } from 'prop-types';
import styled from 'styled-components';
import { C_OAT_LHT } from '@bbc/psammead-styles/colours';
import MetadataContainer from '../Metadata';
import HeaderContainer from '../Header';
import FooterContainer from '../Footer';
import Headings from '../Headings';
import image from '../Image';
import paragraph from '../Paragraph';
import video from '../Video';
import socialEmbed from '../SocialEmbed';
import Blocks from '../Blocks';
import articlePropTypes from '../../models/propTypes/article';
import { ServiceContextProvider } from '../../contexts/ServiceContext';
import Timestamp from '../Timestamp';
import {
  layoutGridWrapper,
  layoutGridItemConstrained,
} from '../../lib/layoutGrid';
import { PlatformContextProvider } from '../../contexts/PlatformContext';
import GlobalStyle from '../../lib/globalStyles';

const Wrapper = styled.div`
  ${layoutGridWrapper};
`;

const OatWrapper = styled(Wrapper)`
  background: ${C_OAT_LHT};
`;

const GridItemConstrained = styled.div`
  ${layoutGridItemConstrained};
`;

const componentsToRenderMain = {
  image,
  paragraph,
  video,
  Headings,
  socialEmbed,
};

const splitBlocksByHeadline = content => {
  const mainBlocks = content.blocks;

  return { mainBlocks };
};

/*
  [1] This handles async data fetching, and a 'loading state', which we should look to handle more intelligently.
*/
const CPSArticleContainer = ({ loading, error, data }) => {
  if (loading) return 'Loading...'; /* [1] */
  if (error) return 'Something went wrong :(';
  if (data) {
    const { isAmp, data: articleData, service } = data;
    const { content, metadata, promo } = articleData;

    const { mainBlocks } = splitBlocksByHeadline(content);

    /*
     * headlineBlocks length check is temporary
     * Simorgh will respond with 400 to lack of headline block in issue
     * https://github.com/BBC-News/simorgh/issues/836
     */
    return (
      <Fragment>
        <GlobalStyle />
        <ServiceContextProvider service={service}>
          <PlatformContextProvider platform={isAmp ? 'amp' : 'canonical'}>
            <HeaderContainer />
            <MetadataContainer
              metadata={metadata}
              promo={promo}
              service={service}
            />
            <main role="main">
              <Wrapper>
                <GridItemConstrained>
                  <Headings text={promo.headlines.headline} />
                  <Timestamp timestamp={metadata.lastUpdated} />
                </GridItemConstrained>
              </Wrapper>
              <OatWrapper>
                <GridItemConstrained>
                  <Blocks
                    blocks={mainBlocks}
                    componentsToRender={componentsToRenderMain}
                  />
                </GridItemConstrained>
              </OatWrapper>
            </main>
            <FooterContainer />
          </PlatformContextProvider>
        </ServiceContextProvider>
      </Fragment>
    );
  }

  return null;
};

CPSArticleContainer.propTypes = {
  loading: bool,
  error: string,
  data: shape(articlePropTypes),
};

CPSArticleContainer.defaultProps = {
  loading: false,
  error: null,
  data: null,
};

export default CPSArticleContainer;
