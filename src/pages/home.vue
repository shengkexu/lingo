<template>
    <Menu/>
    <div class="caseCon">
        <div class="test1" ref="box" :class="{'changePosition' : isRotate}">
          <p>{{thumbArray[1].name}}</p>
        </div>
        <div class="button1" :class="{'changeColor': isColor}" v-on:click="changePosition">

        </div>

        <div class="thumbCon">
          
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
      isColor: false,
      thumbArray: [
        {
          id: '1',
          name: 'case1',
          color: 'green',
        },
        {
          id: '2',
          name: 'case2',
          color: 'blue'
        },
        {
          id: '3',
          name: 'case3',
          color: 'yellow'
        },
        {
          id: '4',
          name: 'case4',
          color: 'pink'
        }
      ]
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
  },
  mounted(){
    console.log(this.thumbArray[0].name)
  }
}
</script>

<style scoped>

</style>
