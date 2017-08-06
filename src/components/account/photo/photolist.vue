<template>
    <div id="tmpl">
        <div id="cate">
            <ul v-bind="{style:'width:'+ulwidth+'px'}">
                <li @click="getimgs(0)">全部</li>
                <li v-for="item in cates" @click="getimgs(item.id)">{{item.title}}</li>

            </ul>
        </div>

        <div id="imglist">
            <ul>

                    <li v-for="item in list">
                        <router-link v-bind="{to:'/photo/photoinfo/'+item.id}">
                             <img v-lazy="item.img_url">
                             <div id="desc">
                                 <h5 v-text="item.title"></h5>
                                 <p v-text="item.zhaiyao"></p>
                             </div>
                        </router-link>
                    </li>

            </ul>
        </div>
    </div>
</template>
<script>
    import commint from '../../../kits/commint.js'
    export default{
          data(){
            return{
                ulwidth:'320',
                cates:[],   //列表数据的数组
                list:[]     //图片数据的数组
            }
          },
        created(){
              this.getcates();
              var all=0
              this.getimgs(all);
        },
        methods:{
             getcates(){
                 var url=commint.apidomain+'/api/getimgcategory';
                 this.$http.get(url).then(function (res) {
                     this.cates=res.body.message;
                     var w=62;
                     var cont=res.body.message.length+1;
                     this.ulwidth=w*cont;

                 })
             },
            getimgs(cateid){
                 cateid=cateid||0;
                var url=commint.apidomain+'/api/getimages/'+cateid;
                this.$http.get(url).then(function (res) {
                     this.list=res.body.message;
                })

            }
        }

    }
</script>

<style scoped>
    #cate{
        width:100%;
        max-width: 100%;
        overflow-x: auto;
    }
    #cate ul{
        margin: 0;
        padding-left:10px;
        
    }
    #cate li{
        cursor: pointer;
        list-style: none;
        display: inline-block;
        color: #0094ff;
        font-size: 14px;
        padding-left: 6px;
    }
    #imglist{

    }
    #imglist ul{
        padding-left:0;

    }
    #imglist li{
        list-style: none;
        position: relative;
    }
    #imglist img{
        width:100%;
        height:300px;
    }
    #desc{
        width:100%;
        background-color: rgba(0,0,0,0.2);
        position:absolute;
        bottom:3px;
        left:0;
    }
    #desc h5{
        color: #fff;
        font-weight:bold;
    }
    #desc p{
        color: #fff;
    }
    image[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
</style>














