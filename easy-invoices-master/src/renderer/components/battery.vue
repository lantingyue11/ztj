<template>
    <div><img class="img" :src="imgUrl" :style="{height:height+'px'}"/></div>
</template>
<script type="text/ecmascript-6">
    import one from './../imgs/0.png';
    import two from './../imgs/1.png';
    import three from './../imgs/2.png';
    import four from './../imgs/3.png';
    import five from './../imgs/4.png';
    import six from './../imgs/5.png';
export default {
  props: {
    'img': Number,
    'height': Number
  },
    data () {
      return {
          one : one,
          two : two,
          three : three,
          four : four,
          five : five,
          six : six,
          imgUrl : ''
      }

    },

    methods : {
      locaPicture () {

          switch (this.img) {
              case 0:
                  this.imgUrl = this.one;
                  break;
              case 1:
                  this.imgUrl = this.two;
                  break;
              case 2:
                  this.imgUrl = this.three;
                  break;
              case 3:
                  this.imgUrl = this.four;
                  break;
              case 4:
                  this.imgUrl = this.five;
                  break;
              case 5:
                  this.imgUrl = this.six;
                  break;
          }

      }

    },
    created () {
       this.locaPicture ();
    }

}
</script>
<style scoped>
.img {
    display: inline-block
}
</style>
