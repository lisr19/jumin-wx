<template>
    <div class="wrapper">
        <m-header headerText="招商引资" @back="goBack"/>
        <div class="content-wrapper">
            <search-bar class="search-bar" @searchStart="doSearch"/>
            <div class="scroll-wrapper">
                <scroll :data="dataList" ref="scroll" class="scroll">
                    <v-cell-group>
                        <v-cell 
                            v-for="(item,index) in dataList"
                            :key="index"
                            :title="item.title"  
                            :label="`${item.addTime.slice(0,10)} 发布`"
                            is-link
                            title-class="item-title"
                            label-class	="item-label"
                            center
                            @click="itemClick(index)"
                        />
                    </v-cell-group>
                </scroll>
            </div>
        </div>
        <search :resultList="resultList" v-show="searching" @cancelSearch="cancelSearch" class="search-page" @search="searchPolicy" @resultClick="resultClick"/>
    </div>
</template>

<script>
import Header from '../../components/header/Header'
import Scroll from '../../base/Scroll'
import { Cell, CellGroup } from 'vant'
import {otherPageMixin} from '../../common/js/mixin.js'
import SearchBar from '../../components/searchBar/SearchBar'
import Search from '../../components/search/Search'
import {getPolicyList,getPolicyByName} from '../../api/investment'


export default {
    mixins:[otherPageMixin],
    data(){
        return {
            searching:false,
            resultList:[],
            dataList:[],
        }
    },
    created(){
        this._getPolicyList()
    },
    components:{
        mHeader:Header,
        Scroll,
        vCell:Cell,
        vCellGroup:CellGroup,
        Search,
        SearchBar,
    },
    methods:{
        goBack(){
            this.$router.push({name:'home'})
        },
        doSearch(){
            this.searching = true
        },
        cancelSearch(){
            this.searching = false
        },
        searchPolicy(value){
            getPolicyByName(value).then(res=>{
                this.resultList = res.data.list
            })
        },
        itemClick(index){
            this.$router.push(
                {
                    name:'investment_detail',
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
                    name:'investment_detail',
                    params:{
                        id:val.index,
                        list:val.list
                    }
                }
            )
        },
        _getPolicyList(){
            getPolicyList().then(res=>{
                console.log(res.data.list)
                this.dataList = res.data.list
            })
        },
    }
}
</script>

<style scoped>
.wrapper{
    height:100vh;
    background-color:#FFF;
    display: flex;
    flex-direction: column;
}
.content-wrapper{
    margin-top:.24rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.scroll-wrapper{
    display:flex;
    flex-direction: column;
    align-items: center;
}
.scroll{
    width:7rem;
    height:90vh;
    overflow: hidden;
    margin-top:.3rem;
}
.item-title{
    font-size:.36rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:.5rem;    
}
.item-label{
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(153,153,153,1);
    line-height:.34rem;
}
.search-page{
    position:absolute;
    top:0rem;
}
</style>