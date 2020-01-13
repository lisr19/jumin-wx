<template>
    <div class="tab-bar">
        <div v-for="(item,index) in dataList" :key="index" class="tab-bar-item" @click="handleClick(index)">
            <img :src="item.imgUrl" class="item-img"/>
            <p class="item-title">{{item.title}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            dataList:[
                {
                    imgUrl:require("../../../static/img/my_icon/my_class@2x.png"),
                    title:"我的课程",
                    to:'my_course'
                },
                {
                    imgUrl:require("../../../static/img/my_icon/management@2x.png"),
                    title:"物业管理",
                    to:'property_management'
                },
                {
                    imgUrl:require("../../../static/img/my_icon/transform@2x.png"),
                    title:"成果转换",
                    to:'example_center'
                }
            ]
        }
    },
    methods:{
        handleClick(index){
            this.$router.push({name:this.dataList[index].to})
        }
    },
}
</script>

<style scoped>
.tab-bar{
    width:6.46rem;
    height:1.8rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background:rgba(255,255,255,1);
    box-shadow:0rem .04rem .24rem 0rem rgba(250,196,193,0.35);
    border-radius:.12rem;    
}
.tab-bar-item{
    width:1.2rem;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.item-img{
    width:.48rem;
    height:.48rem;
    margin-bottom:.2rem;
}

.item-title{
    font-size:.28rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:.4rem;
}

</style>
