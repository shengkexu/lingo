<template>
    <Menu/>
    <div class="caseCon">
        <div class="test1" ref="box" :class="{'changePosition' : isRotate}">

        </div>
        <div class="button1" :class="{'changeColor': isColor}" v-on:click="changePosition">

        </div>
    </div>
</template>

<script>
import Menu from '../components/Menu.vue'
export default {
    name: 'Home',
    components: {
    Menu,
  },
  data(){
    return{
      isRotate: false,
      isColor: false
    }
  },
  methods:{
    changePosition: function(){
      if(this.isRotate == true){
        console.log('antialiased')
      }else{
        this.isRotate = true
        this.isColor = true
        setTimeout(()=>{
          // this.$refs.box.style.transition = 'none'
          this.isRotate = false
          this.isColor = false
        },1500)
      }
    }
  }
}
</script>

<style scoped>

</style>
