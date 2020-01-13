<template>
    <div>
        <scroll class="list-wrapper">
            <ul class="list">
                <li class="list-item" v-for="(item,index) in dataList" :key="index" @click="itemClick(index)">
                    <div class="title-wrapper">
                        <p class="item-title">{{item.title}}</p>
                    </div>
                    <p class="item-date">{{item.addTime}}</p>
                </li>
            </ul>
        </scroll>
    </div>
</template>

<script>
import Scroll from '../../base/Scroll'
import {getMessageList} from '../../api/message'

export default {
    data(){
        return {
            dataList:[]
        }
    },
    components:{
        Scroll,
    },
    mounted(){
        this._getMessageList()
    },
    methods:{
        itemClick(index){
            this.$router.push(
                {
                    name:'message_detail',
                    params:{
                        id:index,
                        list:this.dataList[index]
                    }
                }
            )  
        },
        _getMessageList(){
            getMessageList().then(res=>{
                console.log(res.data,'message')
                this.dataList = res.data.list
            })
        } 
    },  
}
</script>

<style scoped>
.list-wrapper{
    height:10.46rem;
    width:7.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
}
.list{
    width:7.26rem;
    display: flex;
    flex-direction: column;
}
.list-item{
    width:7.26rem;
    height:2rem;
    background:rgba(255,255,255,1);
    border-radius:.12rem; 
    margin-top:.3rem;
}
.title-wrapper{
    width:6.64rem;
    margin:.3rem;
}
.item-title{
    font-size:.32rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:.44rem;    
}
.item-date{
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(153,153,153,1);
    line-height:.34rem;   
    margin-left:.3rem; 
}
</style>