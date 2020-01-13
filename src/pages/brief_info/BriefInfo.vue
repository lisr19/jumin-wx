<template>
    <div>
        <scroll :data="list" ref="scroll" class="scroll" >
            <v-cell-group :border="border">
                <v-cell 
                    class="list-item"
                    v-for="(item,index) in list"
                    :key="index"
                    :title="item.title"  
                    :label="item.label"
                    title-class="item-title"
                    label-class	="item-label"
                    center
                />
            </v-cell-group>
        </scroll>
    </div>
</template>

<script>
import { Cell, CellGroup } from 'vant';
import Scroll from '../../base/Scroll'

export default {
    data(){
        return {
            list:[
                {
                    title:"",
                    label:""
                },
                {
                    title:"",
                    label:""
                }
            ],
            border:false,
        }
    },
    activated(){
        console.log(this.$route)
        let list = this.$route.params.list
        if(list){
            this.list[0].title = list.name
            this.list[0].label = list.shortDesc
            this.list[1].title = '课程介绍'
            this.list[1].label = list.description
        }
    },
    components:{
        vCell:Cell,
        vCellGroup:CellGroup,
        Scroll,
    }
}
</script>

<style scoped>
.scroll{
    height:6.2rem;
    overflow: hidden;
}
.item-title{
    width:7rem;
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
    margin-bottom:.4rem;
}

</style>