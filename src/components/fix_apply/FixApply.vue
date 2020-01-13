<template>
    <div class="wrapper" @click.stop>
        <div class="header">
            <m-header headerText="物业报修" @back="handleBackClick"/>
        </div>
        <div class="content">
            <p class="content-title">报修内容：</p>
            <input class="content-input" placeholder="简要填写标题" v-model="title"/>
        </div>
        <div class="detail">
            <p class="detail-title">详情：</p>
            <textarea class="detail-input" placeholder="请详细填写修报内容" v-model="detail"/>
        </div>
        <div class="footer">
            <p class="footer-text" @click="submitApply">提交申请</p>
        </div>
    </div>
</template>

<script>
import Header from '../../components/header/Header'

export default {
    data(){
        return {
            title:'',
            detail:''
        }
    },
    components:{
        mHeader:Header,
    },
    methods:{
        handleBackClick(){
            this.$emit('back')
        },
        submitApply(){
            let title = this.title;
            let detail = this.detail
            if(this.title.length && this.detail.length){
                this.$emit('submit',{title,detail})
                this.title='';
                this.detail='';
            }
        }
    }
}
</script>

<style scoped>
.wrapper{
    height:13.36rem;
    width:7.5rem;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.content{
    margin-top:.36rem;
    width:7rem;
    display: flex;
    align-items: center;
    border-bottom: .02rem solid rgba(231, 231, 231, 1);
}
.content-title{
    font-size:.32rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:.44rem;   
    margin-right:.1rem;
    margin-bottom:.2rem;
}
.content-input{
    flex:1;
    border:none;
    font-size:.32rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(182,182,182,1);
    line-height:.44rem;
    margin-bottom:.2rem;
}
.detail{
    margin-top:.36rem;
    width:7rem;
    display: flex;   
    flex-direction: column;
    align-items:flex-start;
}
.detail-title{
    font-size:.32rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:.44rem;   
    margin-right:.1rem;
    margin-bottom:.2rem;
}
.detail-input{
    border:none;
    height:4rem;
    width:7rem;
    font-size:.32rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(182,182,182,1);
    line-height:.44rem;
    margin-bottom:.2rem;
    background: rgba(247, 247, 247, 1);
    border-radius: .1rem;
}
.footer{
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom:0rem;
    width:7.5rem;
    height:1rem;
    background:rgba(255,152,0,1);
}
.footer-text{
    font-size:.32rem;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:.44rem;
}
</style>