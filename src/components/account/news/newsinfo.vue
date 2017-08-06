<template>
    <div id="tmpl">
      <div id="title">
          <h4 v-text="info.title"></h4>
          <span>{{info.add_time|datefmt('YYYY-MM-DD')}}&nbsp;&nbsp;&nbsp;&nbsp;点击数:{{info.click}}</span>
      </div>
      <div id="content">
          <p v-html="info.content"></p>
      </div>
        <!--实现评论组件-->
        <comment :id="id"></comment>
    </div>


</template>
<script>
    import commint from '../../../kits/commint.js'
    import comment from '../slide/comment.vue'
    export default{
        components:{
          comment
        },
        data(){
            return{
                id:0,
                info:{}
            }
        },
        created(){
            this.id=this.$route.params.id;
            this.getinfo();
        },
        methods:{
            getinfo(){
                var url=commint.apidomain+'/api/getnew/'+this.id;
                this.$http.get(url).then(function (res) {
                    console.log(res);
                    var body=res.body;
                    this.info=body.message[0];
                })
            }
        }
    }
</script>

<style scoped>
    #content ,#title{
        padding:5px;
    }
    #title p{
        color: #ccc;
    }
    #title h4{
        color: #0094ff;
    }

</style>














