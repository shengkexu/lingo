<template>
    <nav id="mainNav">
      <div id="menuToggle" v-on:click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
      </div>
      <div class="menuMain">
        <img id="triangleWhite" src="../assets/triangleWhite1.png" alt="triangleWhite1">
        <img id="triangleBlack" src="../assets/triangleBlack1.png" alt="triangleBlack1">
        <ul id="menu">
            <a href="#"><li>Home</li></a>
            <a href="#"><li>About</li></a>
            <a href="#"><li>Info</li></a>
            <a href="#"><li>Contact</li></a>
            <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
        </ul>
      </div>
    </nav>

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

</style>
