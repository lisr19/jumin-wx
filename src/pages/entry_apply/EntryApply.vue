<template>
    <div class="wrapper">
        <div>
            <m-header headerText="入驻申请" @back="goBack"/>
        </div>
        <div class="info">
            <v-cell-group>
                <v-field
                    v-model="company_name"
                    clearable
                    label="企业名称"
                    placeholder="请输入企业全称"
                />
                <v-field
                    v-model="credit_code"
                    label="统一社会信用代码"
                    placeholder="请输入统一社会信用代码"
                />
            </v-cell-group>
        </div>
        <div class="apply-reason">
            <p class="apply-reason-text">申请理由:</p>
            <textarea class="text-field" v-model="apply_reason"/>
        </div>
        <p class="attachement-text">相关附件：</p>
        <div class="button-upload">
            <v-uploader 
                :after-read="afterRead"
                class="upload"  
                accept="application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/jpeg,image/png,image/gif,application/pdf"
            >
                <p class="upload-text">上传文件</p>
            </v-uploader>
        </div>
        <div class="footer" @click="_submitApply">
            <p class="footer-text">提交申请</p>
        </div>
    </div>
</template>

<script>
import Header from '../../components/header/Header'
import { CellGroup, Field, Uploader, Icon } from 'vant';
import {otherPageMixin} from '../../common/js/mixin.js'
import {submitApply} from '../../api/settled_company'
 
export default {
    mixins:[otherPageMixin],
    data(){
        return {
            company_name:'',
            credit_code:'',
            apply_reason:'',
            file:'',
        }
    },
    components:{
        mHeader:Header,
        vField:Field,
        vCellGroup:CellGroup,
        vUploader:Uploader,
        vIcon:Icon,
    },
    deactivated(){
        this.company_name=''
        this.credit_code=''
        this.apply_reason=''
        this.file=''
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        },
        afterRead(file){
            console.log(file)
            this.file = file.file
        },
        _submitApply(){
            if(this.company_name.length && this.credit_code.length && this.apply_reason.length){
                let form = {}
                form.enterpriseName = this.company_name
                form.unifiedSocialCreditCode = this.credit_code
                form.applicationReason = this.apply_reason
                form.attachmentUrl = this.file

                submitApply(form).then(res=>{
                    console.log(res.data,'上传申请')
                    this.company_name=''
                    this.credit_code=''
                    this.apply_reason=''
                    this.file=''
                    alert('申请成功！')
                })
            }else{
                alert('请确认申请填写完整！')
            }
        }
    }
}
</script>

<style scoped>
.wrapper{
    width:7.5rem;
    height:13.36rem;
    background-color:#F7F8FA;
    display: flex;
    flex-direction: column;
}
.van-field{
    margin-left:.24rem;
}
.info{
    width:7.5rem;
    height:2.4rem;
    background-color:#FFF;
}
.apply-reason{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width:7.5rem;
    height:3.4rem;
    background-color: #FFF;
    margin-top:.2rem;
}
.apply-reason-text{
    font-size:.32rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:.44rem;   
    margin-left:.56rem ;
    margin-bottom:.12rem;
    margin-top:.2rem;
    
}
.text-field{
    background-color: #F7F8FA;
    padding:0;
    width:6.48rem;
    height:2.4rem;
    margin-left:.56rem;
    border-radius:.1rem;
    border:none;
    font-size:.22rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
}
.attachement-text{
    font-size:.32rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:.44rem;   
    margin-left:.56rem;
    margin-top:.28rem;
    margin-bottom:.28rem;
}
.button-upload{
    width:7.5rem;
    height:1rem;
    background-color: #FFF;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
.button-upload >>> .van-uploader{
    height:.44rem;
}
.upload{
    display:inline-flex;
}
.upload-text{
    font-size:.32rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(18,150,219,1);
    line-height:.44rem;
}
.footer{
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom:0rem;
    width:7.5rem;
    height:1rem;
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