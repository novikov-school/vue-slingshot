<template>
  <div class="content__left">
    <navigation></navigation>
    <section class="playlist">

      <a href="#">
        <i class="ion-ios-plus-outline"></i>
        New Playlist
      </a>
    </section>

    <playing :track="track"></playing>
  </div>
</template>
<script src="./content-left.js"></script>
