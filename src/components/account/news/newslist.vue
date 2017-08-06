<template>
    <div id="tmpl">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in list">
                <router-link v-bind="{to:'newsinfo/'+item.id}">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class="mui-ellipsis">{{item.zhaiyao}}</p>
                        <div class="df">
                            <span>发表时间:{{item.add_time|datefmt('YYYY-MM-DD HH-mm-ss')}}</span>
                            <span class="click">点击数:{{item.click}}</span>
                        </div>
                    </div>
                </router-link>
            </li>

        </ul>

    </div>
</template>
<script>
//    Vue.filter('datefmt',function(input){
//        // 过滤器的逻辑：将input的值格式化成 yyyy-MM-dd 字符串输出
//        var res= '';
//        var year = input.getFullYear();
//        var month = input.getMonth() + 1;
//        var day = input.getDate();
//        res = year +'-' + month +'-'+ day;
//        return res;
//    });
//

import commint from '../../../kits/commint.js'
    export default{
         data(){
             return{
                 list:[]
             }
         },
        created(){
         this.getlist()
        },
        methods:{
//            获取api中的新闻资讯
            getlist(){
                var url=commint.apidomain+'/api/getnewslist';
                this.$http.get(url).then(function (response) {
                    var data=response.body;
                    console.log(data);
                    if(data.status != 0){
                        alert('cuole') ;
                        return;
                    }
                    this.list=data.message;
                })
            }
        }
    }
</script>

<style scoped>
    .mui-table-view img{
        width:80px;
        height:80px;

    }
    .mui-table-view .mui-media-object{
        max-width: 80px;
        line-height: 80px;
    }
    .df{
        margin-top:1em;
    }
    .df span{
        font-size: 14px;
        color: #0094ff;
    }
    .df .click{
        margin-left:15px;
    }
</style>


