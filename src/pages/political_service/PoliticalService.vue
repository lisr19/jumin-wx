<template>
    <div class="wrapper">
        <div>
            <m-header headerText="政策服务" :showRightText="showRightText" @back="goBack" @rightTextClick="rightTextClick"/>
        </div>
        <div class="content-wrapper">
            <search-bar class="search-bar" @searchStart="doSearch"/>
            <div class="scroll-wrapper">
                <scroll :data="dataList" ref="scroll" class="scroll">
                    <ul class="list">
                        <li class="list-item" v-for="(item,index) in dataList" :key="index" @click="selectItem(item,index)">
                            <div class="item-content">
                                <p class="item-title">{{item.name}}</p>
                                <p class="item-date">{{item.addTime.slice(0,10)}}</p>
                            </div>
                            <div class="button-wrapper">
                                <div class="item-button">立即申请</div>
                            </div>
                        </li>
                    </ul>
                </scroll>
            </div>
        </div>
        <search 
            v-show="searching" 
            @cancelSearch="cancelSearch" 
            class="search-page" 
            @search="searchPolicy" 
            @resultClick="resultClick"
            :resultList="resultList"
        />
    </div>
</template>

<script>

import Header from '../../components/header/Header'
import Scroll from '../../base/Scroll'
import {otherPageMixin} from '../../common/js/mixin.js'
import SearchBar from '../../components/searchBar/SearchBar'
import Search from '../../components/search/Search'
import {getPolicyList,getPolicyListByName} from '../../api/policy'
import {Dialog} from 'vant'


export default {
    mixins:[otherPageMixin],
    beforeRouteEnter(to,from,next){
        let name = from.name
        next(vm=>{
            if(name=='industry_park'||name=="company"){
                vm.fromName = name
            }
        })
    },
    data(){
        return {
            showRightText:true,
            searching:false,
            fromName:'company',
            resultList:[],
            dataList:[],
        }
    },
    components:{
        mHeader:Header,
        Scroll,
        SearchBar,
        Search,
    },
    activated(){
        this._getPolicyList()
    },
    methods:{
        goBack(){
            this.$router.push({name:this.fromName})
        },
        rightTextClick(){
            this.$router.push({name:'my_political_apply'})
        },
        doSearch(){
            this.searching = true
        },
        cancelSearch(){
            this.searching =  false
        },
        searchPolicy(name){
            getPolicyListByName(name).then(res=>{
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
            this.$router.push({
                name:'policy_apply',
                params:val
            })
        },
        selectItem(item,index){
            if(!localStorage.token){
                alert('请登录！')
                this.$router.push({name:'my'})
                return 
            }
            this.$router.push(
                {
                    name:'policy_detail',
                    params:{
                        id:item.id,
                        title:item.name,
                        content:item.content,
                        img:item.logoUrl,
                        date:item.addTime,
                    }
                }
            )
        },
        _getPolicyList(){
            getPolicyList().then(res=>{
                if(res.code==200){
                    console.log(res.data,'policy-list')
                    this.dataList = res.data.list
                }else if(res.code==401){
                    Dialog.alert({
                        title:'提示',
                        message:'请登录！'
                    }).then(()=>{
                        this.$router.push({name:'my'})
                    })
                }
            })
        }
    }
}
</script>

<style scoped>
.wrapper{
    height:13.34rem;
    background-color:#FFF;
    display: flex;
    flex-direction: column;
    align-items:center;
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
    height:10.8rem;
    overflow: hidden;
    margin-top:.3rem;
}
.search-page{
    position:absolute;
    top:0rem;
}
.item-content{
    display: flex;
    flex-direction: column;
    width:3.24rem;
    overflow:hidden;
}
.list-item{
    display: inline-flex;
    width:6.6rem;
    height:1.2rem;
    margin-left:.2rem;
    border-bottom: .02rem solid #E4E4E4;
}
.item-title{
    font-size:.36rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:.5rem;
    margin-bottom:.1rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width:3.42rem;
    height:.5rem;
}
.item-date{
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(153,153,153,1);
    line-height:.34rem;    
}
.button-wrapper{
    width:3rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.item-button{
    display: flex;
    justify-content: center;
    align-items:center;
    width:1.56rem;
    height:.56rem;
    background:rgba(255,152,0,1);
    border-radius:.34rem;
    font-size:.24rem;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:.34rem;
}

</style>