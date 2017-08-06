<template>
    <div id="tmpl">
        <mt-swipe :auto="2000">
            <!--<mt-swipe-item>1</mt-swipe-item>-->
            <!--<mt-swipe-item>2</mt-swipe-item>-->
            <mt-swipe-item v-for="item in imgs">
                <img :src="item.img">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
    export default{
     props:['imgs']
    }
</script>

<style scoped>
    .mint-swipe{
        height:300px;
    }
    .mint-swipe-item{
        width:100%;
        height: 300px;
    }
    img{
        width:100%;
        height:300px;
    }
</style>














