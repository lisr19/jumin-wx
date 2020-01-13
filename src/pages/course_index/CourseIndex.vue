<template>
    <div>
        <scroll class="list-wrapper">
            <ul class="list">
                <li class="list-item" v-for="(item,index) in dataList" :key="index" @click='courseClick(index)'>
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573811682169&di=63a3ba427091197417faf0647418e34f&imgtype=0&src=http%3A%2F%2Ftu.ossfiles.cn%3A9186%2Fgroup2%2FM00%2F52%2FFF%2FrBgICV2hOPeAIQw-AAClUx67x4Y552.jpg" class="item-img"/>
                    <div class="item-content">
                        <p class="content-title">{{item.name}}</p>
                    </div>
                </li>
            </ul>
        </scroll>
    </div>
</template>

<script>
import Scroll from '../../base/Scroll'
import {getOnlineList} from '../../api/train'

export default {
    data(){
        return {
            dataList:[]
        }
    },
    activated(){
        this._getOnlineList()
    },
    components:{
        Scroll,
    },
    methods:{
        courseClick(index){
            this.$emit('courseClick',this.dataList[index].videoUrl)
        },
        _getOnlineList(){
            getOnlineList().then(res=>{
                console.log(res.data,'online-course')
                let ary = []
                for(let i in res.data.list){
                    if(res.data.list[i].id==this.$route.params.id){
                        ary.unshift(res.data.list[i].trainCourseVideoList)
                    }
                }
                this.dataList = ary[0]
            })
        },
    },    
}
</script>

<style scoped>
.list-wrapper{
    height:6.2rem;
    overflow:hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.list{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.list-item{
    width:6.8rem;
    height:2.08rem;
    display: flex;
    margin-bottom:.2rem;
    border-bottom: .01rem solid rgba(236, 236, 236, 1)
}

.item-img{
    width:1.8rem;
    height:1.8rem;
    margin:.12rem .12rem .12rem .2rem;
}
.item-content{
    display: flex;
    flex-direction: column;
}
.content-title{
    font-size:.28rem;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height:.4rem;    
    margin-top:.2rem;
}
.content-time{
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(153,153,153,1);
    line-height:.34rem;   
    margin-top:.2rem; 
}

</style>>