<template>
    <!-- <nav id="mainNav"> -->
      <div id="menuToggle" v-on:click="toggleMenu">
          <span :class="{'ham1': isActive}"></span>
          <span :class="{'ham2': isActive}"></span>
          <span :class="{'ham3': isActive}"></span>
      </div>
      <div class="menuCon">
        <div class="blueCircle" ref="circle1" :class="{'blueCircleScale': isActive}"></div>
        <div class="yellowCircle" ref="circle2" :class="{'yellowCircleScale': isActive}"></div>
        <div class="redCircle" ref="circle3" :class="{'redCircleScale': isActive}"></div>
        <ul class="menu" ref="menuWordCon">
            <a href="#"><li class="menuWord menuWord1" :class="{'menuWordChange1': isActive}">首页</li></a>
            <a href="#"><li class="menuWord menuWord2" :class="{'menuWordChange2': isActive}">案例展示</li></a>
            <a href="#"><li class="menuWord menuWord3" :class="{'menuWordChange3': isActive}">关于我们</li></a>
            <a href="#"><li class="menuWord menuWord4" :class="{'menuWordChange4': isActive}">联系我们</li></a>
        </ul>

      </div>

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
          this.$refs.circle1.style.transition = '0.8s all cubic-bezier(.85,0,.21,1)'
          this.$refs.circle2.style.transition = '1s all cubic-bezier(.85,0,.21,1)'
          this.$refs.circle3.style.transition = '1.2s all cubic-bezier(.85,0,.21,1)'
          this.$refs.menuWordCon.style.top = '0'
          // this.$refs.menuWord.style.display = 'block'
          // this.$refs.menuWord.style.opacity = '1'
          this.isActive = true

        }else{
          this.$refs.circle1.style.transition = '1.2s all cubic-bezier(.85,0,.21,1)'
          this.$refs.circle2.style.transition = '1s all cubic-bezier(.85,0,.21,1)'
          this.$refs.circle3.style.transition = '0.8s all cubic-bezier(.85,0,.21,1)'
          this.$refs.menuWordCon.style.top = '-100vh'
          // this.$refs.menuWord.style.display = 'none'
          // this.$refs.menuWord.style.opacity = '0'
          this.isActive = false
        }
        console.log(this.isActive)
      }
    },
    mounted(){
      this.isActive = false
      console.log(this.$refs)
    },
}
</script>
<style>
/* .moveWhite{
  left: 400px !important;
  transition: 1s all cubic-bezier(0.77,0.2,0.05,1.0);
}
.moveBlack{
  left: -300px !important;
  transition: 1s all cubic-bezier(0.77,0.2,0.05,1.0);
} */


</style>
