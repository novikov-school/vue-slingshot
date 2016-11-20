const tpl = `<!-- Your Music -->
<div class="navigation__list">

  <div class="navigation__list__header"
       role="button"
       data-toggle="collapse"
       href="#yourMusic"
       aria-expanded="true"
       aria-controls="yourMusic">
    Your Music
  </div>

  <div class="collapse in" id="yourMusic">

    <a href="#" class="navigation__list__item">
      <i class="ion-headphone"></i>
      <span>Songs</span>
    </a>

    <a href="#" class="navigation__list__item">
      <i class="ion-ios-musical-notes"></i>
      <span>Albums</span>
    </a>

    <a href="#" class="navigation__list__item">
      <i class="ion-person"></i>
      <span>Artists</span>
    </a>

    <a href="#" class="navigation__list__item">
      <i class="ion-document"></i>
      <span>Local Files</span>
    </a>

  </div>
</div>`;

export default {
  template: tpl
}
