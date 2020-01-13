<template>
    <div class="example-wrapper">
        <div class="header">
            <m-header :headerText="headerTxt" @back="goBack"/>
        </div>
        <div class="list-wrapper">
            <scroll :data="list" ref="scroll" class="scroll">
                <v-cell-group>
                    <v-cell 
                        v-for="(item,index) in list"
                        :key="index"
                        :title="item.title"  
                        :label="item.date"
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
</template>


<script>
import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner' 
import { Cell, CellGroup } from 'vant';
import Scroll from '../../base/Scroll'
import {otherPageMixin} from '../../common/js/mixin.js'
import {getExList,delEx} from '../../api/example'

export default {
    mixins:[otherPageMixin],
    data(){
        return {
            headerTxt:"成果案例",
            list:[
                {
                    title:"广州XX信息科技有限公司",
                    date:"2019年11月3日发布"
                },
                {
                    title:"广州XX信息科技有限公司",
                    date:"2019年11月3日发布"
                },
                {
                    title:"广州XX信息科技有限公司",
                    date:"2019年11月3日发布"
                },
                {
                    title:"广州XX信息科技有限公司",
                    date:"2019年11月3日发布"
                },
                {
                    title:"广州XX信息科技有限公司",
                    date:"2019年11月3日发布"
                },
                                {
                    title:"广州XX信息科技有限公司",
                    date:"2019年11月3日发布"
                },
                                {
                    title:"广州XX信息科技有限公司",
                    date:"2019年11月3日发布"
                },
                                {
                    title:"广州XX信息科技有限公司",
                    date:"2019年11月3日发布"
                },
                                {
                    title:"广州XX信息科技有限公司",
                    date:"2019年11月3日发布"
                },
                
                                {
                    title:"广州XX信息科技有限公司",
                    date:"2019年11月3日发布"
                },
                                {
                    title:"广州XX信息科技有限公司",
                    date:"2019年11月3日发布"
                },
                                {
                    title:"广州XX信息科技有限公司",
                    date:"2019年11月3日发布"
                },                {
                    title:"广州XX信息科技有限公司",
                    date:"2019年11月3日发布"
                },
                                {
                    title:"广州XX信息科技有限公司",
                    date:"2019年11月3日发布"
                },

            ]
        }
    },
    components:{
        mHeader:Header,
        vCell:Cell,
        vCellGroup:CellGroup,
        Scroll,
        Banner,
    },
    created(){
        this._getExList()
        delEx()
    },
    methods:{
        goBack(){
            this.$router.push({name:'company'})
        },
        itemClick(index){
            this.$router.push(
                {
                    name:'example_detail',
                    params:{
                        id:index,
                        list:this.list[index]
                    }
                }
            )
        },
        _getExList(){
            getExList().then(res=>{
                console.log(res.data,'ex-list')
                this.list = res.data.list
            })
        }
    }
}
</script>

<style scoped>
.example-wrapper{
    height:13.34rem;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
}
.list-wrapper{
    width:6.62rem;
    height:12.26rem;
    margin-left:.44rem;
    margin-top:.02rem;
}
.scroll{
    height:11.9rem;
    overflow: hidden;
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
</style>