<template>
    <div class="login">
        <div class="header">
            <img :src="require('../../../static/img/login_icon/back@2x.png')" class="header-icon" @click="back"/>
        </div>
        <div class="avatar">
            <img class="avatar-img" :src="require('../../../static/img/icon/home_active@2x.png')"/>
            <p class="avatar-text">军民融合</p>
        </div>
        <div class="input">
            <input class="id-input" v-model="account" placeholder="请输入账号"/>
            <input class="password-input" v-model="password" type="password" placeholder="请输入密码"/>
        </div>
        <div class="login-button" @click="loginClick"><p class="login-text">登录</p></div>
        <div class="tip"><p class="tip-text">忘记密码？</p></div>
        <div class="sign-up-wrapper">
            <div class="sign-up-button" @click="signUp">
                <p class="sign-up-text">注册账号</p>
            </div>
        </div>
    </div>
</template>

<script>
import {otherPageMixin} from '../../common/js/mixin.js'
import {login} from '../../api/my'
import {mapMutations} from 'vuex'


export default {    
    mixins:[otherPageMixin],
    data(){
        return {
            account:'',
            password:'',
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        loginClick(){
            let form = {}
            form.username = this.account
            form.password = this.password
            form.type = 2
            if(form.username===''||form.password===''){
                alert('账号或密码不能为空！')
            }else{
                login(form).then(res=>{
                    if(res.code == 200){
                        console.log(res.data)
                        this.changeLogin(res.data)
                        this.$router.push({name:'my'})
                        alert('登录成功！')
                        this.account = ''
                        this.password = ''
                    }else{
                        alert('账号或密码错误！')
                    }
                })
            }
        },
        signUp(){
            this.$router.push({name:'sign_up'})
        },
        ...mapMutations({
            changeLogin:'CHANGE_LOGIN'
        })
    }
}
</script>

<style scoped>
.login{
    height:13.36rem;
    width:7.5rem;
    background-image: url('../../../static/img/login_icon/bgImg@3x.png');
    background-size: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.header{
    width:7.5rem;
    display: flex;
    justify-content: flex-start;
}

.header-icon{
    width:.44rem;
    height:.44rem;
    margin-top:.2rem;
    margin-left:.2rem;
}

.avatar{
    margin-top:.9rem;
    width:6.12rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.avatar-text{
    margin-top:.2rem;
    font-size:.32rem;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:.44rem;
    text-shadow:0rem .02rem .04rem rgba(0,0,0,0.5);    
    margin-bottom:.8rem;
}
.input{
    width:6.12rem;
    height:1.8rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border-radius:.08rem;
    border:.02rem solid rgba(206,73,46,0.4);
    margin-bottom:.4rem;
}
.id-input{
    width:6.12rem;
    height:.9rem;
    font-size:.34rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    border-bottom: .02rem solid rgba(255, 223, 221, 1)
}
.password-input{
    border:none;
    width:6.12rem;
    height:.9rem;
    font-size:.34rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400; 
}
.id-input::placeholder, .password-input::placeholder{
    font-size:.3rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgb(179, 179, 179);
    position:relative;
    left:.4rem;
}
.login-button{
    width:6.12rem;
    height:.9rem;
    background:rgba(212,42,31,1);
    box-shadow:0rem .04rem .08rem 0rem rgba(255,147,140,1);
    border-radius:.08rem;   
    display: flex;
    justify-content: center;
    align-items: center; 
    margin-bottom:.5rem;
}
.login-text{
    font-size:.3rem;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:.4rem;    
}
.tip{
    width:6.12rem;
    display: flex;
    justify-content: flex-end;
}
.tip-text{
    font-size:.28rem;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:.4rem;    
}
.sign-up-wrapper{
    margin-top:3rem;
    width:7.5rem;
    height:2.08rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background:rgba(255,255,255,.3);
}
.sign-up-button{
    width:6.12rem;
    height:.9rem;
    background:rgba(255,152,0,1);
    box-shadow:0rem .04rem .08rem 0rem rgba(255,180,180,0.16);
    border-radius:.08rem;
    display: flex;
    justify-content: center;
    align-items: center;    
}
.sign-up-text{
    font-size:.3rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:.42rem;    
}

</style>