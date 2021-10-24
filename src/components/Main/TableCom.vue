<template>
<div id="table">
  <el-table
    :data="article"
    style="width: 1400px"
    height="520px"
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
      width="150">
    <template slot-scope="scope">
        <el-button
            @click="deleteRow(scope.$index, article)"
            type="danger"
            size="mini">
            删除
        </el-button>

        <!-- 编辑按钮 -->
        <el-button @click="updateRow(scope.$index, article)" type="primary" size="mini"> 编辑 </el-button>
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
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
    </el-pagination>
  </div>
</div>
</template>

<style lang="less">
#table{
    height: 100%;
    background-color: #FFF;
}

#pagination{
    height: 10%;
    display: flex;
    align-items: center;
}
.el-table{
    height: 100%;
}
</style>

<script>
import axios from 'axios'
import UpdateArticle from '../UpdateModle/UpdateArticle.vue'
  export default {
    mounted() {
        this.getarticle()
    },
    components:{
      UpdateArticle
    },
    methods: {
      // 删除按钮方法
      deleteRow(index, rows) {
        console.log(this.article[index].article_id);
        axios.get(
          'http://localhost:5000/delete/article/'+this.article[index].article_id
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
      // 分页
        handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        console.log();
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      getarticle(){
        axios.get(
            'http://127.0.0.1:5000/api/'
        ).then(res=>{
            this.article=res.data
        }) 
      },

      

    },
    data() {
      return {
        article:''
        // {
        //   label:'',
        //   title:'',
        //   publish_time:'',
        //   viewing_counts:'',
        //   comment_count:'',
        //   img_url:'',
        //   author:'',
        //   article_id:''
        // }
        ,
        PropArticleInfo:'',
        propArticle:'hhh',
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,

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

