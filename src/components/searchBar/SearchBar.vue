<template>
  <div class="search-bar" @click="handleSearch">
    <img :src="require('../../../static/img/common_icon/search@2x.png')" class="search-icon"/>
    <input 
      autofocus
      class="search-bar-placeholder" 
      type="search" 
      v-model="searchText" 
      placeholder="搜索内容" 
      @keydown="search"
    />
  </div>
</template>

<script>
import { Icon } from 'vant';

export default {
  props:{
    placeholder:{
      type:String,
      default:'搜索内容'
    },
    hotSearchText:{
      type:String,
      default:'',
    }
  },
  mounted(){
    console.log('bar')
    this.searchText = ''
  },
  name: 'searchBar',
  data() {
    return {
      searchText:this.hotSearchText,
    }
  },
  watch:{
    hotSearchText:{
      immediate:true,
      handler(newVal,oldVal){
        this.searchText = newVal
      }
    }
  },
  components:{
    vIcon:Icon,
  },
  methods:{
    handleSearch(){
      this.$emit('searchStart')
    },
    search(e){
      let code = e.keyCode
      let text = this.searchText
      this.$emit('loading',text)
      if(code == '13'){
        this.$emit('search',text)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-bar{
  display: flex;
  align-items: center;
  width: 6.8rem;
  height: .86rem;
  background:rgba(255,255,255,1);
  box-shadow:0rem .04rem .08rem 0rem rgba(88,88,88,0.2);
  border-radius:.1rem;
}
.search-icon{
  width:.56rem;
  height:.56rem;
  margin-left:.6rem;
  margin-right:.3rem;
}
.search-bar-placeholder{
  font-size:.24rem;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(147,147,147,1);
  line-height:.34rem;
}
</style>
