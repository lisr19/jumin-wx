<template>
    <div class="search-wrapper">
        <div class="page-header">
            <v-icon name="arrow-left" size="0.44rem" class="header-icon" @click="handleBackClick" @clearResult="clearResult"/>
            <p class="header-text">搜索</p>
        </div>
        <search-bar class="search-bar" @search="search" @clearResult="clearResult" :hotSearchText="hotSearchText"/>
        <div class="all-search">
            <div class="all-search-title">热门搜索</div>
            <div class="all-search-body">
                <div v-for="(item,index) in hotSearch" :key="index" class="all-search-item" @click='hotSearchClick(index)'>
                    <p class="item-text">{{item}}</p>
                </div>
            </div>
        </div>
        <search-result 
            class="result" 
            :dataList='resultList' 
            v-show="searching"
            @itemClick="itemClick"
        />
    </div>
</template>

<script>
import SearchBar from '../searchBar/SearchBar'
import { Icon } from 'vant';
import SearchResult from '../search_result/SearchResult'

export default {
    props:{
        resultList:{
            type:Array,
            default:()=>{[]},
        }
    },
    data(){
        return {
            searching:false,
            searchText:'',
            hotSearchText:'',
            hotSearch:['新闻','政策','荣誉','课程']
        }
    },
    activated(){
        this.searching = false
    },
    components:{
       SearchBar,
       vIcon:Icon, 
       SearchResult,
    },
    methods:{
        handleBackClick(){
            this.$emit('cancelSearch')
        },
        search(value){
            this.$emit('search',value)
            this.searching = true
        },
        hotSearchClick(index){
            this.hotSearchText = this.hotSearch[index]
        },
        clearResult(){
            this.searching = false
            this.$emit('clearResult')
        },
        itemClick(val){
            this.$emit('resultClick',val)
            console.log(1)
        }
    }
}
</script>

<style scoped>
.search-wrapper{
    z-index:99;
    background-color: #FFF;
    width:7.5rem;
    height:13.34rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.page-header{
    height:.48rem;
    width:7.5rem;
    display: flex;
    margin:.36rem 0 0 0  
}
.header-text{
    font-size:.32rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height:.44rem;
}
.header-icon{
    margin-left:.28rem;
    margin-right:.06rem;
}
.search-bar{
    margin-top:.4rem;
}
.all-search{
    display: flex;
    width:6.64rem;
    flex-direction: column;
    align-items: flex-start;
    margin-top:.4rem;
}
.all-search-title{
    font-size:.36rem;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height:.5rem;  
    margin-bottom: .4rem;
}
.all-search-body{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.all-search-item{
    display:flex;
    justify-content: center;
    align-items: center;
    width:1.68rem;
    height:.8rem;
    background:rgba(236,236,238,1);
    border-radius:.1rem;   
    margin-bottom:.4rem;
}
.item-text{
    font-size:.26rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:.36rem;
}
.result{
    z-index:999;
    position: absolute;
    top:2.5rem;


}




</style>
