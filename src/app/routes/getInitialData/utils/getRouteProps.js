import { matchRoutes } from 'react-router-config';
import { resolve } from 'navi';

const getRouteProps = async (routes, url) => {
  const matchedRoutes = await resolve({ routes, url });

  console.log(await matchRoutes);

  // if (matchedRoutes.length <= 0) {
  //   throw new Error(`No route was found for ${url}.`);
  // }

  // const { route, match } = matchedRoutes[0];
  // const { amp, id, service } = match.params;

  // const isAmp = amp ? true : false; // eslint-disable-line no-unneeded-ternary

  // return { isAmp, service, id, route, match };
};

export default getRouteProps;
