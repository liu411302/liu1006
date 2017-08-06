<template>
    <div id="tmpl">
     <div id="desc">
         <h4>{{desc.title}}</h4>
         <p class="line"></p>
         <div class="desc" v-html="desc.content">

         </div>
     </div>
    </div>
</template>
<script>
    import common from '../../../kits/commint.js'
    export default{
        data(){
            return{
                id:0,
                desc:{}
            }
        },
        created(){
            this.id=this.$route.params.id;
           this.getdesc();
        },
        methods:{
            getdesc(){
                var url=common.apidomain+'/api/goods/getdesc/'+this.id;
                this.$http.get(url).then(function (res) {
                    this.desc=res.body.message[0];
                })
            }
        }
    }
</script>

<style scoped>
    #desc{
        padding:10px;
        color: #0094ff;
    }
    .line{
        width:100%;
        height:1px;
        border:2px solid rgba(0,0,0,0.4);
    }
    .desc{
        width:100%;
        overflow-x: hidden;
    }
    .desc img{
        width:100%;
    }
</style>














