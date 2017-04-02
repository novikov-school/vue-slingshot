<template>
  <div class="content__right">
    <div class="social">
      <div class="friends">
        <a v-for="friend in friends" href="#" class="friend">
          <i class="ion-android-person"></i>
          {{ friend }}
      </a>
      </div>

      <button class="button-light">Find Friends</button>
    </div>
  </div>
</template>
<script src="./content-right.js"></script>
