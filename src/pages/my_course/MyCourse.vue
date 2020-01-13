<template>
    <div class="wrapper">
        <div class="header">
            <m-header headerText="我的课程" @back="goBack"/>
        </div>
        <div class="content">
            <scroll class="scroll">
                <ul class="list">
                    <li class="list-item" v-for="(item,index) in dataList " :key="index" @click="courseClick(index)">
                        <img class="item-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574137961485&di=d98f7adb23290c063eb34bb2ddd48744&imgtype=0&src=http%3A%2F%2Fimg.go007.com%2F2016%2F12%2F30%2Feffaee2573e9df8d_0.jpg"/>
                        <div class="item-text">
                            <p class="item-title">{{item.name}}</p>
                        </div>
                    </li>
                </ul>
            </scroll>
        </div>
    </div>
</template>

<script>
import Header from '../../components/header/Header'
import Scroll from '../../base/Scroll'
import {otherPageMixin} from '../../common/js/mixin.js'
import {getMyCourse} from '../../api/train'
import {Dialog} from 'vant'

export default {
    mixins:[otherPageMixin],
    data(){
        return {
            dataList:[]
        }
    },
    components:{
        mHeader:Header,
        Scroll,
        
    },
    activated(){
        if(!localStorage.token){
            Dialog.alert({
                title:'提示',
                message:'请登录！'
            }).then(()=>{
                this.$router.push({path:'/my'})
            })
        }
    },
    created(){
        if(!localStorage.token){
            return 
        }
        this._getMyCourse(1)
    },
    methods:{
        goBack(){
            this.$router.push({name:'my'})
        },
        courseClick(index){
            this.$router.push({ 
                name:'brief_info',
                params:{
                    id:this.dataList[index].id,
                    list:this.dataList[index]
                } 
            })
        },
        _getMyCourse(id){
            getMyCourse(id).then(res=>{
                console.log(res.data,'my-course')
                this.dataList = res.data.list
            })
        }
    }    
}
</script>

<style scoped>
.wrapper{
    height:13.36rem;
    width:7.5rem;
    background-color: #FFF;
}
.content{
    height:12rem;
    width:7.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.scroll{
    height:12rem;
    width:6.8rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
.list{
    width:6.8rem;
    display: flex;
    flex-direction: column;
}
.list-item{
    width:6.8rem;
    height:2.08rem;
    background:rgba(255,255,255,1);
    box-shadow:0rem .04rem .08rem 0rem rgba(0,0,0,0.09);
    border-radius:.1rem; 
    display: flex;
    margin-top:.44rem;
    margin-bottom:.2rem
}
.item-img{
    width:1.8rem;
    height:1.8rem;
    background:rgba(216,216,216,1);
    border-radius:.04rem;
    margin:.14rem .14rem .14rem .2rem
}
.item-text{
    height:1.8rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top:.16rem
}
.item-title{
    font-size:.28rem;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height:.4rem;   
    margin-bottom:.14rem 
}
.item-time{
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(153,153,153,1);
    line-height:.34rem;
}

</style>