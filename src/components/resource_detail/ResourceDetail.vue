<template>
    <div class="wrapper" @click.stop @touchmove.prevent>
        <div class="content">
            <div class="content-title">培训文档</div>
            <div class="content-item">
                <p class="title">资料名称:</p>
                <p class="value">{{name}}</p>
            </div>
            <div class="content-item">
                <p class="title">添加时间:</p>
                <p class="value">{{time}}</p>
            </div>
            <div class="content-item">
                <p class="title">资料简介:</p>
                <p class="value">{{intro}}</p>
            </div>
            <div class="button-wrapper">
                <div class="button" @click.stop="confirm">下载</div>
                <div class="button-cancel" @click.stop="cancel">取消</div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    props:{
        name:{
            type:String,
            default:'军民融合产业招商实战'
        },
        time:{
            type:String,
            default:''
        },
        intro:{
            type:String,
            default:'军民融合产业招商实战'
        },
        index:{
            type:Number,
        }
    },
    data(){
        return {
        }
    },
    methods:{
        confirm(){
            let form = {}
            this.$emit('download',this.index)
        },
        cancel(){
            this.$emit('cancel')
        }
    }
}
</script>

<style scoped>
.wrapper{
    height:100vh;
    width:100vw;
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
    justify-content: space-around;
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
.button-cancel{
    width:1.8rem;
    height:.8rem;
    background:rgb(177, 171, 161);
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