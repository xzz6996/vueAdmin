<template>
  <div id="wrapper">
    <div>
      {{name}}
    </div>
    <Nav-top></Nav-top>
    <Nav-side></Nav-side>
  </div>
</template>

<script>
import NavTop from '../nav-top'
import NavSide from '../nav-side'
export default {
  components:{
    NavTop,NavSide
  },
  data () {
    return {
      name:this.$store.state.username
    }
  },
  mounted(){
   
  }
}
</script>

<style lang="scss" scoped>

</style>