<template>
    <div id="tmpl">
        <!--1.0 实现的是图片详情和缩略图-->
        <div id="desc">
            <!--图片详情- 标题部分-->
            <div class="title">
                <h4>{{phtotinfo.title}}</h4>
                <p>
                  {{phtotinfo.add_time| datefmt('YYYY-MM-DD HH-mm-ss')}} {{phtotinfo.click}}次浏览
                </p>
                <p class="line"></p>
            </div>

            <!--缩略图-->
            <div class="mui-content">
                <ul class="mui-table-view mui-grid-view mui-grid-9">
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="(item,index) in list">

                            <img class="preview-img"   :src="item.src" height="100" @click="$preview.open(index, list)"
                            >

                    </li>


                </ul>
            </div>
         <p v-html="phtotinfo.content"></p>

        </div>

        <!--2.0。3 集成评论组件-->
        <div id="comment">
            <comment :id="id"></comment>
        </div>
    </div>
</template>
<script>
    import comment from '../slide/comment.vue'
    import common from '../../../kits/commint.js'
    export default{
        components:{
          comment
        },
         data(){
             return{
                id:0,
                phtotinfo:{},
                list:[] //负责存储

             }
         },
        created(){
             this.id=this.$route.params.id;
             this.getinfo();
            this.getImgs()
        },
        methods:{
            getinfo(){
                var url=common.apidomain+'/api/getimageinfo/'+this.id;
                this.$http.get(url).then(function (res) {
                this.phtotinfo=res.body.message[0]
                })
            },
            getImgs(){
                var url=common.apidomain+'/api/getthumimages/'+this.id;
                this.$http.get(url).then(function (res) {
                    res.body.message.forEach(function (item) {
                        var img=document.createElement('img');
                        img.src=item.src;
                        item.h=400;
                        item.w=400;
                    });
                    this.list=res.body.message;
                })
            }
        }
    }
</script>

<style scoped>
    #desc{
    padding:10px;
    }
    #desc  .title h4{
        color: #0094ff;
    }

    #desc .title p{
        color:rgba(0,0,0,0.4);
        margin-top: 10px;
    }

    #desc .title .line{
        width: 100%;
        height: 1px;
        border-bottom: 1px solid rgba(0,0,0,0.4);
    }

    .mui-content,.mui-content ul{
        background-color: #fff;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border-right:0px;
        border-bottom:0px;
    }
    .mui-grid-view.mui-grid-9{
        border-top:0px;
        border-left:0px;
    }
    .mui-content img{
        width:100px;
        height:100px;
    }
</style>














