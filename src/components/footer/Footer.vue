<template>
    <div class="footer-wrapper">
        <div v-for="(item,index) in footerList " :key="index" class="footer-item" @click="footerClick(index,item.data)">
            <img 
                :src="computeImg(index)" 
                class="item-icon" 
                :style="{width:index===0 && index===currentIndex ?'0.78rem':'0.48rem', height:index===0 && index===currentIndex ?'0.78rem':'0.48rem'}"
            />
            <p 
                class="item-text" 
                :style="{color:index===currentIndex? 'red':''}" 
                v-show="currentIndex==0 & index==0 ?false:true"
            >
                {{item.text}}
            </p>
        </div>
    </div>
</template>

<script>


export default {
    data(){
        return{
            currentIndex:0,
            footerList:[
                {
                    img:require("../../../static/img/icon/home.png"),
                    imgActived:require("../../../static/img/icon/home_active.png"),
                    text:"首页",
                    data:'home'
                },
                {
                    img:require("../../../static/img/icon/manage.png"),
                    imgActived:require("../../../static/img/icon/manage_active.png"),
                    text:"企业管理",
                    data:'company'
                },
                {
                    img:require("../../../static/img/icon/political.png"),
                    imgActived:require("../../../static/img/icon/political_active.png"),
                    text:"培训",
                    data:'train'
                },
                {
                    img:require("../../../static/img/icon/my.png"),
                    imgActived:require("../../../static/img/icon/my_active.png"),
                    text:"我的",
                    data:'my'
                }
            ]
        }
    },
    activated(){
        console.log(1)
        let name = this.$route.name
        console.log(name)
        if(name=='home'){
            this.currentIndex = 0
        }else if(name=='company'){
            this.currentIndex = 1
        }else if(name =='online-train'){
            this.currentIndex = 2
        }else if(name == 'my'){
            this.currentIndex = 3
        }else{
            this.currentIndex = 0
        }
    },
    methods:{
        computeImg(index){
            if(index===this.currentIndex){
                return this.footerList[index].imgActived
            }else{
                return this.footerList[index].img
            }
        },
        footerClick(index,data){
            if(this.currentIndex===index){
                return
            }
            this.currentIndex = index
            this.$emit('footerClick',data)
        },
    },
}
</script>

<style scoped>
.footer-wrapper{
    display: flex;
    position: fixed;
    bottom:0px;
    width:7.5rem;
    height:.9rem;
    border-top:.02rem solid #EDEDED;
    background-color:#F7F7F7;
}

.footer-item{
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:.9rem;
}

.item-icon{
    width:.48rem;
    height:.48rem;
    margin-bottom:.04rem
}

.item-text{
    font-size:.2rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(153,153,153,1);
    line-height:.28rem;
    margin:0px;
}




</style>
