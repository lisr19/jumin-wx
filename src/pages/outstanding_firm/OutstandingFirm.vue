<template>
    <div class="wrapper">
        <div class="header">
            <m-header headerText="优秀企业" @back="goBack"/>
        </div>
        <div class="banner">
            <banner :dataList="bannerList" width="7.26rem" height="2.8rem" class="example-banner"></banner>
        </div>
        <div class="content">
            <scroll :data="dataList" ref="scroll" class="scroll">
                <v-cell-group>
                    <v-cell 
                        v-for="(item,index) in dataList"
                        :key="index"
                        :title="item.name"  
                        :label="`${item.joinDate} 入驻`"
                        is-link
                        title-class="item-title"
                        label-class	="item-label"
                        center
                        @click='itemClick(index)'
                    />
                </v-cell-group>
            </scroll>
        </div>
    </div>
</template>

<script>
import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import Scroll  from '../../base/Scroll'
import {otherPageMixin} from '../../common/js/mixin.js'
import { Cell, CellGroup } from 'vant';
import {getFirmList,getFirmPics} from '../../api/outstanding_firm'


export default {
    mixins:[otherPageMixin],
    data(){
        return {
            bannerList:[
                {   
                    title:'优秀企业',
                    coverImg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574952692375&di=38b418b5e371d2872313ce7b86c10d43&imgtype=0&src=http%3A%2F%2Fimg61.ybzhan.cn%2F9%2F20161027%2F636131958938484639160.jpg'
                },
                {   
                    title:'优秀企业',
                    coverImg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575547835&di=8a5412e26ced28c24b157e1da0aacb58&imgtype=jpg&er=1&src=http%3A%2F%2Fsrc.leju.com%2Fimp%2Fimp%2Fdeal%2F17%2F75%2F4%2F2a8af8435eef17ba66961ca3be2_p24_mk24_s500X0.png'
                },
                {
                    title:'优秀企业',
                    coverImg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574953116254&di=bffcfa25ff341ca0f45dde7051c283be&imgtype=0&src=http%3A%2F%2Fimg1.bmlink.com%2Fbig%2Fsupply%2F2014%2F11%2F17%2F14%2F866448211887129.jpg'
                }
            ],
            dataList:[
                {
                    name:'佛山市顺德区宝洋机械有限公司',
                    joinDate:'2019-04-18',
                    imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574952692375&di=38b418b5e371d2872313ce7b86c10d43&imgtype=0&src=http%3A%2F%2Fimg61.ybzhan.cn%2F9%2F20161027%2F636131958938484639160.jpg',
                    description:'具有确定性较强的盈利增长能力，能取得长期较高收益，积极化解风险。可见，优质企业持续性的盈利增长，可以构成股市良性发展的内在支撑力等。',
                },
                {
                    name:'广东永通起重机械实业有限公司',
                    joinDate:'2019-02-08',
                    imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574952692375&di=38b418b5e371d2872313ce7b86c10d43&imgtype=0&src=http%3A%2F%2Fimg61.ybzhan.cn%2F9%2F20161027%2F636131958938484639160.jpg',
                    description:'具有确定性较强的盈利增长能力，能取得长期较高收益，积极化解风险。可见，优质企业持续性的盈利增长，可以构成股市良性发展的内在支撑力等。',
                },
                {
                    name:'佛山市顺德区鑫还宝资源利用有限公司',
                    joinDate:'2019-10-12',
                    imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574952692375&di=38b418b5e371d2872313ce7b86c10d43&imgtype=0&src=http%3A%2F%2Fimg61.ybzhan.cn%2F9%2F20161027%2F636131958938484639160.jpg',
                    description:'具有确定性较强的盈利增长能力，能取得长期较高收益，积极化解风险。可见，优质企业持续性的盈利增长，可以构成股市良性发展的内在支撑力等。',
                },
                {
                    name:'广东日出东方空气能有限公司',
                    joinDate:'2019-07-22',
                    imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574952692375&di=38b418b5e371d2872313ce7b86c10d43&imgtype=0&src=http%3A%2F%2Fimg61.ybzhan.cn%2F9%2F20161027%2F636131958938484639160.jpg',
                    description:'具有确定性较强的盈利增长能力，能取得长期较高收益，积极化解风险。可见，优质企业持续性的盈利增长，可以构成股市良性发展的内在支撑力等。',
                },
            ],
        }
    },
    created(){
        this._getFirmList()
        this._getFirmPics()
    },
    components:{
        mHeader:Header,
        Scroll,
        vCell:Cell,
        vCellGroup:CellGroup,
        Banner
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        },
        itemClick(index){
            this.$router.push(
                {
                    name:'outstanding_firm_detail',
                    params:{
                        id:index,
                        list:this.dataList[index]
                    }
                }
            )
        },
        _getFirmList(){
            getFirmList().then(res=>{
                console.log(res.data,'firm_list')
            })
        },
        _getFirmPics(){
            getFirmPics().then(res=>{
                console.log(res.data,'firm_pics')
            })
        }
    }
}
</script>

<style scoped>
.wrapper{
    height:13.36rem;
    width:7.5rem;
    background-color:#FFF;
    display: flex;
    flex-direction: column;
}
.content{
    width:6.62rem;
    height:12.26rem;
    margin-left:.44rem;
    margin-top:.02rem;
}
.example-banner{
    margin-left:.12rem;
    border-radius: .12rem;
    overflow:hidden;
    width:7.26rem;
    height:2.8rem;
}
.scroll{
    height:9rem;
    width:6,62rem;
    overflow: hidden;
}
.item-title{
    font-size:.36rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:.5rem;    
}
.item-label{
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(153,153,153,1);
    line-height:.34rem;
}

</style>