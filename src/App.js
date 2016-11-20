import "./sass/app.scss";
//import {mapActions} from './store';

const tpl = `
<div class="app">
<section-header></section-header>

<section class="content">

  <div class="content__left">
  
    <navigation></navigation>
      
    <section class="playlist">

      <a href="#">

        <i class="ion-ios-plus-outline"></i>

        New Playlist

      </a>

    </section>

    <section class="playing">

      <div class="playing__art">

        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/cputh.jpg" alt="Album Art" />

      </div>

      <div class="playing__song">

        <a class="playing__song__name">Some Type of Love</a>

        <a class="playing__song__artist">Charlie Puth</a>

      </div>

      <div class="playing__add">

        <i class="ion-checkmark"></i>

      </div>

    </section>
    
  </div>
  
  <div class="content__middle">
    <router-view></router-view>
  </div>
  
  <content-right></content-right>
  
</section>

<current-track></current-track>
</div>`;

import sectionHeader from './components/section-header';
import contentRight from './components/right';
import currentTrack from './components/current-track';

export default {
  name: 'App',
  template: tpl,
  components: {
    'section-header': sectionHeader,
    'content-right': contentRight,
    'current-track': currentTrack
  },

  data() {
    return {
      loading: true,
      localState: {}
    };
  },

  mounted() {
    setTimeout(() => {
      this.$store.dispatch('applicationReady', this.localState);
      this.loading = false;
    }, 1000);
  }
};

