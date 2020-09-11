<template>
    <!-- <nav id="mainNav"> -->
      <div id="menuToggle" v-on:click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
      </div>
      <div class="menuMain">
        <img class="menuBack" id="triangleWhite" :class="{'moveWhite': !isActive}" src="../assets/triangleWhite1.png" alt="triangleWhite1">
        <img class="menuBack" id="triangleBlack" :class="{'moveBlack': !isActive}" src="../assets/triangleBlack1.png" alt="triangleBlack1">
        <img class="logo" src="../assets/lingoo.png" alt="lingoo">
        <ul id="menu">
            <a href="#"><li>首页</li></a>
            <a href="#"><li>案例展示</li></a>
            <a href="#"><li>关于我们</li></a>
            <a href="#"><li>联系我们</li></a>
        </ul>
        <div class="menuInfo">
          <div class="">
            <img src="../assets/addressIcon.png" alt="">
          </div>
        </div>
      </div>
    <!-- </nav> -->

</template>
<script>
export default {
    name: 'Menu',
    data(){
        return{
          isActive: false
        }
    },
    methods:{
      toggleMenu: function (){
        if(this.isActive == false){
          this.isActive = true
        }else{
          this.isActive = false
        }
        console.log(this.isActive)
      }
    },
    mounted(){
      console.log(this.isActive)
    },
}
</script>
<style scoped>
.moveWhite{
  left: 400px !important;
  transition: 1s all cubic-bezier(0.77,0.2,0.05,1.0);
}
.moveBlack{
  left: -300px !important;
  transition: 1s all cubic-bezier(0.77,0.2,0.05,1.0);
}
</style>
