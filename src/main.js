// 1.0 导入vue核心包
import Vue from 'vue';

// 2.0 导入App.vue的vue对象
import App from './App.vue';

// 3.0 将vue-router集成到这个项目中来
import vueRouter from 'vue-router';
// 3.0.1 将vueRouter对象绑定到Vue对象上
Vue.use(vueRouter);

// 3.0.2 导入路由规则对应的组件对象
import home from './components/account/Home.vue';
import shopcar from './components/account/shopcar/car.vue';
import newslist from './components/account/news/newslist.vue';
import newsinfo from './components/account/news/newsinfo.vue';
import photolist from './components/account/photo/photolist.vue';
import photoinfo from './components/account/photo/photoinfo.vue';
import goodslist from './components/account/good/goodslist.vue';
import goodsinfo from './components/account/good/goodsinfo.vue';
import goodsdesc from './components/account/good/goodsdesc.vue';
import goodscommon from './components/account/good/goodscommon.vue';

// 3.0.2 定义路由规则
var router1 = new vueRouter({
	linkActiveClass:'mui-active', //改变底部路由激活时的状态
	routes:[
		{path:'/',redirect:'/home'},
		{path:'/home',component:home},  //首页
		{path:'/shopcar',component:shopcar},  //购物车
		{path:'/news/newslist',component:newslist},//新闻列表
		{path:'/news/newsinfo/:id',component:newsinfo},//新闻列表详情页
		{path:'/photo/photolist',component:photolist}, //新闻列表详情页
		{path:'/photo/photoinfo/:id',component:photoinfo} ,//新闻列表详情页
		{path:'/goods/goodslist/',component:goodslist}, //新闻列表详情页
		{path:'/goods/goodsinfo/:id',component:goodsinfo}, //新闻列表详情页
		{path:'/goods/goodsdesc/:id',component:goodsdesc}, //新闻列表详情页
		{path:'/goods/goodscommon/:id',component:goodscommon} //新闻列表详情页
	]
	});


// 4.0 注册mint-ui
// 导入mint-ui的css文件
import 'mint-ui/lib/style.min.css';
// 导入mint-ui组件对象
import mintui from 'mint-ui';
// 在Vue中全局使用mintui
Vue.use(mintui);

// 5.0 注册mui的css样式
import '../statics/mui/css/mui.css';

//6.0 注册全局css样式
import '../statics/css/site.css';

//7.0绑定vue-resource
import vueResource from 'vue-resource';
Vue.use(vueResource);
//8.0定义全局过滤器
import moment from 'moment'
 Vue.filter('datefmt',function (input,fmtstring) {
	// return  '2020-1-1' ;
	 return moment(input).format(fmtstring)
 });
// 9.0 使用图片预览组件
import VuePreview from 'vue-preview';
Vue.use(VuePreview);

// 5.0 利用Vue对象进行解析渲染
new Vue({
	el:'#app',
	// 使用路由对象实例
	router:router1,
	// render:function(create){create(App)} //es5的写法
	render:c=>c(App)  // es6的函数写法 =>：goes to
});