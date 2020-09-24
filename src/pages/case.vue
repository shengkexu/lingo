<template lang="html">
  <Menu/>
  <div class="caseDetailCon">
    <div class="caseLogoCon">
      <div class="logo">
        <img class="mainLogo" src="../assets/menu/logo-f.png" alt="logo">
      </div>
      <div class="caseBgCon">
        <div class="caseLogoBg">
          <img class="caseLogo" src="../assets/caseMain/xibei/xibei.png" alt="">
        </div>
        <div class="logobg"></div>
      </div>
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
  }
}
</script>

<style lang="css">
</style>
