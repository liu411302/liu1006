<template>
    <div id="tmpl">
        <div id="postcomment">
            <h3>提交评论</h3>
            <p class="p"></p>
            <textarea v-model="postcontent">
          </textarea>
            <mt-button type="primary" size="large" @click="postcomment">发表</mt-button>
        </div>
        <div id="list">
            <h3>评论列表</h3>
            <p class="p"></p>
            <div v-for="(item,index) in list">
                <div class="title">
                    <span>第{{index + 1}}楼:</span>
                    <span>用户：{{item.user_name}}</span>
                    <span>发表时间：{{item.add_time | datefmt('YYYY-MM-DD HH:mm:ss')}}</span>
                </div>
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell" v-text="item.content"></li>
                </ul>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
    </div>
</template>
<script>
    import common from '../../../kits/commint.js';
    import {Toast} from 'mint-ui';
    export default{
        data(){
            return {
                pageindex: 1,
                postcontent: '',
                list: [],
            }
        },
        props: ['id'],
        created(){
            this.getcommentlist(this.pageindex)
        },
        methods: {
            // 1.添加数据
            postcomment(){
                //判断用户是否输入内容
                if (this.postcontent.trim().length <= 0) {
                    Toast('评论的内容不能为空');
                    return;
                }
                var url = common.apidomain + '/api/postcomment/' + this.id;
                this.$http.post(url, {content: this.postcontent}, {emulateJSON: true})
                    .then(function (res) {
                        console.log(res);
                        Toast(res.body.message);

                        //最新的评论展示到列表的最顶部
                        this.list = [{
                            'user_name': '匿名用户',
                            'add_time': new Date(),
                            'content': this.postcontent
                        }].concat(this.list);
                        //将文本框中的评论的内容清空
                        this.postcontent = '';
                    })
            },
            // 2.获取当前数据的评论数据
            getcommentlist(pageindex){
                pageindex = pageindex || 1;
//                //确认评论数据url
                var url = common.apidomain + '/api/getcomments/' + this.id + '?pageindex=' + pageindex;
                this.$http.get(url).then(function (res) {
                    this.list = this.list.concat(res.body.message);
                })
            },
            //3.加载更多数据
            getmore(){
                this.pageindex++;
                this.getcommentlist(this.pageindex);
            }
        }
    }
</script>
<style scoped>
    #postcomment {
        padding: 5px;
    }

    .p {
        height: 1px;
        width: 100%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    }

    /*2.0 评论列表的样式*/
    #list {
        padding: 5px;
    }

    .title {
        padding: 5px;
        color: #6d6d72;
        font-size: 15px;
        background-color: rgba(0, 0, 0, 0.1);
    }
</style>














