<template>
    <div class="my-wrapper">
        <div class="my-header">
            <div class="header-content" @click="login">
                <div class="content-img">
                    <img :src="require('../../../static/img/icon/home_active@2x.png')"/>
                </div>
                <div class="content-text">
                    <p class="content-text-title">顺德军民融合</p>
                    <p class="content-text-info">{{computedUsername}}</p>
                </div>
                <div class="content-right-icon-wrapper">
                        <v-icon name="arrow" size="0.38rem" color="#FFF"/>
                </div>
            </div>
        </div>
        <tab-bar class="tab-bar"></tab-bar>
        <my-list class="cell-list" :isLogin="isLogin" @signOut="signOut" @contact="contact"/>
    </div>
</template>

<script>
import { Icon } from 'vant';
import MyTabBar from '../../components/my_tabbar/MyTabBar'
import MyList from '../../components/my_list/MyList'
import {mainPageMixin} from '../../common/js/mixin.js'
import {mapGetters,mapMutations} from 'vuex'
import {contactUs} from '../../api/my'


export default {
    mixins:[mainPageMixin],
    data(){
        return {
            pageType:1
        }
    },
    mounted(){
    },
    computed:{
        computedUsername(){
            let username = this.getUsername
            return username ? `${username}`: '未登录，请点击登录' 
        },
        isLogin(){
            let username = this.getUsername
            return username ? true : false
        },
        ...mapGetters(['getUsername'])
    },
    components:{
        vIcon:Icon,
        TabBar:MyTabBar,
        MyList,
    },
    methods:{
        login(){
            if(this.getUsername){
                return 
            }
            this.$router.push({name:'login'})
        },
        signOut(){
            this.changeSignOut()
        },
        contact(){
            this.$router.push({name:'contact'})
        },
        ...mapMutations({
            changeLogin:"CHANGE_LOGIN",
            changeSignOut:"CHANGE_SIGN_OUT"
        })
    }
}
</script>

<style scoped>
.my-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.my-header{
    height:2.84rem;
    width:7.5rem;
    background:linear-gradient(319deg,rgba(221,46,35,1) 0%,rgba(251,120,120,1) 100%);
    display:flex;
    flex-direction: column;
    align-items:center;
}
.header-content{
    width:6.46rem;
    height:1.24rem;
    display:flex;
    align-items: center;
    margin-top:.48rem;
}
.content-img{
    height:1.24rem;
    width:1.24rem;
    border-radius: 50%;
    overflow: hidden;
    background-color: #fff;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-right:.2rem;
}
.content-text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start
}
.content-text-title{
    font-size:.32rem;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:.44rem;
    margin-bottom:.1rem;
}
.content-text-info{
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(236,235,235,1);
    line-height:.34rem;  
    margin-top:.1rem;  
}
.content-right-icon-wrapper{
    flex:1;
    display: flex;
    justify-content: flex-end;
}
.tab-bar{
    position: absolute;
    top:2.12rem;
}
.cell-list{
    margin-top:1.8rem;
}
</style>
