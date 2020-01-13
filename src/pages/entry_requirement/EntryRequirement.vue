<template>
    <div>
        <scroll class="scroll">
            <div class="text-wrapper">
                <p class="text" v-html="text">
                </p>
            </div>
        </scroll>
    </div>
</template>

<script>
import Scroll from '../../base/Scroll'
import {getEntryQualification,addEntryQualification} from '../../api/settled_company'

export default {
    data(){
        return{
            text:'<p>入驻条件：1.在海淀区注册、纳税并纳统，具有独立企业法人资格。</p></br><p>2.产业领域属于北京市和海淀区重点发展的“高精尖”领域，且属于军民融合业务。</p></br><p>3.财务状况良好，具有可持续经营能力。</p></br><p>4.无不良信用信息记录。</p></br><p>5.入驻企业上一年单位面积收入（单位面积收入：年度营业收入/租赁建筑面积）不低于3万元/ｍ2，新设立企业、区外迁入企业、区内迁入企业营业收入年复合增长率应分别不低于30%、20%、20%；区级财政贡献复合增长率不低于8%。</p></br><p>新设立企业指在海淀区成立未满一年的企业；区外迁入企业指入驻园区时公司注册及纳税迁入海淀区未满一年的企业；区内迁入企业指入驻园区时在海淀区成立时间一年（含）以上的企业。</p></br><p>6.优先考虑对区域经济贡献较大、拥有本领域核心技术和自主知识产权、具备相关资质（保密资格审查认证证书、装备承制单位注册证书、装备科研生产许可证、武器装备质量体系认证证书等）、已和军工企业、军事单位开展业务合作、成效突出的企业。</p></br><p>7.区政府确定的其他重点企业。</p>'
        }
    },
    components:{
        Scroll,
    },
    mounted(){
        let form = {}
        form.content = encodeURI(this.text)
        addEntryQualification(form)
        getEntryQualification().then(res=>{
            console.log(res.data)
        })
    }
}
</script>

<style scoped>
.scroll{
    height:10rem;
    width:7.5rem;
    overflow: hidden;
    display:flex;
    justify-content: center;
}
.text-wrapper{
    width:6.92rem;
    margin-top:.2rem;
}
.text{
    font-size:.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(68,68,68,1);
    line-height:.34rem;
}
</style>