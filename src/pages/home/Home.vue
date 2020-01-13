<template>
    <div class="home">
        <div class="header-wrapper">
            <p class="header-text">军民融合微应用</p>
            <div class="header-search" @click="startSearch">
                <v-icon name="search" size="0.28rem" color="rgba(255,255,255,1)"/>
                <p class="search-text">搜索</p>
            </div>
            <div class="banner">
                <banner :dataList="bannerList.slice(0,bannerImgNum)" width="7.26rem" height="2.8rem" class="home-banner" @swipeClick="handleBannerClick"></banner>
            </div>
        </div>
        <m-slider class="slider" @sliderClick="sliderClick"></m-slider>
        <news-list class="news-list" @newsClick="newsClick" :dataList="dataList.slice(bannerImgNum)" :bannerImgNum="bannerImgNum"></news-list>
        <Search 
            v-show="searching" 
            @cancelSearch="cancelSearch" 
            class="search-page" 
            @search="searchNews"
            @clearResult="clearResult"
            :resultList="resultList"
            @resultClick="resultClick"
        />
    </div>
</template>

<script>
import { Icon } from 'vant';
import Banner from '../../components/banner/Banner'
import Header from '../../components/header/Header'
import HomeSlider from '../../components/homeSlider/HomeSlider'
import NewsList from '../../components/newsList/NewsList'
import Search from '../../components/search/Search'
import {mainPageMixin} from '../../common/js/mixin.js'
import {getNewsList} from '../../api/home'
import {getBusinessList} from '../../api/business_service'
import {getSafeList} from '../../api/safe_service'


export default {
    mixins:[mainPageMixin],
    data(){
        return {
            pageType:1,
            searching:false,
            bannerImgNum:3,
            loop:true,
            resultList:[],
            dataList:[]
        }
    },
    created(){
        this._getNewsList()
        console.log(window.devicePixelRatio)
    },
    components:{
        mHeader:Header,
        vIcon:Icon,
        Banner,
        mSlider:HomeSlider,
        NewsList,
        Search,
    },
    methods:{
        newsClick(index){
            this.$router.push(
                {
                    name:'news',
                    params:{
                        id:index,
                        list:this.dataList[index]
                    }
                }
            )
        },
        resultClick(val){
            this.$router.push(
                    {
                        name:'news',
                        params:{
                            id:val.index,
                            list:val.list
                        }
                    }
                )  
            },
        cancelSearch(){
            this.searching = false
        },
        startSearch(){
            this.searching = true
        },
        clearResult(){
            this.resultList = []
        },
        searchNews(value){
            getNewsList(value).then(res=>{
                console.log(res.data)
                this.resultList = res.data.list
            })
        },
        sliderClick(to){
            this.$router.push({name:to})
        },
        handleBannerClick(index){
             this.$router.push(
                {
                    name:'news',
                    params:{
                        id:index,
                        list:this.dataList[index]
                    }
                }
            )
        },
        _getBannerPics(){
            getBannerPics().then(res=>{
                console.log(res.data,'swiper-img')
            })
        },
        _getNewsList(title){
            getNewsList(title).then(res=>{
                console.log(res.data,'news-list')
                this.dataList = res.data.list
            })
        },

    },
    computed:{
        bannerList(){
            return this.dataList.slice(0,this.bannerImgNum)
        }
    },
}
</script>

<style scoped>
.home{
    display: flex;
    flex-direction: column;
}
.header-wrapper{
    width:7.5rem;
    height: 2.4rem;
    background-color: rgba(212, 42, 31, 1);
    border-radius: 0 0 .4rem .4rem;
    text-align: center;
}
.header-search{
    position:absolute;
    top:.26rem;
    right:.42rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width:1.58rem;
    height:.5rem;
    border-radius:.28rem;
    background-color:rgba(255, 255, 255,0.3);
}
.header-text{
    margin-top:0px;
    padding-top:.3rem;
    font-size:.32rem;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255);
    line-height:.44rem; 
}
.search-text{
    margin-left:.1rem;
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgb(255, 255, 255,1);
    line-height:.34rem;
}
.home-banner{
    position:absolute;
    top:1rem;
    margin-left:.12rem;
    border-radius: .12rem;
    overflow:hidden;
    width:7.26rem;
    height:2.8rem;
}
.search-icon-wrapper{
    width: .28rem;
    height:.28rem;
}
.slider{
    margin-top:1.4rem;
}
.news-list{
    margin-top:.2rem;
}
.search-page{
    position:absolute;
    top:0rem;
}
</style>
