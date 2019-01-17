import React, { Suspense } from 'react';
import useFetch from 'fetch-suspense';

const FetchEmbed = ({ url }) => {
  const data = useFetch(`https://publish.twitter.com/oembed?url=${url}`, {
    method: 'GET',
  });
  return data.html;
};

const SocialEmbedContainer = ({ href, source }) => (
  <Suspense fallback={<h2>Loading ${source}...</h2>}>
    <FetchEmbed url={href} />
  </Suspense>

  // <TwitterTweetEmbed tweetId="1085935373409308675" />
);

export default SocialEmbedContainer;
