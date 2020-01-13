<template>
    <div class="detail-wrapper">
        <div class="header">
            <m-header headerText="课程详情" @back="goBack"/>
        </div>
        <div class="content">
            <div class="video-wrapper">
                <video class="video-img"  :src="videoUrl" controls/>
            </div>
            <div class="tab">
                <div class="tab-item" v-for="(item,index) in tabList" :key="index" @click="tabClick(index)">
                    <div 
                        class="item-text"
                        :class="{active:currentIndex==index?true:false}"
                    >
                        {{item}}
                    </div>
                    <div class="item-border" v-show="currentIndex===index?true:false"></div>
                </div>
            </div>
            <keep-alive>
                <router-view class="router-view" @courseClick="courseClick"></router-view>
            </keep-alive>
        </div>
        <div class="footer" @click="_enrollCourse">
            <p class="footer-text">立即报名</p>
        </div>
    </div>
</template>

<script>
import Header from '../../components/header/Header'
import {otherPageMixin} from '../../common/js/mixin.js'
import {enrollCourse} from '../../api/train'

export default {
    mixins:[otherPageMixin],
    beforeRouteEnter(to,from,next){
        let name = from.name
        next(vm=>{
            if((name=='online-train')||(name == 'my_course')){
                vm.fromName = name
            }
        })
    },
    data(){
        return {
            fromName:'online-train',
            currentIndex:0,
            tabList:['课程介绍','课程目录'],
            nameList:['brief_info','course_index'],
            dataList:[],
            videoUrl:''
        }
    },
    components:{
        mHeader:Header,
    },
    activated(){
        this.dataList = this.$route.params
    },
    methods:{
        courseClick(val){
            this.videoUrl = val
        },
        goBack(){
            this.$router.push({name:this.fromName})
        },
        tabClick(index){
            if(this.currentIndex == index){
                return 
            }
            this.currentIndex = index
            this.$router.push({name:this.nameList[index]})
        },
        _enrollCourse(){
            if(!localStorage.token){
                alert('请登录！')
                this.$router.push({name:'my'})
                return 
            }
            let form = {}
            form.trainCourseId = this.dataList.id
            form.userId = 1
            form.isSuccess = 1
            form.addTime = '2019-11-25 12:00:00'
            enrollCourse(form).then(res=>{
                if(res.code==200){
                    alert('选课成功！')
                }else if(res.code==400){
                    alert('请勿重复选课！')
                }else{
                    alert('网络错误，请稍后重试！')
                }
            })
        }
    }
}
</script>

<style scoped>
.detail-wrapper{
    height:13.34rem;
    background-color:#FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.content{
    height:11.22rem;
    width:7.5rem;
    display:flex;
    flex-direction: column;
}
.video-wrapper{
    height:4.14rem;
    width:7.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: .02rem solid rgba(236, 236, 236, 1)
}
.video-img{
    width:6.78rem;
    height:3.4rem;
    background:rgba(216,216,216,1);
    border-radius:.1rem;    
}
.tab{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width:7.5rem;
    height:1rem;  
}
.tab-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:.56rem;
    margin-left:.48rem;
}
.item-text{
    font-size:.32rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(170,170,170,1);
    line-height:.44rem;  
    margin-bottom:.06rem;  
}
.item-border{
    width:.8rem;
    height:.3rem;
    background:rgba(255,152,0,1);
    border-radius:.12rem;
}
.active{
    font-size:.32rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(255,152,0,1);
    line-height:.44rem;    
}
.router-view{
    height:6.68rem;
    width:7.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.footer{
    display: flex;
    justify-content: center;
    align-items: center;
    width:7.5rem;
    height:1.04rem;
    background:rgba(255,152,0,1);
}
.footer-text{
    font-size:.32rem;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:.44rem;
}
</style>