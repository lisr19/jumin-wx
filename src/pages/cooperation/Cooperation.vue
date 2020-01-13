<template>
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
                    @click="handleClick(item,index)"
                />
            </v-cell-group>
        </scroll>
    </div>
</template>

<script>
import Scroll from '../../base/Scroll'
import { Cell, CellGroup } from 'vant';
import {getProductList} from '../../api/requirement'

export default {
    data(){
        return {
            list:[]
        }
    },
    mounted(){
        this._getProductList()
    },
    components:{
        vCell:Cell,
        vCellGroup:CellGroup,
        Scroll,
    },
    methods:{
        handleClick(item,index){
            this.$router.push(
                {
                    name:'requirement_detail',
                    params:{
                        id:index,
                        status:item.status,
                        title:item.title,
                        content:item.content,
                        contact:item.description,
                        img:item.imgUrl,
                        date:item.addTime,
                    }
                }   
            )    
        },
        _getProductList(){
            getProductList().then(res=>{
                console.log(res.data,'product-requirement')
                let val = []
                let list = res.data.list
                for(let i in list){
                    if(list[i].demandType == '1'){
                        val.unshift(list[i])
                    }
                }
                this.list = val
            })
        },
    },
   
    
}
</script>

<style scoped>
.list-wrapper{
    width:6.62rem;
    margin-left:.44rem;
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
</style>