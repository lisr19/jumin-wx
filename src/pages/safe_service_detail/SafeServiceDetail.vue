<template>
    <detail-content 
        @back="handleBack"
        :title="title"
        :date="date"
        :detailTitle="detailTitle"
        :detailImg="detailImg"
        :detailText="detailText"
        :showHeader="showHeader"
    />
</template>

<script>
import DetailContent from '../../components/detail_content/DetailContent'

export default {
    data(){
        return {
            showHeader:false,
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
        this.title=params.list.title
        this.detailImg = params.list.imgUrl
        this.detailText = params.list.content
    },
    methods:{
        handleBack(){
            this.$router.go(-1)
        },
    },
}
</script>

<style scoped>

</style>