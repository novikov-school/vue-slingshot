const tpl = `<!-- Overview related -->
<div class="overview__related">

  <div class="section-title">Related Artists</div>

  <div class="related-artists">

    <a v-for="artist in artists" href="#" class="related-artist">
                  
      <span class="related-artist__img">
      
        <img :src="artist.thumb" alt="Hoodie Allen"/>
        
      </span>

      <span class="related-artist__name">{{ artist.name }}</span>

    </a>

  </div>

</div>`;

export default {
  template: tpl,
  data() {
    return {
      artists: [
        {
          name: 'Hoodie Allen',
          thumb: '/public/img/hoodie.jpg'
        },
        {
          name: 'Mike Stud',
          thumb: '/public/img/mikestud.jpg'
        },
        {
          name: 'Drake',
          thumb: '/public/img/drake.jpeg'
        },
        {
          name: 'J. Cole',
          thumb: '/public/img/jcole.jpg'
        },
        {
          name: 'Big Sean',
          thumb: '/public/img/bigsean.jpg'
        },
        {
          name: 'Wiz Khalifa',
          thumb: '/public/img/wiz.jpeg'
        },
        {
          name: 'Yonas',
          thumb: '/public/img/yonas.jpg'
        }
      ]
    }
  }
}
