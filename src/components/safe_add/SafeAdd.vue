<template>
    <div class="wrapper" @click.stop @touchmove.prevent>
        <div class="content">
            <div class="content-title">新增安全检查</div>
            <div class="content-item" v-for="(item,index) in dataList " :key="index">
                <p class="title">{{item.title}}:</p>
                <input :placeholder="item.placeholder" class="item-input" v-model="value[index]"/>
            </div>
            <div class="button-wrapper">
                <div class="button-left" @click.stop="confirm">确认</div>
                <div class="button-right" @click.stop="cancel">取消</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            value:['','','','','',''],
            dataList:[
                {
                    title:'编号',
                    placeholder:'输入编号',
                },{
                    title:'计划名称',
                    placeholder:'输入计划名称',
                },{
                    title:'任务执行人',
                    placeholder:'输入任务执行人',
                },{
                    title:'计划执行频率',
                    placeholder:'输入计划执行频率',
                },{
                    title:'计划检查时间',
                    placeholder:'输入计划检查时间',
                }
            ]
        }
    },
    methods:{
        confirm(){
            let form = {}
            form.number = this.value[0]
            form.planName = this.value[1]
            form.executePeople = this.value[2]
            form.planExecuteFrequent = this.value[3]
            form.planCheckTime = this.value[4]
            form.enterpriseId = 16
            this.$emit('confirm',form)
            this.$emit('confirm',this.value)
            this.value = Array(5)
        },
        cancel(){
            this.$emit('cancel')
            this.value = Array(6)
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
.item-input{
    width:4.4rem;
    height:.64rem;
    background:rgba(247,247,248,1);
    border-radius:.1rem;
    border:none;
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(202,202,202,1);
    line-height:.34rem;
}
.item-input::placeholder{
    color:rgba(202, 202, 202, 1);
} 
.button-wrapper{
    width:6.8rem;
    display: flex;
    justify-content: space-around;
    margin-top:1rem;
}
.button-left{
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
.button-right{
    width:1.8rem;
    height:.8rem;
    background:rgba(160,160,160,1);
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