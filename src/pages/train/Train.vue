<template>
    <div class="train-wrapper">
        <div class="header-wrapper">
            <p class="header-text">培训</p>
        </div>
        <search-bar class="search-bar" @searchStart="doSearch"/>
        <div class="tab-bar-wrapper">
            <div class="tab-bar-item" v-for="(item,index) in tabBarList" :key="index">
                <div 
                    class="tab-bar-item-title" 
                    :class="{active:currentIndex==index?true:false}"
                    @click="handleTabClick(index)"
                >
                    {{item}}
                </div>
                <div class="title-active" v-show="currentIndex===index"></div>
            </div>
        </div>
        <div class="train-content-wrapper">
            <router-view class="router-view"></router-view>
        </div>
        <Search 
            v-show="searching" 
            @cancelSearch="cancelSearch" 
            class="search-page" 
            :resultList="resultList"
            @search="searchCourse"
            @clearResult="clearResult"
            @resultClick="resultClick"
        />
    </div>
</template>

<script>
import Header from '../../components/header/Header';
import SearchBar from '../../components/searchBar/SearchBar'
import Search from '../../components/search/Search'
import {mainPageMixin} from '../../common/js/mixin.js'
import {getCourse} from '../../api/train'

export default {
    mixins:[mainPageMixin],
    data(){
       return {
           searching:false,
           currentIndex:0,
           resultList:[],
           tabBarList:['线上培训','职业培训','资质培训','培训资料'],
           nameList:['online-train','profession-train','qualification-train','train-resources']
       }
    },
    components:{
        mHeader:Header,
        SearchBar,
        Search,
    },
    activated(){
        this.currentIndex = 0
    },
    methods:{
        handleTabClick(index){
            if(this.currentIndex==index){
                return 
            }
            this.currentIndex = index
            this.$router.push({name:this.nameList[index]})
        },
        doSearch(){
            this.searching = true;
        },
        searchCourse(value){
            getCourse(value).then(res=>{
                console.log(res.data,'result')
                let val = []
                for (let i in res.data.list){
                    let obj = {}
                    obj.title = res.data.list[i].name
                    obj.detail = res.data.list[i]
                    val.unshift(obj)
                }
                this.resultList = val
            })
        },
        resultClick(val){
            console.log(val)
            this.$router.push({ 
                name:'brief_info',
                params:{
                    id:val.list.detail.id,
                    list:val.list.detail
                } 
            })
        },
        clearResult(){},
        cancelSearch(){
            this.searching = false;
        }
    }    
}
</script>

<style scoped>
.train-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.header-wrapper{
    width:7.5rem;
    height:1.44rem;
    background-color: rgba(214,42,31,1);
    text-align:center;
}
.header-text{
    font-size:.32rem;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:.44rem;
    margin-top:.2rem;
}
.search-bar{
    position:absolute;
    top:.84rem;
}
.tab-bar-wrapper{
    display:flex;
    width:7.5rem;
    margin-top:.76rem; 
    justify-content: space-around;
}
.tab-bar-item{
    margin-left:.45rem;
    width:1.4rem;
    display:flex;
    flex-direction: column; 
}
.tab-bar-item-title{
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(147,147,147,1);
    line-height:.34rem;   
}
.active{
    font-size:.28rem;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height:.4rem;   
}
.title-active{
    z-index:-1;
   width:1.1rem;
   height:.2rem; 
   background-image: linear-gradient(to right,white,red);
   background-image: -webkit-linear-gradient(to right,white,red);
   margin-top:-.12rem;
   margin-left:.04rem;
}
.train-content-wrapper{
    width:6.8rem;
    height:8.92rem;
    overflow: hidden;
    margin-top:.32rem;
}
.search-page{
    position:absolute;
    top:0rem;
}
</style>
