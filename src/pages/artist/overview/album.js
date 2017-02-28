import albumTracks from './album-tracks';

const template = `<!-- Album -->
<div class="album">

  <div class="album__info">
    <div class="album__info__art">
      <img src="/public/img/whenDarkOut.jpg" alt="When It's Dark Out"/>
    </div>
    <div class="album__info__meta">
      <div class="album__year">2015</div>
      <div class="album__name">When It's Dark Out</div>
      <div class="album__actions">
        <button class="button-light save">Save</button>
        <button class="button-light more">
          <i class="ion-ios-more"></i>
        </button>
      </div>
    </div>
  </div>

  <album-tracks></album-tracks>
</div>`;

export default {
  template,
  components: {
    albumTracks
  },
}
