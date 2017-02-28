import overviewAlbums from './overview-albums';
import overviewRelated from './overview-related';
import overviewArtist from './overview-artist';

export default {
  template: `<!-- Overview tab -->
<div role="tabpanel" class="tab-pane active" id="artist-overview">

  <div class="overview">
    <overview-artist></overview-artist>
    <overview-related></overview-related>
    <overview-albums></overview-albums>
  </div>

</div>`,
  components: {
    overviewArtist,
    overviewRelated,
    overviewAlbums
  },
}
