<template>
    <div class="list-wrapper">
        <scroll  ref="scroll" class="scroll">
            <v-cell-group >
                <v-cell 
                    v-for="(item,index) in dataList"
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
</template>


<script>

import { Cell, CellGroup } from 'vant';
import Scroll from '../../base/Scroll'



export default {
    props:{
        dataList:{
            type:Array,
            default:()=>{[]}
        }
    },
    data(){
        return {

        }
    },
    components:{
        vCell:Cell,
        vCellGroup:CellGroup,
        Scroll,
    },
    methods:{
        itemClick(index){
            let res = {
                list:this.dataList[index],
                index:index+1
            }
            this.$emit('itemClick',res)
        },
        back(){
            this.$emit('back')
        }
    }
}
</script>

<style scoped>

.list-wrapper{
    width:7.5rem;
    height:10.8rem;
    margin-top:.02rem;
    background-color: rgb(255, 255, 255);
}
.scroll{
    width:7.5rem;
    height:10.8rem;
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
    z-index:9999;
    position: absolute;
    top:0rem; 
}
</style>