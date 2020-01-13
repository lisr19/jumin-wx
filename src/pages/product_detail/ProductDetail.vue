<template>
    <div class="wrapper">
        <div>
            <m-header headerText="产品详情" @back="goBack"/>
        </div>
        <div class="content">
            <scroll class="scroll">
                <div class="detail">
                    <img class="detail-img" :src="detailImg"/>
                    <p class="detail-text" v-html="detailText"></p>
                </div>
            </scroll>
        </div>
    </div>    
</template>

<script>
import Header from '../../components/header/Header'
import Scroll from '../../base/Scroll'

export default {
    data(){
        return {
            detailImg:'',
            detailText:'',
        }
    },
    components:{
        mHeader:Header,
        Scroll
    },
    activated(){
        let params = this.$route.params
        console.log(params)
        this.detailImg = params.list.imgUrl
        this.detailText = params.list.introduce
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    }    
}
</script>

<style scoped>
.wrapper{
    width:7.5rem;
    background-color: #F7F8FB;
}
.content{
    width:7.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:.2rem;
}
.scroll{
    width:6.72rem;
    height:10rem;
    display: flex;
    flex-direction: column;
}

.detail-img{
    width:6.72rem;
    border-radius:.1rem; 
    margin-bottom:.1rem;
}
.detail-text{
    width:6.72rem;
    font-size:.28rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:.4rem;
}
</style>