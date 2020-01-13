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
        this.title=params.title
        this.date = params.date.slice(0,9)
        this.detailImg = params.img
        this.detailText = params.content
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