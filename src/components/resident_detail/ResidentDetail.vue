<template>
    <div class="wrapper" @click.stop @touchmove.prevent>
        <div class="content">
            <div class="content-title">驻场服务</div>
            <div class="content-item">
                <p class="title">人员编号:</p>
                <p class="value">{{code}}</p>
            </div>
            <div class="content-item">
                <p class="title">人员姓名:</p>
                <p class="value">{{name}}</p>
            </div>
            <div class="content-item">
                <p class="title">联系电话:</p>
                <p class="value">{{phoneNumber}}</p>
            </div>
            <div class="content-item">
                <p class="title">值班时段:</p>
                <p class="value">{{workDuration}}</p>
            </div>
            <div class="content-item">
                <p class="title">上班考勤:</p>
                <p class="value">{{startWork}}</p>
            </div>
            <div class="content-item">
                <p class="title">下班考勤:</p>
                <p class="value">{{offWork}}</p>
            </div>
            <div class="content-item">
                <p class="title">工作时长:</p>
                <p class="value">{{totalDuration}}小时</p>
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
        name:{
            type:String,
            default:'路人甲'
        },
        phoneNumber:{
            type:String,
            default:''
        },
        workDuration:{
            type:String,
            default:'18:00-00:00'
        },
        startWork:{
            type:String,
            default:'18:00'
        },
        offWork:{
            type:String,
            default:'00:00'
        },
        totalDuration:{
            default:''
        }
    },
    data(){
        return {
        }
    },
    methods:{
        confirm(){
            let form = {}
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