import routeArtist from './artist';

const defaultRoute = routeArtist.path;

export const routes = [
  { path: '/', redirect: defaultRoute },
  routeArtist
];

export default routes
