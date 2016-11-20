import artistHeader from './artist-header';

const tpl = `<!-- Artist -->
<div class="artist is-verified">
  <artist-header></artist-header>
  
  <div class="artist__content">
    <div class="tab-content">
      <router-view></router-view>
    </div>
  </div>

</div>`;

export default {
  template: tpl,
  components: {
    artistHeader
  },
  name: 'Artists',
  data() {
    return {}
  }
}
