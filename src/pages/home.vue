<template>
    <Menu/>
    <div class="caseCon">
      <div class="logo">

      </div>
      <div class="bigShowCon">
        <div class="test1">
          <div class="caseConUpCon1">
            <p class="caseNumWordConP">NO.<span :class="{'ani' : isRotate}">{{thumbArray[currentContentIndex].id}}</span><span class="caseNumWordBlack"><span class="caseNumWord">|</span>10</span></p>
          </div>
          <div class="caseConUpCon2">
            <img class="caseLogo" :class="{'ani' : isRotate}" src="../assets/caseMain/vanke.png" alt="">
          </div>
          <div class="caseConUpCon3">
            <p class="caseDesc" :class="{'ani' : isRotate}">2018 - mini program design</p>
          </div>
        </div>
        <img class="caseImg" src="../assets/caseMain/wankeMain.png" alt="" :class="{'changePosition' : isRotate}">
        <div class="imgBack" ref="imgBack"></div>
      </div>

        <!-- <p :class="{'ani' : isRotate}">{{thumbArray[currentContentIndex].name}}</p> -->
        <!-- <p :class="ani">{{thumbArray[currentContentIndex].name}}</p> -->
        <!-- <div class="button1" :class="{'changeColor': isColor}" v-on:click="changePosition">

        </div> -->
        <!-- <img src="../assets/design.gif" alt="design" class="gifImg"> -->
        <p class="caseTitle" :class="{'ani' : isRotate}">{{thumbArray[currentContentIndex].name}}</p>
        <p class="thumbTitle">View Detail<i class="iconfont thumbArrow">&#xe656;</i></p>
        <div class="thumbCon">
          <div class="thumbLine"></div>
          <div class="thumbConS">
            <img class="thumbImg" :style="thumbStyle" v-for="(thumb, index) in thumbArray" :src="thumb.url" :alt="thumb.id" :key="index" @click="clickThumb(index)">
          </div>
          <div class="thumbLine"></div>
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
      currentContentIndex: 0,
      screenwidth: document.body.clientWidth,
      thumbArray: [
        {
          id: '1',
          name: '蒙牛',
          color: 'green',
          url: mengniu
        },
        {
          id: '2',
          name: '粢喜',
          color: 'blue',
          url: cixi
        },
        {
          id: '3',
          name: '西贝莜面村',
          color: 'yellow',
          url: xibei
        },
        {
          id: '4',
          name: '万科',
          color: 'pink',
          url: wanke
        },
        {
          id: '5',
          name: 'Silk',
          color: 'pink',
          url: silk
        },
        {
          id: '6',
          name: '质心',
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
      if(index == this.currentIndex){
        this.isRotate = false
        // console.log('all right')
      }else{
        console.log(index)
        this.currentIndex = index
        var currentWidth = this.screenwidth/2 - 50 - index*100 + 'px'
        console.log(currentWidth)
        this.thumbStyle = {
          transition: '0.5s all ease',
          transform: "translate(" + currentWidth + ", 0)"
        }
        setTimeout(()=>{
          this.currentContentIndex = this.currentIndex
          this.$refs.imgBack.style.background = this.thumbArray[this.currentContentIndex].color
        },500)


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
    }
  },
  mounted(){
    this.currentContentIndex = this.currentIndex
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
