<template>
    <div class="wrapper" @click.stop @touchmove.prevent>
        <div class="content">
            <div class="content-title">安全检查详情</div>
            <div class="content-item">
                <p class="title">编号:</p>
                <p class="value">{{code}}</p>
            </div>
            <div class="content-item">
                <p class="title">计划名称:</p>
                <p class="value">{{planName}}</p>
            </div>
            <div class="content-item">
                <p class="title">任务执行人:</p>
                <p class="value">{{executePeople}}</p>
            </div>
            <div class="content-item">
                <p class="title">计划执行频率:</p>
                <p class="value">{{planExecuteFrequent}}</p>
            </div>
            <div class="content-item">
                <p class="title">计划检查时间:</p>
                <p class="value">{{planCheckTime}}</p>
            </div>
            <div class="button-wrapper">
                <div class="button" @click.stop="confirm">确认</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        code:{
            type:String,
            default:''
        },
        planName:{
            type:String,
            default:''
        },
        executePeople:{
            type:String,
            default:'运行状态监控'
        },
        planExecuteFrequent:{
            type:String,
            default:'2019-11-19'
        },
        planCheckTime:{
            type:String,
            default:'安全运行中'
        },
    },
    data(){
        return {
        }
    },
    methods:{
        confirm(){
            this.$emit('confirm')
        }
    }
}
</script>

<style scoped>
.wrapper{
    height:13.36rem;
    width:7.5rem;
    background-color:rgba(0, 0, 0, 0.5);
    display:flex;
    justify-content: center;
    align-items: center;
}
.content{
    width:6.8rem;
    height:10rem;
    background:rgba(255,255,255,1);
    border-radius:.3rem; 
    display: flex;
    flex-direction: column;
    align-items: center;
}
.content-title{
   font-size:.28rem;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height:.4rem; 
    margin-top:.48rem;
    margin-bottom:.4rem;
}
.content-item{
    width:5.72rem;
    display: flex;
    align-items: center;
    margin-bottom:.2rem;
}
.title{
    flex:1;
    font-size:.26rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:.36rem; 
    margin-right:.1rem;
}
.value{
    width:4.4rem;
    height:.64rem;
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:.34rem;
    display: flex;
    align-items: center;
}

.button-wrapper{
    width:6.8rem;
    display: flex;
    justify-content: center;
    margin-top:1rem;
}
.button{
    width:1.8rem;
    height:.8rem;
    background:rgba(255,152,0,1);
    border-radius:.1rem; 
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:.34rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>