import artist from './artist';
import relatedArtists from './related-artists';
import overview from './overview';

export default {
  path: '/artist',
  name: 'artist',
  component: artist,
  meta: {
    title: 'Artist'
  },
  children: [
    { path: '', redirect: 'overview' },
    {
      name: 'artist-overview',
      path: 'overview',
      component: overview,
      meta: {
        title: 'Overview'
      }
    },
    {
      name: 'artist-related',
      path: 'related',
      component: relatedArtists,
      meta: {
        title: 'Related artists'
      }
    }
  ]
}
