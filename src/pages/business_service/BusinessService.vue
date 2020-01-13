<template>
    <div class="example-wrapper">
        <m-header :headerText="headerTxt" @back="goBack"/>
        <div class="list-wrapper">
            <scroll :data="list" ref="scroll" class="scroll">
                <v-cell-group>
                    <v-cell 
                        v-for="(item,index) in list"
                        :key="index"
                        :title="item.title"  
                        :label="item.content"
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
import { Cell, CellGroup } from 'vant';
import Scroll from '../../base/Scroll'
import {otherPageMixin} from '../../common/js/mixin.js'
import {getExList} from '../../api/example'
import {getBusinessList,addBusiness,delBusiness} from '../../api/business_service'

export default {
    mixins:[otherPageMixin],
    data(){
        return {
            headerTxt:"商务服务",
            list:[]
        }
    },
    components:{
        mHeader:Header,
        vCell:Cell,
        vCellGroup:CellGroup,
        Scroll
    },
    created(){
        this._getBusinessList()
    },
    methods:{
        goBack(){
            this.$router.push({name:'park_supporting'})
        },
        itemClick(index){
            this.$router.push(
                {
                    name:'business_service_detail',
                    params:{
                        id:index,
                        list:this.list[index]
                    }
                }
            )
        },
        _getBusinessList(){
            getBusinessList().then(res=>{
                console.log(res.data,'business')
                this.list=res.data.list
            })
        }

    }
}
</script>

<style scoped>
.example-wrapper{
    height:13.34rem;
    background-color: #FFF;
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
    height:.34rem;
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(153,153,153,1);
    line-height:.34rem;
    overflow: hidden
}
</style>