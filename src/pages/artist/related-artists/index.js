import {mapGetters} from 'vuex';

const template = `<!-- Related Artists -->
<div role="tabpanel" class="" id="related-artists">
  <div class="media-cards">
    <div v-for="artist in related" class="media-card">

      <div class="media-card__image" :style="artist.style">
        <i class="ion-ios-play"></i>
      </div>

      <a class="media-card__footer">{{ artist.name }}</a>
    </div>
  </div>
</div>`;

export default {
  template,
  name: 'RelatedArtists',
  created(){
    this.$store.dispatch('fetchRelatedArtists');
  },
  computed: mapGetters({
    related: 'getRelatedArtists'
  })
}
