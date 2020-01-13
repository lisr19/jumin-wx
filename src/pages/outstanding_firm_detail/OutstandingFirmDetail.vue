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
        this.detailTitle = params.list.name
        this.date = params.list.joinDate
        this.detailImg = params.list.imgUrl
        this.detailText = params.list.description
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