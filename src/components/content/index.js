import contentLeft from './left';
import contentRight from './right';

const middleTpl = `<div class="content__middle"><router-view></router-view></div>`;

const template = ` 
<section class="content">
  <content-left></content-left>
  <content-middle></content-middle>
  <content-right></content-right>
</section>`;

export default {
  template,
  components: {
    'content-left': contentLeft,
    'content-middle': {
      template: middleTpl
    },
    'content-right': contentRight
  },
  data() {
    return {}
  }
}
