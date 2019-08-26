<template>
  <div>
    <my-head></my-head>个人中心
     <ul>
         <li>{{userinfo?userinfo.name:''}}</li>
         <li>{{userinfo?userinfo.age:''}}</li>
         <li>{{userinfo?userinfo.sex:''}}</li>
     </ul>
  </div>
</template>
<script>
import myHead from "../head/head";
export default {
  data() {
    return {
        userinfo:{}
    };
  },
  components: {
    "my-head": myHead
  },
  mounted(){
    this.userinfo=JSON.parse(this.$store.state.SET_DATA);
  }
};
</script>
<style scoped>
</style>