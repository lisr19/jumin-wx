import {mapMutations,mapGetters} from 'vuex'

export const mainPageMixin = {
    data(){
        return {
            pageType:1,
        }
    },
    activated(){
        if(this.showFooter == true){
            return 
        }
        this.setFooterState(this.pageType)
    },
    methods:{
        ...mapMutations({
            setFooterState:'SET_FOOTER_STATE'
        })
    },
    computed:{
        ...mapGetters(['showFooter'])
    }
}

export const otherPageMixin = {
    data(){
        return {
            pageType:2,
        }
    },
    activated(){
        if(this.showFooter == false){
            return 
        }
        this.setFooterState(this.pageType)
    },
    methods:{
        ...mapMutations({
            setFooterState:'SET_FOOTER_STATE'
        })
    },
    computed:{
        ...mapGetters(['showFooter'])
    }
}