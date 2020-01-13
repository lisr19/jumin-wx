<template>
    <div class="wrapper">
        <div class="img-wrapper">
            <img class="img" :src="require('../../../static/img/common_icon/blank@2x.png')" />
            <div class="text-wrapper">
                <p class="">暂无信息</p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.wrapper{
    height:13.36rem;
    width:7.5rem;
    background: rgba(247, 248, 250, 1);
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>