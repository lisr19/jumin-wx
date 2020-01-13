<template>
    <detail-content 
        @back="handleBack"
        :title="title"
        :date="date"
        :detailTitle="detailTitle"
        :detailImg="detailImg"
        :detailText="detailText"
    />
</template>

<script>
import DetailContent from '../../components/detail_content/DetailContent'

export default {
    data(){
        return {
            title:'环境',
            detailTitle:'军民融合产业园园区环境介绍',
            date:'2019年11月21日',
            detailImg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574510619594&di=dd863a32688615299c79afb5a5c965e1&imgtype=0&src=http%3A%2F%2Fimg.kinpan.com%2FFiles%2Fkinpanto%2F%25E7%25A6%258F%25E5%25B7%259E%25E6%25B5%25B7%25E5%25B3%25A1%25E5%2588%259B%25E6%2584%258F%25E4%25BA%25A7%25E4%25B8%259A%25E5%259B%25AD%25E4%25B8%2580%25E6%259C%259F%2F160118154059343.jpg',
            detailText:'   顺德军民融合创新产业园源于国防科技大学，是广东省首个军民融合特色产业园区按照“一园多区”的建设模式，规划了核心启动区、总部孵化区、先进制造区等区域，搭建特色鲜明的军民融合服务体系和公共技术平台，打造集孵化器，加速器，产业园于一体的全链条军民融合产业生态体系。'
        }
    },
    components:{
        DetailContent
    },
    methods:{
        handleBack(){
            this.$router.go(-1)
        }
    },
}
</script>

<style scoped>

</style>