<template>
<div id="table">
  <el-table
    :data="paginationArticleInfo.articleInfo"
    :header-cell-style="{backgroundColor:'transparent',color:'#fff',fontSize:'15px',textAlign:'center'}"
    :header-row-style="{backgroundColor:'transparent',color:'#fff',fontSize:'15px',textAlign:'center'}"
    :cell-style="{color: '#fff',backgroundColor:'transparent',fontSize:'13px',textAlign:'center'}"
    :row-style="{color: '#fff',backgroundColor:'transparent',fontSize:'13px',textAlign:'center'}"
    height="520px"
    :fit='false'
    :highlight-current-row='true'
    max-height="520px">
    <el-table-column
      
      fixed
      prop="label"
      label="标签"
      width="150">
    </el-table-column>
    <el-table-column
      
      prop="title"
      label="标题"
      width="120">
    </el-table-column>
    <el-table-column
      prop="publish_time"
      label="发布日期"
      width="120">
    </el-table-column>
    <el-table-column
      prop="viewing_counts"
      label="观看次数"
      width="120">
    </el-table-column>
    <el-table-column
      prop="comment_count"
      label="评论次数"
      width="120">
    </el-table-column>
    <el-table-column
      prop="img_url"
      label="图片地址"
      width="120">
    </el-table-column>
    <el-table-column
      prop="author"
      label="作者"
      width="120">
    </el-table-column>

    <el-table-column
      prop="article_id"
      label="article_id"
      width="120">
    </el-table-column>

    <el-table-column
      fixed="right"
      label="操作"
      width="300">
    <template slot-scope="scope">
        <el-button
            @click="deleteRow(scope.$index, paginationArticleInfo.articleInfo)"
            type="danger"
            size="mini">
            删除
        </el-button>

        <!-- 编辑按钮 -->
        <el-button @click="updateRow(scope.$index, paginationArticleInfo.articleInfo)" type="primary" size="mini"> 编辑 </el-button>
    </template>
    </el-table-column>
  </el-table>

  <!-- 编辑数据弹出会话框 -->
  <el-dialog title="编辑文章" :visible.sync="dialogFormVisibles" custom-class='dialog' :append-to-body='true' v-if="dialogFormVisibles" center='true' fullscreen='true'>
    <UpdateArticle :message='PropArticleInfo'></UpdateArticle>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisibles = false">取消</el-button>
      <el-button type="primary" @click="dialogFormVisibles = false">确 定</el-button>
    </div>
  </el-dialog>

  <div id="pagination">
    <Pagination></Pagination>
  </div>
</div>
</template>

<style lang="less">
#table{
    height: 100%;
}

#pagination{
    height: 10%;
    display: flex;
    align-items: center;
}
.el-table-column{
  
}
.el-table{
    height: 100%;
    background:none !important;
}
.el-table__body tr:hover>td {
		background-color: #c2c2c21e !important;
}
</style>

<script>
import axios from 'axios'
import UpdateArticle from './UpdateModle/UpdateArticle.vue'
import Pagination from './pagination.vue'
import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['paginationArticleInfo'])
    },
    mounted() {
        this.getpaginationArticleInfo()
    },
    components:{
      UpdateArticle,
      Pagination,
    },
    methods: {
      // 删除按钮方法
      deleteRow(index, rows) {
        console.log(rows[index].article_id);
        axios.get(
          '/delete/article/'+rows[index].article_id
        ).then(res=>{
          console.log(res);
          alert(res.data)
        })
        console.log(rows);
        rows.splice(index, 1);
      },
      // 编辑按钮方法
       updateRow(index, rows) {
        console.log(index);
        console.log(rows[index].article_id);
        this.PropArticleInfo=rows[index]
        // this.$store.state.articleInfo=this.article[index]
        this.dialogFormVisibles = true
      },
      // 渲染分页文章
      getpaginationArticleInfo(){
          console.log(this.paginationArticleInfo.articleInfo+'123');
          this.article=this.paginationArticleInfo.articleInfo     
      }
    },
    data() {
      return {
        article:'',
        PropArticleInfo:'',
        propArticle:'hhh',
        // 当前页数
        currentPage: 0,
        //总条目数
        total:0,

        pagesizes:'',

        // 编辑文章
        dialogTableVisible: false,
        dialogFormVisibles: false,
        input5:'',
        select:'',
        formLabelWidth: '120px'
      }

      
    }
  }
</script>

