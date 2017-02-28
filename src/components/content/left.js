import navigation from '../navigation';
import playing from './playing';

const template = ` 
 <div class="content__left">
  <navigation></navigation>
  <section class="playlist">

    <a href="#">
      <i class="ion-ios-plus-outline"></i>
      New Playlist
    </a>
  </section>

  <playing :track="track"></playing>
</div>`;

export default {
  template,
  components: {
    navigation,
    playing
  },
  data() {
    return {
      track: {
        thumb: '/public/img/cputh.jpg',
        name: 'Some Type of Love',
        artist: 'Charlie Puth'
      }
    }
  }
}
