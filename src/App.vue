<!-- 以后项目的根组件 -->
<template>
	<div>
		<mt-header fixed title="传智播客.黑马程序员Vue商城系统"></mt-header>


		<router-view></router-view>


		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbar-with-chat">
				<span class="mui-icon mui-icon-email">

				</span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-contact">
					<span class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
	</div>
</template>

<script>
    document.querySelector("body").addEventListener("touchstart",function(event){
//code here
        event.preventDefault();
    },false)
// 按需导入
//	import {add} from './calc.js';

//	import { Toast } from 'mint-ui';

	// 负责导出 .vue这个组件对象(它本质上是一个Vue对象,所以Vue中该定义的元素都可以使用)
	// function add(x,y){console.log(x+y)}	
	// module.exports = {  //es5的导出对象的写法
	export default{  // es6的导出对象的写法
		data(){  //等价于 es5的 data:function(){
			return {

			}
		},
		methods:{


		},
		created(){

		}
	}
</script>

<style scoped>
/*当前页面的css样式写到这里，其中scoped表示这个里面写的css代码只是在当前组件页面上有效，不会去影响到其他组件页面*/

</style>