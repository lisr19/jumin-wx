<template>
    <div class="header">
        <div class="header-wrapper" :style="{height:headerHeight}">
            <v-icon 
                name="arrow-left" 
                class="left-icon" 
                size="0.5rem" 
                color="white" 
                v-if="showLeftIcon"
                @click="handleBack"
            />
            <img 
                :src="require('../../../static/img/common_icon/消息@2x.png')" 
                class="right-icon" 
                v-if="showRightIcon"
                @click="rightIconClick"
            />
            <p class="right-text" v-if="showRightText" @click="rightTextClick">{{rightText}}</p>
        </div>
        <div class="header-text-wrapper" v-if="headerText" :style="{height:headerHeight}">
            <p class="header-text">{{headerText}}</p>
        </div>
    </div>    
</template>

<script>
import { Icon } from 'vant';

export default {
    props:{
        headerText:{
            type:String,
            default:"请输入标题"
        },
        rightText:{
            type:String,
            default:'我的申请'
        },
        showLeftIcon:{
            type:Boolean,
            default:true
        },
        showRightIcon:{
            type:Boolean,
            default:false
        },
        showRightText:{
            type:Boolean,
            default:false
        },
        headerHeight:{
            type:String,
            default:"1.08rem"
        }
    },
    components:{
        vIcon:Icon,
    },
    methods:{
        handleBack(){
            this.$emit('back')
        },
        rightIconClick(){
            this.$emit('rightIconClick')
        },
        rightTextClick(){
            this.$emit('rightTextClick')
        }
    }
}
</script>

<style scoped>
.header{
    z-index:99;
}
.header-wrapper{
    display:flex;
    align-items: center;
    background-color: rgba(212,42,31,1);
    height:1.08rem;
    text-align: center;
    justify-content: space-between;
}
.header-text-wrapper{
    margin-top:-1.08rem;
    width:7.5rem;
    height:1.08rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header-text{
    z-index: 99;
    font-size:.32rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(255,255,255,1);
}
.left-icon{
    z-index:99;
    margin-left:.22rem;
}

.right-icon{
    z-index:99;
    width:.4rem;
    height:.48rem;
    margin-right:.4rem;
}
.right-text{
    z-index: 99;
    font-size:.26rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:.4rem;
    margin-right:.4rem;
    margin-top:.08rem
}

</style>
