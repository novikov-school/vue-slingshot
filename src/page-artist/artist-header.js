const tpl = `<!-- Artist header -->
<div class="artist__header">

  <div class="artist__info">

    <div class="profile__img">

      <img src="/public/img/g_eazy_propic.jpg" alt="G-Eazy"/>

    </div>

    <div class="artist__info__meta">

      <div class="artist__info__type">Artist</div>

      <div class="artist__info__name">G-Eazy</div>

      <div class="artist__info__actions">

        <button class="button-dark">
          <i class="ion-ios-play"></i>
          Play
        </button>

        <button class="button-light">Follow</button>

        <button class="button-light more">
          <i class="ion-ios-more"></i>
        </button>

      </div>

    </div>

  </div>

  <div class="artist__listeners">

    <div class="artist__listeners__count">15,662,810</div>

    <div class="artist__listeners__label">Monthly Listeners</div>

  </div>

  <div class="artist__navigation">

    <ul class="nav nav-tabs" role="tablist">

      <li role="presentation">
        <router-link :to="{ name: 'artist-overview' }" aria-controls="artist-overview" role="tab" data-toggle="tab">Overview</router-link>
      </li>

      <li role="presentation">
        <router-link :to="{ name: 'artist-related' }" aria-controls="related-artists" role="tab" data-toggle="tab">Related Artists</router-link>
      </li>

    </ul>

    <div class="artist__navigation__friends">

      <a href="#">
        <img src="/public/img/chris.jpeg" alt=""/>
      </a>

      <a href="#">
        <img src="/public/img/satya.jpg" alt=""/>
      </a>

    </div>

  </div>

</div>`;

export default {
  template: tpl
}
