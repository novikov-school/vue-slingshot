const tpl = `<!-- navigation -->
<section class="navigation">
  <navigation-main></navigation-main>
  <navigation-your-music></navigation-your-music>
  <navigation-playlists></navigation-playlists>
</section>`;

import navigationMain from './main';
import navigationYourMusic from './your-music';
import navigationPlaylists from './playlists';

export default {
  template: tpl,
  components: {
    'navigation-main': navigationMain,
    'navigation-your-music': navigationYourMusic,
    'navigation-playlists': navigationPlaylists
  }
}
