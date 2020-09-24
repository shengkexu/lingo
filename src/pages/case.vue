<template lang="html">
  <Menu/>
  <div class="caseDetailCon">
    <div class="caseLogoCon">
      <div class="fakeLogo" ref="fakeLogo">

      </div>
      <!-- <div class="logo">
        <img class="mainLogo" src="../assets/menu/logo-f.png" alt="logo">
      </div> -->
      <div class="mainBattle" ref="mainBattle">
        <div class="caseTopLogo">
            <img ref="caseTopLogoImg" src="../assets/menu/logo-f.png" alt="logo">
        </div>
        <div class="caseDLogoCon" ref="caseDLogoCon">
          <img ref="caseDLogo" class="caseDLogo" src="../assets/caseMain/xibei/xibei.png" alt="xibei">
        </div>
        <div class="caseColor" ref="caseColor"></div>
        <div class="caseDescCon">
          <div class="caseDescL">
            <div class="caseDescLTitle">
              <p class="caseDescLTitleNum">01</p>
              <p class="caseDescLTitleB">西贝莜面村</p>
              <p class="caseDescLTitleDesc">2019 - 小程序设计</p>
            </div>
            <div class="caseDescLDesigner">
              <p class="caseDescLDesignerTitle">设计师</p>
              <p class="caseDescLDesignerName">黄晓明</p>
            </div>
          </div>
          <div class="caseDescR">
            <img src="../assets/xibeiO.png" alt="xibeiO">
          </div>
        </div>
      </div>
      <div class="fakeBot1" ref="fakeBot1"></div>
      <div class="fakeBot2" ref="fakeBot2"></div>
    </div>
    <div class="caseContentCon">

    </div>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue'
export default {
  name: 'casePage',
  components: {
    Menu,
  },
  data(){
    return{
      caseId: ''
    }
  },
  mounted(){
    this.caseId = this.$route.params.id
    console.log(this.caseId)
    setTimeout(()=>{
      var ref = this.$refs
      ref.mainBattle.style.height = '100vh'
      ref.fakeLogo.style.height = '0px'
      ref.fakeBot1.style.height = '0px'
      ref.fakeBot2.style.height = '0px'
      ref.fakeBot2.style.marginTop= '0px'
      // ref.caseColor.style.width = '100vw'
      // ref.caseColor.style.height = '100vh'
      ref.mainBattle.style.marginTop = '0px'
      ref.caseDLogoCon.style.width = '100vw'
      ref.caseDLogoCon.style.height = '70vh'
      ref.caseDLogoCon.style.top = '0'
      ref.caseDLogoCon.style.left = '0'
      ref.caseDLogoCon.style.marginLeft = '0'
      ref.caseDLogoCon.style.marginTop = '0'
      // ref.caseDLogoCon.style.margin = 'inherit'
      // ref.caseDLogoCon.style.transform = 'translate(0,0)'
      ref.caseDLogo.style.width = '80px'
    }, 100)
    setTimeout(()=>{
      var ref = this.$refs
      ref.caseColor.style.width = '100vw'
      ref.caseColor.style.height = '100vh'
    }, 500)
    setTimeout(()=>{
      this.$refs.caseTopLogoImg.style.opacity = '1'
    },1000)

  }
}
</script>

<style lang="css">
</style>
