<template>
    <requirement-detail-content 
        @back="handleBack"
        :title="title"
        :date="date"
        :detailTitle="detailTitle"
        :detailImg="detailImg"
        :detailText="detailText"
        :contact="contact"
        :status="status"
    />
</template>

<script>
import RequirementDetailContent from '../../components/requirement_detail_content/RequirementDetailContent'
import {Dialog} from 'vant'

export default {
    data(){
        return {
            title:'详情',
            detailTitle:'',
            date:'',
            detailImg:'',
            detailText:'',
            contact:'',
            status:'',
            flag:0
        }
    },
    components:{
        RequirementDetailContent
    },
    created(){
    },
    activated(){
        let params = this.$route.params
        console.log(params)
        this.date = params.date
        this.detailImg = params.img
        this.detailText = params.content
        this.detailTitle = params.title
        this.status = params.status
        this.contact = params.contact
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