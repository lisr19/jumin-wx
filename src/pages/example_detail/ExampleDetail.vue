<template>
    <keep-alive>
        <detail-content 
            @back="handleBack"
            :title="title"
            :date="date"
            :detailTitle="detailTitle"
            :detailImg="detailImg"
            :detailText="detailText"
        />
    </keep-alive>
</template>

<script>
import DetailContent from '../../components/detail_content/DetailContent'

export default {
    data(){
        return {
            title:'详情',
            detailTitle:'',
            date:'',
            detailImg:'',
            detailText:''
        }
    },
    components:{
        DetailContent
    },
    activated(){
        let params = this.$route.params
        console.log(params)
        this.date = params.list.addTime.slice(0,10)
        this.detailImg = params.list.picUrl
        this.detailText = params.list.content
        this.detailTitle = params.list.title
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