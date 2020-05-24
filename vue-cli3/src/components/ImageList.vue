<template>
  <div id="col">
    <el-tabs type="border-card">
      <el-tab-pane label="热门电影">
        <el-row :gutter="20">
          <el-col :span="3" :offset="2">
            <img src="../assets/movie0.jpg" alt />
            <span>
              <p>绅士们</p>
            </span>
          </el-col>
          <el-col :span="3" :offset="1">
            <img src="../assets/movie1.jpg" alt />
            <span>
              <p>绅士们</p>
            </span>
          </el-col>
          <el-col :span="3" :offset="1">
            <img src="../assets/movie2.jpg" alt />
            <span>
              <p>绅士们</p>
            </span>
          </el-col>
          <el-col :span="3" :offset="1">
            <img src="../assets/movie3.jpg" alt />
            <span>
              <p>绅士们</p>
            </span>
          </el-col>
          <el-col :span="3" :offset="1">
            <img src="../assets/movie4.jpg" alt />
            <span>
              <p>绅士们</p>
            </span>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="3" :offset="2">
            <img src="../assets/movie5.jpg" alt />
            <span>
              <p>绅士们</p>
            </span>
          </el-col>
          <el-col :span="3" :offset="1">
            <img src="../assets/movie6.jpg" alt />
            <span>
              <p>绅士们</p>
            </span>
          </el-col>
          <el-col :span="3" :offset="1">
            <img src="../assets/movie7.jpg" alt />
            <span>
              <p>绅士们</p>
            </span>
          </el-col>
          <el-col :span="3" :offset="1">
            <img src="../assets/movie8.jpg" alt />
            <span>
              <p>绅士们</p>
            </span>
          </el-col>
          <el-col :span="3" :offset="1">
            <img src="../assets/movie9.jpg" alt />
            <span>
              <p>绅士们</p>
            </span>
          </el-col>
        </el-row>
      </el-tab-pane>

      <el-tab-pane label="最新上映" ref="news"></el-tab-pane>

        <hr>
        <p class="bottomtext">@copyright天羽集团</p>

    </el-tabs>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ImageList",
  data() {
    return {
      movies: []
    };
  },
  methods: {}
  // created(){
  //     const that=this
  //     let _movies=that.movies
  //     axios({
  //         method:'get',
  //         url:'https://douban.uieee.com/v2/movie/in_theaters'
  //     }).then((res)=>{
  //         console.log(res)
  //       //   let row=document.createElement('el-row')
  //       //   that.$refs.news.appendChild(row)
  //       //   row.style.backgroundColor='red'

  //     })
  // }
};
</script>

<style>
.el-row {
  margin-bottom: 20px;
  /* &:last-child{
      margin-bottom: 0;
    } */
}
.el-col p {
  text-align: center;
}
.el-col {
  border-radius: 4px;
}
.el-col img {
  margin: auto;
  width: 100%;
  height: 405px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.bottomtext {
  text-align: center;
  color: #ccc;
}
</style>