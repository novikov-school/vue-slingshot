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

    <a v-for="item in items" href="#" class="navigation__list__item">
      <i class="ion-headphone"></i>
      <span>{{ item }}</span>
    </a>

  </div>
</div>`;

export default {
  template: tpl,
  data() {
    return {
      items: [
        'Songs',
        'Albums',
        'Artists',
        'Local Files'
      ]
    }
  }
}
