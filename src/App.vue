<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <keep-alive>
      <m-footer class="footer" @footerClick="footerClick" v-if="showFooter"></m-footer>
    </keep-alive>
  </div>
</template>

<script>
import Footer from './components/footer/Footer'
import {mapGetters,mapMutations} from 'vuex'

export default {
  name: 'App',
  components:{
    mFooter:Footer
  },
  mounted(){
    let list = localStorage
    this.init(list)
  },
  methods:{
    footerClick(data){
      this.$router.push({name:data})
    },
    ...mapMutations({
      init:'INIT'
    })
  },
  computed:{
    ...mapGetters(['showFooter'])
  }
}
</script>

<style scoped>
.footer{
    position:fixed;
    height:.9rem;
    bottom:0px;
}
</style>
