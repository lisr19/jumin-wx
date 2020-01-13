<template>
    <div class="list-wrapper">
        <scroll :data="list" ref="scroll" class="scroll">
            <v-cell-group>
                <v-cell 
                    v-for="(item,index) in list"
                    :key="index"
                    :title="item.name"  
                    :label="item.addTime.slice(0,10)"
                    is-link
                    title-class="item-title"
                    label-class	="item-label"
                    center
                    @click="handleClick(index)"
                />
            </v-cell-group>
        </scroll>
        <resource-detail 
            v-show="showDetailFlag"
            class="item-detail"
            :name="name"
            :time="time"
            :intro="intro"
            :index="index"
            @download="download"
            @cancel="hideDetail"
        />
    </div>
</template>

<script>
import Scroll from '../../base/Scroll'
import { Cell, CellGroup } from 'vant';
import {getKnowledge} from '../../api/train'
import { Dialog } from 'vant'
import ResourceDetail from '../../components/resource_detail/ResourceDetail'

export default {
    data(){
        return {
            list:[],
            showDetailFlag:false,
            name:'',
            intro:'',
            time:'',
            fileUrl:'',
            index:0,
        }
    },
    components:{
        vCell:Cell,
        vCellGroup:CellGroup,
        Scroll,
        ResourceDetail,
    },
    created(){
        this._getKnowledge()
    },
    methods:{
        handleClick(index){
            let item = this.list[index]
            this.index = index
            this.name =  item.name
            this.time = item.addTime
            this.intro = item.introduction
            this.fileUrl = item.fileUrl
            this.showDetailFlag = true
        },
        download(index){
           Dialog.confirm({
               title:'文件下载',
               message:'请确认是否要下载该内容？'
           }).then(()=>{
                alert('开始下载：'+this.list[index].name)
                window.open(this.list[index].fileUrl)
           }).catch(()=>{
               alert('取消下载！')
           })
       },
       hideDetail(){
         this.showDetailFlag = false  
       },
        _getKnowledge(){
            getKnowledge().then(res=>{
                console.log(res.data,'resource')
                this.list = res.data.list
            })
        },
    }
}
</script>

<style scoped>
.list-wrapper{
    width:6.62rem;
}
.scroll{
    height:10.86rem;
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
.item-detail{
    z-index:999;
    position: absolute;
    top:0;
    left:0;
}
</style>