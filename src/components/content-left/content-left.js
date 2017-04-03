import navigation from '../navigation';
import playing from './playing';

export default {
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

