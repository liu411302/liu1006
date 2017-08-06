<template>
    <div id="tmpl">
        <!--1 实现轮播图-->
        <div class="silde">
             <slider :imgs="imgs"></slider>
        </div>
        <!--实现商品购买区-->
        <div id="buy">
            <h4 v-text="buy.title"></h4>
            <p class="line"></p>
            <ul>
                <li>市场价<s>￥{{buy.market_price}}</s>  销售价 <span>￥{{buy.sell_price}}</span></li>
                <li>
                    购买数量：<inputnumber class="inputnumber"></inputnumber>
                </li>
                <li>
                   <mt-button type="primary" size="small">立即购买</mt-button>
                   <mt-button type="danger" size="small">加入购物车</mt-button>
                </li>
            </ul>
        </div>
        <div id="params">
              <h6>商品参数</h6>
              <p class="line"></p>
            <ul>
                <li>商品货号:{{buy.goods_no}}</li>
                <li>库存情况:{{buy.stock_quantity}}</li>
                <li>上架时间:{{buy.add_time|datefmt('YYYY-MM-DD')}}</li>
            </ul>
        </div>
        <div id="other">
            <router-link v-bind="{to:'/goods/goodsdesc/'+id}">
                  <mt-button  type="primary" size="large">商品详情</mt-button>
            </router-link>

            <router-link v-bind="{to:'/goods/goodscommon/'+id}">
            <mt-button class="btn" type="danger" size="large">商品评论</mt-button>
            </router-link>
        </div>
    </div>
</template>
<script>
    import slider from '../slide/slide.vue'
    import common from '../../../kits/commint.js'
    import inputnumber from '../slide/inputnumber.vue'

    export default{
        components:{
          slider,
            inputnumber

        },
       data(){
           return{
               id:0,
               imgs:[],
               buy:{}
           }
       },
        created(){
           this.id=this.$route.params.id;
            this.getImgs();
            this.getbuy();
        },
        methods:{
         getImgs(){
             var url=common.apidomain+'/api/getthumimages/'+this.id;
             this.$http.get(url).then(function (res) {
                 this.imgs=res.body.message;
             })
         },
          getbuy(){
              var url=common.apidomain+'/api/goods/getinfo/'+this.id;
              this.$http.get(url).then(function (res) {
                  this.buy=res.body.message[0];
              })
          }
        }
    }
</script>

<style scoped>
    .silde{
        border:1px solid rgba(0,0,0,0.4);
        border-radius: 5px;
        margin:5px;
    }
    #buy,#params,#other{
        margin:5px;
        padding:5px;
        border:1px solid rgba(0,0,0,0.4);
        border-radius: 5px;
        }
    #buy li {
        list-style: none;
        padding-left:5px ;
        margin-bottom:12px;
        clear: both;
        position: relative;
    }
   .line{
        width:100%;
        height:1px;
        border:1px solid rgba(0,0,0,0.2);
    }
    #buy h4 ,#params h6{
        color: #0094ff;
        margin-left:1px;
        padding:5px;
    }
    #buy ul,#params ul{
        padding-left:0;
    }
    #buy span{
             color: red;
    }
    #params li{
        list-style: none;
        padding-left:5px ;
        margin-bottom:12px;
    }
    #other .btn{

        margin-top: 20px;
    }
    .inputnumber{
        position: absolute;
        left:90px;
        bottom:0;
    }
</style>














