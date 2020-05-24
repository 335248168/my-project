<template>
  <div>
    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="(item,index) in banners" :key="index">
        <!-- <h3 class="medium">{{ item }}</h3> -->
        <img :src="item.url" class="image" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: "Carousel",
  data() {
    return {
      banners: [
        {url:require("../assets/carousel0.jpg") },
        {url:require("../assets/carousel1.jpg") },
        {url:require("../assets/carousel2.jpg") },
        {url:require("../assets/carousel3.jpg") },
      ]
    };
  }
};
</script>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>