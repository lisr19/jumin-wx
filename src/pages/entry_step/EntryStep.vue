<template>
    <div>
        <scroll class="scroll">
            <div>
                <img class="img" :src="img" />
            </div>
        </scroll>
    </div>
</template>

<script>
import Scroll from '../../base/Scroll'
import {getEntryGuide} from '../../api/settled_company'

export default {
    data(){
        return {
            img:''
        }
    },
    components:{
        Scroll,
    },
    mounted(){
        getEntryGuide().then(res=>{
            console.log(res.data)
            this.img = res.data.list[1].imgUrl
        })
    },
}
</script>

<style scoped>
.scroll{
    height:10rem;
    width:7.5rem;
    overflow: hidden;
}
.img{
    width:8rem;
}
</style>