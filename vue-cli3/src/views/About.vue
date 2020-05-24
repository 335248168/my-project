<template>
  <div class="about">
    <Children @pass='getPhone'></Children>
    <p>你的联系方式：{{phoneNum}}</p>

  </div>
</template>
<script>
import Children from '@/components/Children.vue'
export default {
  name:'connect',
  components:{
    Children
  },
  data(){
    return {
      phoneNum:''
    }
  },
  methods:{
    getPhone(data){
      this.phoneNum=data
    }
  }
}
</script>
