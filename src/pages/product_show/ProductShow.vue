<template>
    <div class="wrapper">
        <div class="header">
            <m-header headerText="产品展示" @back="goBack"/>
        </div>
        <div class="content">
            <scroll class="scroll">
                <ul class="list">
                    <li class="list-item" v-for="(item,index) in dataList" :key="index" @click="itemClick(index)" >
                        <img class="item-img" :src="item.imgUrl"/>
                        <p class="item-title">{{item.name}}</p>
                    </li>
                </ul>
            </scroll>
        </div>
    </div>
</template>

<script>
import Header from  '../../components/header/Header'
import Scroll from '../../base/Scroll'
import {otherPageMixin} from '../../common/js/mixin.js'
import {getProductList,addProduct,delProduct} from '../../api/product_show'

export default {
    mixins:[otherPageMixin],
    data(){
        return {
            dataList:[]
        }
    },
    components:{
        mHeader:Header,
        Scroll,
    },
    created(){
        this._getProductList()
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        },
        itemClick(index){
            this.$router.push(
                {
                    name:'product_detail',
                    params:{
                        id:index,
                        list:this.dataList[index]
                    }
                }   
            )    
        },
        _getProductList(){
            getProductList().then(res=>{
                console.log(res.data,'product-list')
                this.dataList = res.data.list
            })
        }
    }
}
</script>

<style scoped>
.wrapper{
    height:13.36rem;
    width:7.5rem;
    background: #F7F8FB;
    display: flex;
    flex-direction: column;
}
.content{
    width:7.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.scroll{
    width:7rem;
    height:11.88rem;
    overflow:hidden;
    margin-top:.2rem;
}
.list{
    width:7rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.list-item{
   width:3.48rem;
    height:3.9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: .1rem;
    background-color: #FFF;
    margin-bottom:.2rem;
}
.item-img{
    width:3.28rem;
    height:3.28rem;
    background:rgba(216,216,216,1);
    border-radius:.1rem;    
}
.item-title{
    font-size:.28rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:.4rem;    
}

</style>