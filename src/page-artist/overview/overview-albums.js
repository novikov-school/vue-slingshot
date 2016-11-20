import album from './album';

const tpl = `<!-- Overview albums -->
<div class="overview__albums">

  <div class="overview__albums__head">

    <span class="section-title">Albums</span>

    <span class="view-type">
      <i class="fa fa-list list active"></i>
      <i class="fa fa-th-large card"></i>
    </span>

  </div>

  <album></album>

</div>`;

export default {
  template: tpl,
  components: {
    album
  },
}
