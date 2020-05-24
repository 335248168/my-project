<template>
  <div class="home">
    <HelloWorld></HelloWorld>
    <Carousel></Carousel>
    <ImageList></ImageList>
    <div></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Carousel from "@/components/Carousel.vue"
import ImageList from "@/components/ImageList.vue"

export default {
  name: "Home",
  components: {
    HelloWorld,
    Carousel,
    ImageList
  }
};
</script>
