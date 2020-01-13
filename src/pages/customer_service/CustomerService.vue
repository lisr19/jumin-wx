<template>
    <div id="container">
        <m-header headerText="客服" @back="goBack"/>  
        <ul class="content" ref="charView">
            <li v-for="(item, index) in messageList" :key="index">
                <span :class="'span'+(item.myself?'right':'left')">{{item.message}}</span>
            </li>
        </ul>
      
        <div class="footer">
            <input id="text" type="text" v-model.trim="inputValue" @keyup.enter='chat' placeholder="说点什么吧...">
            <span id="btn" @click="btn2()"><p>发送</p></span>
        </div>
    </div>
</template>

<script>
import {otherPageMixin} from '../../common/js/mixin.js'
import Header from '../../components/header/Header'

export default{
    mixins:[otherPageMixin],
    data() {
        return {
             //输入的内容,事先约定好的
            inputValue: '',
            //聊天的数组内容
            messageList: []
        }
    },
    components:{
        mHeader:Header,
    },
    methods: {
            chat() {
                if(!this.inputValue){
                    return 
                }
                var _this=this;
                //  console.log(_this.$refs.charView);
                this.messageList.push({
                    message: this.inputValue,
                    //这个是判断当前是否是自己输入的内容,自己的是true,机器人的是false
                    myself: true
                })
                // console.log(1);
                // console.log(message)
                // console.log(this.inputValue);
                //每次发送信息之后机器人就要回复,所以添加完之后直接调用机器人的接口
                this.messageList.push({
                    message:'你好！',
                    myself:false
                })
                this.inputValue=""
            },
            btn2(){
                if(this.inputValue.length==0){
                    alert('请输入文字！')
                    return 
                }
                this.messageList.push({
                    message: this.inputValue,
                    myself: true
                })
                this.messageList.push({
                    message:'军民融合',
                    myself:false
                })                      
                this.inputValue=""
            },
            goBack(){
                this.$router.go(-1)
            }
         },
         mounted() {
             this.box=this.$refs.charView;
            this.messageList.push({
                message:'您好，请问有什么可以帮您的么？',
                myself:false,
            })
         },
}
</script>
<style scoped="">


     * {
            margin: 0;
            padding: 0;
            list-style: none;
            font-family: PingFangSC-Regular,PingFang SC;
        }
        #btn{
            height:.75rem;
            font-size:.3rem;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgb(145, 139, 139);
            line-height:.34rem; 
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        #container {
            width: 100vw;
            height: 100vh;
            background: #eee;
            position: relative;
            box-shadow: 20px 20px 55px #777;
        }
        .footer {
            width: 100vw;
            height: 1.2rem;
            background: rgba(212, 42, 31, 1);
            position: absolute;
            bottom: 0;
            overflow: hidden;
            
        }
        .footer input {
            margin-top: .2rem;
            width: 70vw;
            height: .75rem;
            outline: none;
            font-size: .4rem;
            text-indent: .2rem;
            position: absolute;
            border-radius: .12rem;
           margin-left: .2rem;
        }
        
        .footer span {
            margin-top: .2rem;
            display: inline-block;
            width: 20vw;
            height: 1rem;
            background: #ccc;
            font-weight: 900;
            line-height: .9rem;
            cursor: pointer;
            text-align: center;
            position: absolute;
            right: .2rem;
            border-radius: .12rem;
        }
        .footer span:hover {
            color: #fff;
            background: #999;
        }
        #user_face_icon {
            display: inline-block;
            background: red;
            width: 1.2rem;
            height: 1.2rem;
            border-radius: .6rem;
            position: absolute;
            bottom: .12rem;
            left: .28rem;
            cursor: pointer;
            overflow: hidden;
        }
        img {
            width: 1.2rem;
            height: 1.2rem;
        }
        .content {
            font-size: .4rem;
            width: 100vw;
            height: 10rem;
            overflow: auto;
          
        }
        .content li {
            margin-top: .2rem;
            display: block;
            clear: both;
            overflow: hidden;
        }
        .content li img {
            float: left;
        }
        .content li span{
            background: #7cfc00;
            padding: .2rem;
            border-radius: .2rem;
            float: left;
            margin: .12rem .2rem 0 .2rem;
            max-width: 6.2rem;
            border: .02rem solid #ccc;
            box-shadow: 0 0 .06rem #ccc;
            word-break: break-all 
        }
        
        .content li span.spanleft { 
            float: left;
            background: #fff;
        }
        .content li span.spanright { 
            float: right;
            background: #7cfc00;
        } 
</style>
