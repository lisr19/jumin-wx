<template>
    <div class="list-wrapper">
        <v-cell-group class="list">
            <v-cell title="投诉建议" is-link title-class="item-title" :to="{name:'advice'}">
                <template slot="icon">
                    <img :src="require('../../../static/img/my_icon/suggest@2x.png')" class="item-img"/>
                </template>
            </v-cell>
            <v-cell title="联系我们" is-link title-class="item-title" @click='contact'>
                <template slot="icon">
                    <img :src="require('../../../static/img/my_icon/contact@2x.png')" class="item-img"/>
                </template>
            </v-cell>
            <v-cell title="软件版本" is-link value="v2.0.3" title-class="item-title" value-class="item-extra">
                <template slot="icon">
                    <img :src="require('../../../static/img/my_icon/version@2x.png')" class="item-img"/>
                </template>
            </v-cell>
            <v-cell title=" " value="退出登录"  @click="signOut" v-if="isLogin"></v-cell>
        </v-cell-group>
    </div>    
</template>

<script>
import { Cell, CellGroup } from 'vant';
export default {
    props:{
        isLogin:{
            type:Boolean,
            default:false
        }
    },
    components:{
        vCell:Cell,
        vCellGroup:CellGroup,
    },
    methods:{
        signOut(){
            this.$emit('signOut')
        },
        contact(){
            this.$emit('contact')
        }
    }
}
</script>

<style scoped>
.list-wrapper{
    width:7.5rem;
}

.item-title{
    font-size:.28rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);   
}
.item-extra{
    font-size:.28rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(153,153,153,1);
}
.item-img{
    width:.32rem;
    height:.32rem;
    margin-top:.04rem;
    margin-right:.2rem;
}

</style>
