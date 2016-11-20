const tpl = `<!-- Main -->
<div class="navigation__list">

  <div class="navigation__list__header" role="button" data-toggle="collapse" href="#main" aria-expanded="true"
       aria-controls="main">
    Main
  </div>

  <div class="collapse in" id="main">

    <a v-for="item in items" href="#" class="navigation__list__item">
      <i class="ion-ios-browsers"></i>
      <span>{{ item }}</span>
    </a>

  </div>

</div>
`;

export default {
  template: tpl,
  data(){
    return {
      items: [
        'Browse',
        'Activity',
        'Radio'
      ]
    }
  }
}
