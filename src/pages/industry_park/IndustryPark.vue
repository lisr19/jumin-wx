<template>
    <div class="wrapper">
        <m-header headerText="园区产业" @back="goBack"/>
        <div class="img-wrapper">
            <img 
                v-for="(item,index) in imgList" 
                :key="index" :src="item.imgUrl" 
                class="img" 
                @click="handleClick(item.to)"
            />
        </div>
    </div>
</template>

<script>
import Header from '../../components/header/Header'
import {otherPageMixin} from '../../common/js/mixin.js'

export default {
    mixins:[otherPageMixin],
    data(){
        return {
            imgList:[
                {
                    imgUrl:require("../../../static/img/industry_park_img/introduce@2x.png"),
                    to:'intro_park_industry'
                },
                {
                    imgUrl:require("../../../static/img/industry_park_img/exhibition@2x.png"),
                    to:'intro_park_environment'
                },
                {
                    imgUrl:require("../../../static/img/industry_park_img/political@2x.png"),
                    to:'political_service'
                }
            ]
        }
    },
    components:{
        mHeader:Header,
    },
    methods:{
        goBack(){
            this.$router.push({name:'home'})
        },
        handleClick(to){
            this.$router.push({name:to})
        }
    }
}
</script>

<style scoped>
.wrapper{
    display: flex;
    flex-direction: column;
    height:100%;
    background-color:#F7F8FA;
}
.img-wrapper{
    display:flex;
    flex-direction: column;
    align-items: center;
}
.img{
    width:6.96rem;
    height:1.96rem;
    border-radius:.1rem;
    margin-top:.2rem;
}
</style>