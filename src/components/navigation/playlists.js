const template = `<!-- Playlists -->
<div class="navigation__list">
  <div class="navigation__list__header"
       role="button"
       data-toggle="collapse"
       href="#playlists"
       aria-expanded="true"
       aria-controls="playlists">
    Playlists
  </div>

  <div class="collapse in" id="playlists">
    <a v-for="playlist in playlists" href="#" class="navigation__list__item">
      <i class="ion-ios-musical-notes"></i>
      <span>{{ playlist }}</span>
    </a>
  </div>
</div>`;

export default {
  template,
  data() {
    return {
      playlists: [
        'Doo Wop',
        'Pop Classics',
        'Love $ongs',
        'Hipster',
        'New Music Friday',
        'Techno Poppers'
      ]
    }
  }
}
