<template>
    <div class="wrapper" @click.stop>
        <div class="header">
            <v-icon name="arrow-left" size="0.44rem" class="header-icon" color="rgba(186,186,186,1)" @click="handleBack"/>
        </div>
        <div class="content">
            <img class="img" :src="require('../../../static/img/property_icon/qrcode.png')"/>
            <p class="text">{{text}}</p>
        </div>
    </div>
</template>

<script>
import { Icon } from 'vant';

export default {
    props:{
        text:{
            type:String,
            default:'请扫码跳转付费'
        }
    },
    components:{
        vIcon:Icon
    },
    methods:{
        handleBack(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
.wrapper{
    z-index:999;
    width:7.5rem;
    height:13.36rem;
    background-color: #F7F8FA;
}
.header{
    height:.48rem;
    display: flex;
    margin:.36rem 0 0 0  
}
.header-icon{
    margin-left:.28rem;
    margin-right:.06rem;
}
.content{
    width:7.5rem;
    height:9rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.img{
    height:3.58rem;
    width:3.32rem;
    margin-bottom:.4rem;
}

.text{
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(186,186,186,1);
    line-height:.34rem;
}

</style>