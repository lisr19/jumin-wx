<template>
    <scroll ref="scroll" :data="dataList" class="content-wrapper">
        <ul class="content-list">
            <li class="content-item" v-for="(item,index) in dataList" :key="index" @click="courseClick(index)">
                <img class="item-img" :src="item.imgUrl"/>
                <div class="item-body-wrapper">
                    <div class="item-body">
                        <p class="item-title">{{item.name}}</p>
                    </div>
                    <div class="item-button-wrapper">
                        <div class="item-button">立即报名</div>
                    </div>
                </div>
            </li>
        </ul>
    </scroll>
</template>

<script>
import Scroll from '../../base/Scroll'
import {getQualiList} from '../../api/train'

export default {
    data(){
        return {
            dataList:[]
        }
    },
    created(){
        this._getQualiList()
    },
    methods:{
        courseClick(index){
            this.$router.push({ 
                name:'brief_info',
                params:{
                    id:this.dataList[index].id,
                    list:this.dataList[index]
                } 
            })
        },
        _getQualiList(){
            getQualiList().then(res=>{
                console.log(res.data,'qualification-course')
                this.dataList = res.data.list
            })
        }
    },
    components:{
        Scroll,
    }    
}
</script>

<style scoped>
.content-wrapper{
    width:6.8rem;
    height:8.92rem;
}
.content-list{
    width:6.8rem;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow:hidden;
}

.content-item{
    width:6.8rem;
    height:2.08rem;
    background:rgba(255,255,255,1);
    border-radius:.1rem;
    display: flex;
    margin-bottom:.2rem;
}
.item-img{
    width:1.8rem;
    margin: .14rem .14rem .14rem .2rem;
}
.item-body-wrapper{
    display:flex;
    flex-direction: column;
}
.item-body{
    width:4.24rem;
    height:1rem;
    display:flex;
    flex-direction: column;
    align-items:flex-start;
    margin-top:.16rem;
}
.item-title{
    font-size:.28rem;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height:.4rem;    
    margin-bottom:.14rem;
}
.item-number{
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(153,153,153,1);
    line-height:.34rem;    
}
.item-button-wrapper{
    width:4.8rem;
    display: flex;
    justify-content: flex-end;
    margin-top:.08rem;
}
.item-button{
    width:1.8rem;
    height:.66rem;
    background:rgba(255,152,0,1);
    border-radius:.34rem;
    font-size:.24rem;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:.34rem;
    display:flex;
    align-items: center;
    justify-content: center;
    margin-right:.44rem;
}

</style>
