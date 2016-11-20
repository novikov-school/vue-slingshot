const tpl = `<!-- right -->
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
</div>`;

export default {
  template: tpl,
  data() {
    return {
      friends: [
        'Sam Smith',
        'Tarah Forsyth',
        'Ricahrd Tomkins',
        'Tony Russo',
        'Alyssa Marist',
        'Ron Samson'
      ]
    }
  }
}
