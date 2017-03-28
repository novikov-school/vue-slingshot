import './css/app.css';
import noUiSlider from 'nouislider';
import sectionHeader from './components/section-header';
import content from './components/content';
import currentTrack from './components/current-track';

export default {
  name: 'App',
  components: {
    sectionHeader,
    'app-content': content, // alias for component
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
      // this.$store.dispatch('applicationReady', this.localState);
      this.loading = false;
    }, 1000);

    let slider = document.getElementById('song-progress');

    noUiSlider.create(slider, {
      start: [ 20 ],
      range: {
        'min': [   0 ],
        'max': [ 100 ]
      }
    });

    slider = document.getElementById('song-volume');

    noUiSlider.create(slider, {
      start: [ 90 ],
      range: {
        'min': [   0 ],
        'max': [ 100 ]
      }
    });
  }
};

