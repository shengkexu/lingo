<template>
    <Menu/>
    <div class="caseCon">
        <div class="test1" :class="{'changePosition' : isRotate}">
          <p>{{thumbArray[currentIndex].name}}</p>
        </div>
        <div class="button1" :class="{'changeColor': isColor}" v-on:click="changePosition">

        </div>

        <div class="thumbCon">
          <div class="thumbConS">
            <img class="thumbImg" :style="thumbStyle" v-for="(thumb, index) in thumbArray" :src="thumb.url" :alt="thumb.id" :key="index" @click="clickThumb(index)">
          </div>
        </div>
    </div>
</template>

<script>
import Menu from '../components/Menu.vue'
import xibei from '../assets/caseThumb/xibeilogo.png'
import mengniu from '../assets/caseThumb/menglogo.png'
import cixi from '../assets/caseThumb/cixilogo.png'
import silk from '../assets/caseThumb/silklogo.png'
import wanke from '../assets/caseThumb/wankelogo.png'
import zhixin from '../assets/caseThumb/zhixinlogo.png'
export default {
    name: 'Home',
    components: {
    Menu,
  },
  data(){
    return{
      isRotate: false,
      isColor: false,
      thumbStyle: {},
      currentIndex: 2,
      screenwidth: document.body.clientWidth,
      thumbArray: [
        {
          id: '1',
          name: 'case1',
          color: 'green',
          url: mengniu
        },
        {
          id: '2',
          name: 'case2',
          color: 'blue',
          url: cixi
        },
        {
          id: '3',
          name: 'case3',
          color: 'yellow',
          url: xibei
        },
        {
          id: '4',
          name: 'case4',
          color: 'pink',
          url: wanke
        },
        {
          id: '5',
          name: 'case5',
          color: 'pink',
          url: silk
        },
        {
          id: '6',
          name: 'case6',
          color: 'pink',
          url: zhixin
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
          this.isRotate = false
          this.isColor = false
        },1000)
      }
    },
    clickThumb: function(index){
      console.log(index)
      this.currentIndex = index
      var currentWidth = this.screenwidth/2 - 50 - index*100 + 'px'
      console.log(currentWidth)
      this.thumbStyle = {
        transition: '0.5s all ease',
        transform: "translate(" + currentWidth + ", 0)"
      }
      
      if(this.isRotate == true){
        console.log('antialiased')
      }else{
        this.isRotate = true
        this.isColor = true
        setTimeout(()=>{
          this.isRotate = false
          this.isColor = false
        },1500)
      }
    }
  },
  mounted(){
    var currentWidth = this.screenwidth/2 - 50 - this.currentIndex*100 + 'px'
    console.log(currentWidth)
    this.thumbStyle = {
      transition: '0.5s all ease',
      transform: "translate(" + currentWidth + ", 0)"
    }

  }
}
</script>

<style scoped>

</style>
