<template>
  <div>
    <my-head></my-head>列表
    <ul>
      <li v-for="(item,index) in list" :key="index">
        &gt;{{item.title}}
      </li>
    </ul>
  </div>
</template>
<script>
import myHead from "../head/head";
export default {
  data() {
    return {
      list: []
    };
  },
  components: {
    "my-head": myHead
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.showLoading = true;
      this.$axios({
        url: this.API + "Vote/voteList?rt=h5",
        params: { p: this.p }
      }).then(res => {
        this.list = res.data.info.list;
      });
    }
  }
};
</script>
<style scoped>
</style>