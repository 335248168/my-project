<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <router-link to="/">豆瓣影城</router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">电影列表</template>
        <el-menu-item index="2-1">中国电影</el-menu-item>
        <el-menu-item index="2-2">欧洲电影</el-menu-item>
        <el-menu-item index="2-3">日韩电影</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">好莱坞</template>
          <el-menu-item index="2-4-1">变形金刚</el-menu-item>
          <el-menu-item index="2-4-2">复仇者联盟</el-menu-item>
          <el-menu-item index="2-4-3">速度与激情之保罗沃克复活</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>关于</el-menu-item>
      <el-menu-item index="4">
        <router-link to="/about">联系我们</router-link>
        <router-view></router-view>
      </el-menu-item>
    </el-menu>
    <input type="text" v-model="phoneNum" @change="emittoparent" />
  </div>
</template>

<script>
export default {
  name: "Children",
  data() {
    return {
      phoneNum: "",
      activeIndex: "4",
      activeIndex2: "4"
    };
  },
  methods: {
    emittoparent() {
      this.$emit("pass", this.phoneNum);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>