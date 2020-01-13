<template>
    <detail-content 
        @back="handleBack"
        :title="title"
        :detailTitle="detailTitle"
        :detailImg="detailImg"
        :date="date"
        :detailText="detailText"
    />
</template>

<script>

import {otherPageMixin} from '../../common/js/mixin.js'
import DetailContent from '../../components/detail_content/DetailContent'


export default {
    mixins:[otherPageMixin],
    data(){
        return {
            title:'详情',
            detailTitle:'',
            date:'',
            detailImg:'',
            detailText:'',
        }
    },
    activated(){
        console.log(this.$route)
        let list = this.$route.params.list
        this.date = list.addTime.slice(0,10)
        this.detailTitle = list.title
        this.detailImg = list.logoUrl
        this.detailText = list.content
    },
    components:{
        DetailContent,
    },
    methods:{
        handleBack(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
.page-header{
    height:.48rem;
    display: flex;
    margin:.36rem 0 0 0  
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
.detail-header-wrapper{
    display: inline-flex;
    flex-direction: column;

    height:1.34rem;
    width:6.86rem;
    margin-bottom:.44rem;
    margin-left:.32rem;
    margin-right:.32rem;
}
.detail-header-content{
    font-size:.36rem;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:600;
    color:rgba(51,51,51,1);
    line-height:.5rem;
    white-space:normal;
    word-wrap: break-all;
    margin-bottom:.08rem;
}
.detail-header-date{
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(154,154,154,1);
    line-height:.34rem;
}
.detail-content{
    display:flex;
    flex-direction: column;
    margin-left:.32rem;
}
.detail-img{
    width:6.86rem;
    height:3.24rem;
    margin-bottom:0.32rem;
}
.detail-text{
    flex:1;
    width:6.86rem;
    white-space:normal;
    word-wrap: break-all;
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(68,68,68,1);
    line-height:.34rem;
}
</style>