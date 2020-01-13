<template>
    <div class="sign-up">
        <div class="content">
            <div class="content-title">
                <img class="title-icon" :src="require('../../../static/img/login_icon/back@2x.png')" @click="back"/>
                <div class="title">
                    <p class="title-text">注册</p>
                </div>
            </div>
            <div class="content-body">
                <div class="item-wrapper">
                    <input class="account-input" v-model="account" placeholder="账号"/>
                </div>
                <div class="item-wrapper">
                    <input class="verification-input" v-model="verificationCode" placeholder="姓名"/>
                </div>
                <div class="item-wrapper">
                    <input class="password-input" v-model="password" type="password" placeholder="密码"/>
                </div>
            </div>
            <div class="sign-up-button" @click="signUpClick">
                <p class="sign-up-button-text">注册</p>
            </div>
            <div class="footer">
                <p class="footer-text">点击注册，即表示您已同意《平台协议》</p>
            </div>
        </div>
    </div>
</template>

<script>
import {otherPageMixin} from '../../common/js/mixin.js'
import {signUp} from '../../api/my'

export default {    
    mixins:[otherPageMixin],
    data(){
        return {
            account:'',
            verificationCode:'',
            password:'',
            verificationBtnText:'获取验证码',
            timer:false,
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        signUpClick(){
            if(!this.account||!this.verificationCode||!this.password){
                alert('请填写完整！')
                return 
            }
            let form = {}
            form.username = this.account
            form.name = this.verificationCode
            form.password = this.password
            console.log(this.form)
            signUp(form).then(res=>{
                console.log(res)
                this.account = ''
                this.verificationCode = ''
                this.password = ''
            })

        },
        getVerificationCode(){
            if(!this.timer){
                let NUMBER = 60
                this.timer = true
                let reduce = setInterval(()=>{
                    NUMBER--
                    this.verificationBtnText = `${NUMBER}S后重发`
                    if(NUMBER == 0){
                        clearInterval(reduce)
                        this.verificationBtnText = '获取验证码'
                        this.timer=false
                    }
                },1000)
            }
        }
    }
}
</script>

<style scoped>
.sign-up{
    height:13.36rem;
    width:7.5rem;
    background-image: url('../../../static/img/login_icon/bgImg@3x.png');
    background-size: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.content{
    display: flex;
    flex-direction: column;
    align-items: center;
    width:6.84rem;
    height:7.4rem;
    background:rgba(255,255,255,1);
    box-shadow:0rem .08rem .08rem 0rem rgba(226,87,23,0.43);
    border-radius:.1rem;    
}
.content-title{
    width:6.12rem;
    display: flex;
    margin-top:.46rem;
}
.title-icon{
    width:.32rem;
    height:.32rem;
}
.title-text{
    width:5.48rem;
    text-align: center;
    font-size:.32rem;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height:.44rem;
}
.content-body{
    height:3rem;
    width:6.12rem;
    display: flex;
    flex-direction: column;
    margin-top:.3rem;
}
.item-wrapper{
    width:6.12rem;
    height:1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: .02rem solid rgb(193, 193, 193,1)
}
.account-input, .verification-input, .password-input{
    height:.64rem;
    flex:1;
    border: none;
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(182,182,182,1);
} 
.verification-bttton{
    display: flex;
    justify-content: center;
    align-items: center;
    width:1.66rem;
    height:.64rem;
    border-radius: .1rem;
    border:.02rem solid rgba(32, 32, 32, 1)
}
.verification-button-text{
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(51, 51, 51, 1);
    line-height:.34rem;
}
.sign-up-button{
    width:6.12rem;
    height:.88rem;
    display:flex;
    justify-content: center;
    align-items:center;
    background:rgba(212,42,31,1);
    box-shadow:0rem .04rem .08rem 0rem rgba(255,147,140,1);
    border-radius:.08rem;   
    margin-top:.72rem;
}
.sign-up-button-text{
    font-size:.3rem;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:.42rem;   
}
.footer{
    width:6.12rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:.7rem;
}
.footer-text{
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:.34rem;    
}
</style>