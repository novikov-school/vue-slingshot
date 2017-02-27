import contentLeft from './left';
import contentMiddle from './middle';
import contentRight from './right';

const tpl = `
<section class="content">

  <content-left></content-left>
  
  <content-middle></content-middle>
  
  <content-right></content-right>
  
</section>`;

export default {
  template: tpl,
  components: {
    'content-left': contentLeft,
    'content-middle': contentMiddle,
    'content-right': contentRight
  },
  data() {
    return {}
  }
}
