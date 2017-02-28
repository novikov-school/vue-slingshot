import navigationMain from './main';
import navigationYourMusic from './your-music';
import navigationPlaylists from './playlists';

const template = `<!-- navigation -->
<section class="navigation">
  <navigation-main></navigation-main>
  <navigation-your-music></navigation-your-music>
  <navigation-playlists></navigation-playlists>
</section>`;

export default {
  template,
  components: {
    navigationMain,
    navigationYourMusic,
    navigationPlaylists
  },
  data() {
    return {}
  }
}
