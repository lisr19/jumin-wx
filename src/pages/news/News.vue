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
            detailTitle:'广东省军民融合“科技创新，强军兴业，融合发展，协作共赢”',
            date:'2019年10月31日',
            detailImg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573549782603&di=b97f0544592395a4a13818e82ec842e0&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161029%2Fcf0efe4ec2d943ecb6ae0e31823c2a6d_th.jpg',
            detailText:`2019年10月31日，中国共产党第十九届中央委员会第四次全体会议表决通过《中共中央关于坚持和完善中国特色社会主义制度、推进国家治理体系和治理能力现代化若干重大问题的决定》
                        
                        这是坚持和完善中国特色社会主义制度、推进国家治理体系和治理能力现代化作出的行动纲领和政治宣示。

                        全会《决定》为中国特色社会主义道路自信、理论自信、制度自信、文化自信写下了历史篇章，为占世界五分之一人口的东方大国开辟国家治理新境界指明了方向，也为人类社会制度文明贡献了中国智慧。`
        }
    },
    activated(){
        console.log(this.$route.params)
        let list = this.$route.params.list
        this.detailTitle = list.title
        this.detailImg = list.coverImg
        this.date = list.addTime.slice(0,10)
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
