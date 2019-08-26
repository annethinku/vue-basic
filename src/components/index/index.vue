<template>
  <div>
    <my-head></my-head>
    <p>
      <router-link to="/my">我的</router-link>
    </p>
    <p>
      <router-link to="/list">列表</router-link>
    </p>
    <div>-------------------------------------</div>
    <div>-------------------------------------</div>
    <div>
      <ul>
        <li>姓名：{{userinfo?userinfo.name:''}}</li>
        <li>年龄：{{userinfo?userinfo.age:''}}</li>
        <li>性别：{{userinfo?userinfo.sex:''}}</li>
        <li>
          <button @click="setting">设置</button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import myHead from "../head/head";
export default {
  data() {
    return {
      userinfo: {}
    };
  },
  components: {
    "my-head": myHead
  },
  mounted() {
    this.userinfo = this.$store.state.SET_DATA?JSON.parse(this.$store.state.SET_DATA):'';
      this.$api.article.articleList({        
            p: 1      
        }).then(res=> {
            // 执行某些操作  
            console.log('封装的api：'); 
            console.log(res)   
        })    
  },
  methods: {
    setting() {
      let obj = {
        name: "zengxiaorong",
        age: 24,
        sex: "女"
      };
      this.$store.commit("setData", JSON.stringify(obj));
      localStorage.setItem("userinfo", JSON.stringify(obj));
      this.userinfo = JSON.parse(this.$store.state.SET_DATA);
    }
  }
};
</script>
<style scoped>
</style>