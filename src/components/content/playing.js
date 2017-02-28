const template = ` 
<section class="playing">
  <div class="playing__art">
    <img :src="track.thumb" alt="Album Art"/>
  </div>
  <div class="playing__song">
    <a class="playing__song__name">{{ track.name }}</a>
    <a class="playing__song__artist">{{ track.artist }}</a>
  </div>
  <div class="playing__add">
    <i class="ion-checkmark"></i>
  </div>
</section>`;

export default {
  template,
  props: [
    'track'
  ]
}
