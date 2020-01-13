<template>
    <div class="wrapper">
        <div class="page-header">
            <v-icon name="arrow-left" size="0.44rem" class="header-icon" @click="handleBack"/>
            <p class="header-text">投诉建议</p>
        </div>
        <textarea v-model="advice" class="text-field" placeholder="请输入您的宝贵建议"/>
        <div class="button" :class="{active:advice.length>0?true:false}">
            <p class="button-text" @click="submit">提交</p>
        </div>
    </div>
</template>

<script>
import Header from '../../components/header/Header'
import { Icon,Dialog } from 'vant';
import {otherPageMixin} from '../../common/js/mixin.js'
import {submitAdvice} from '../../api/my'

export default {
    mixins:[otherPageMixin],
    data(){
        return {
            advice:'',
        }
    },
    components:{
        mHeader:Header,
        vIcon:Icon,
    },
    methods:{
        handleBack(){
            this.$router.go(-1)
        },
        submit(){
            if(!localStorage.token){
                Dialog.alert({
                    title:'提示',
                    message:'请登录！'
                }).then(()=>{
                    this.advice = ''
                    this.$router.push({name:'my'})
                })
                return
            }
            if(this.advice.length===0){
                alert('建议内容不能为空！')
                return
            }
            let form = {}
            form.content = this.advice
            form.number = Math.floor(Math.random()*1000)
            form.enterpriseId = 16
            submitAdvice(form).then(res=>{
                alert('投诉成功！') 
            })
            this.advice=''
        }
    }
}
</script>

<style scoped>
.wrapper{
    height:100vh;
    width:7.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.page-header{
    width:7.5rem;
    height:.48rem;
    display: flex;
    margin:.36rem 0 .64rem 0  
}
.header-text{
    font-size:.32rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height:.44rem;
}
.header-icon{
    margin-left:.28rem;
    margin-right:.06rem;
}
.text-field{
    width:6.2rem;
    height:4.52rem;
    background:rgba(237,237,237,1);
    border-radius:.2rem;
    font-size:.32rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(182,182,182,1);
    line-height:.44rem;
    border:none;
    margin-bottom:.86rem;
}
.button{
    display: flex;
    justify-content: center;
    align-items: center;
    width:6.2rem;
    height:.82rem;
    background:rgba(175,175,175,1);
    border-radius:.54rem;   
}
.button-text{
    font-size:.32rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:.44rem;    
}
.active{
    width:6.2rem;
    height:.82rem;
    background:rgba(255,152,0,1);
    border-radius:.54rem; 
}
</style>