<template>
    <div class='warpper' @click="back">
        <p class="address">地址：</p>
        <p class="address">{{address}}</p>
        <p class="number">电话：</p>
        <p class="address">{{phoneNumber}}</p>
    </div>
</template>

<script>
import {contactUs} from '../../api/my'
import {otherPageMixin} from '../../common/js/mixin.js'

export default {
    mixins:[otherPageMixin],
    data(){
        return {
            address:'',
            phoneNumber:''
        }
    },
    mounted(){
        contactUs().then(res=>{
            console.log(res.data)
            this.address = res.data.list[0].address
            this.phoneNumber = res.data.list[0].phoneNumber
        })
    },
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
.warpper{
    width:7.5rem;
    height:100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
.address{
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgb(22, 22, 22);
    line-height:.34rem;   
    margin-left:.2rem; 
}
.number{
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgb(22, 22, 22);
    line-height:.34rem; 
    margin-top:.4rem;  
    margin-left:.2rem; 
}
</style>