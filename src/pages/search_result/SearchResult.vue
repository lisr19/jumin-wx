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
                        is-link
                        title-class="item-title"
                        center
                        @click="itemClick(index)"
                    />
                </v-cell-group>
            </scroll>
        </div>
        <blank class="blank" @back="goBack" v-if="!list.length" />
    </div>
</template>


<script>
import Header from '../../components/header/Header'
import { Cell, CellGroup } from 'vant';
import Scroll from '../../base/Scroll'
import {otherPageMixin} from '../../common/js/mixin.js'
import Blank from '../../base/Blank'


export default {
    mixins:[otherPageMixin],
    data(){
        return {
            headerTxt:"搜索",
            to:'',
            list:[],
            search:{}
        }
    },
    components:{
        mHeader:Header,
        vCell:Cell,
        vCellGroup:CellGroup,
        Scroll,
        Blank
    },
    activated(){
        console.log(this.$route)
        let params = this.$route.params
        if(params.to){
            this.to = params.to
            params.search(params.title).then(res=>{
                this.list = res.data.list
                console.log(res.data)
            })
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        },
        itemClick(index){
            this.$router.push(
                {
                    name:this.to,
                    params:{
                        id:index,
                        list:this.list[index]
                    }
                }
            )
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
.blank{
    position: absolute;
    top:0rem; 
}
</style>