<template>
    <div class="company">
        <div class="header-wrapper">
            <p class="header-text">企业管理</p>
        </div>
        <div class="company-boday">
            <div class="company-content-wrapper" v-for="(item,index) in dataList" :key="index">
                <div class="content-header-wrapper">
                    <div class="company-header-text">{{item.title}}</div>
                    <div class="company-header-extra" v-if="item.content.fifth?true:false" @click="showMore">
                        <p class="header-extra-text">全部</p>
                        <v-icon name="arrow" class="header-extra-icon" size=".3rem"/>
                    </div>
                </div>
                <div class="content-body-wrapper">
                    <div class="body-content" v-for="(value,key) in item.content" :key="key" @click="itemClick(value.to)">
                        <img class="body-img" :src="value.imgUrl"/>
                        <p class="body-text">{{value.text}}</p>    
                    </div>
                </div>
            </div>
        </div>
        <blank class="blank" @back="hideBlank" v-if="showBlankFlag"/>
    </div>
</template>

<script>
import { Icon } from 'vant';
import {mainPageMixin} from '../../common/js/mixin.js'
import Blank from '../../base/Blank'
import {getShareList} from '../../api/share'

export default {
    mixins:[mainPageMixin],
    data(){
        return {
            showBlankFlag:false,
            dataList:[
                {
                    title:"军民保障服务中心",
                    content:{
                        first:{
                            imgUrl:require("../../../static/img/company_icon/consult.png"),
                            text:"咨询服务",
                            to:'customer_service'
                        },
                        second:{
                            imgUrl:require("../../../static/img/company_icon/maintain.png"),
                            text:"运维服务",
                            to:'maintain'
                        },
                        third:{
                            imgUrl:require("../../../static/img/company_icon/settle_in.png"),
                            text:"驻场服务",
                            to:'resident'
                        },
                        fourth:{
                            imgUrl:require("../../../static/img/company_icon/safety.png"),
                            text:"安全检查",
                            to:'safe'
                        }
                    }
                },
                {
                    title:"成果转化中心",
                    content:{
                        first:{
                            imgUrl:require("../../../static/img/company_icon/political_service.png"),
                            text:"优秀企业",
                            to:'outstanding_firm'
                        },
                        second:{
                            imgUrl:require("../../../static/img/company_icon/book.png"),
                            text:"军民融合需求",
                            to:'requirement'
                        },
                        third:{
                            imgUrl:require("../../../static/img/company_icon/success.png"),
                            text:"成果案例",
                            to:'example'
                        },
                        fourth:{
                            imgUrl:require("../../../static/img/company_icon/share.png"),
                            text:"军民共享资源",
                            to:'share',
                        },
                        fifth:{
                            imgUrl:require("../../../static/img/company_icon/product.png"),
                            text:"产品展示"
                        }
                    }
                },
                {
                    title:"物业服务中心",
                    content:{
                        first:{
                            imgUrl:require("../../../static/img/company_icon/pay.png"),
                            text:"物业缴费",
                            to:'arrearage'
                        },
                        second:{
                            imgUrl:require("../../../static/img/company_icon/fix.png"),
                            text:"物业报修",
                            to:'fix'
                        }
                    }
                },
                {
                    title:"政策服务",
                    content:{
                        first:{
                            imgUrl:require("../../../static/img/company_icon/political.png"),
                            text:"政策服务",
                            to:"political_service"
                        }
                    }
                }
            ]
        }
    },
    components:{
        vIcon:Icon,
        Blank,
    },
    mounted(){
        getShareList().then(res=>{
            console.log(res.data)
        })
    },
    methods:{
        itemClick(to){
            if(to=='consult'){
                this.showBlank()
                return 
            }
            this.$router.push({name:to})
        },
        showBlank(){
            this.showBlankFlag = true
        },
        hideBlank(){
            this.showBlankFlag = false
        },
        showMore(){
            this.$router.push({name:'example_center'})
        }
    }
}
</script>

<style scoped>
.header-wrapper{
    width:7.5rem;
    height: 2.4rem;
    background-color: rgba(212, 42, 31, 1);
    border-radius: 0 0 .4rem .4rem;
    text-align: center;
}
.header-text{
    margin-top:0px;
    padding-top:.3rem;
    font-size:.32rem;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255);
    line-height:.44rem; 
}
.company-boday{
    position: absolute;
    top:1.2rem;
}
.company-content-wrapper{
    width:7.26rem;
    height:2.54rem;
    border-radius: .12rem;
    background-color:#fff;
    overflow: hidden;
    margin: 0 .12rem .2rem .12rem;
    display: flex;
    flex-direction: column;

}
.content-header-wrapper{
    width:6.62rem;
    height:.5rem;
    display: inline-flex;
    justify-content: space-between;
    align-items: flex-end;
    margin:.32rem .32rem 0 .32rem;
}
.company-header-text{
    font-size:.36rem;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height:.5rem;   
}
.company-header-extra{
    height:.34rem;
    display: flex;
    align-items: center;
}
.header-extra-text{
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:.34rem;
    margin-right:.1rem;
}
.content-body-wrapper{
    height:1.72rem;
    width:7.26rem;
    display:flex;
    flex-wrap: nowrap;
}
.body-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:1.815rem;
    flex-shrink: 0;
}
.body-text{
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(50,50,51,1);
    line-height:.34rem;   
}
.body-img{
    width:.48rem;
    height:.48rem;
    margin-bottom:.08rem;
}
.blank{
    position: absolute;
    top:0rem; 
}
</style>
