<template>
  <div class="tagspage">
    <el-card shadow="hover" class="card">
      <div class="card-tags">
        <span class="card-tag" v-for="item in tags" :key="item">{{item.tag}}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
import Api from "../api/index.js"
export default {
  data () {
    return {
      tags: []
    }
  },
  created () {
    Api.gettags(null, (data) => {
      this.tags = data.data.data;
    })
  }
}
</script>

<style lang="scss" scoped>
.tagspage{
  .card{
    width: 1200px;
    margin: 0 auto;
    margin-top: 200px;
    padding: 30px;
  }
  .card-tags{
    height: 40px;
    margin-bottom: 10px;
    .card-tag{
      margin-left: 30px;
      padding: 10px 20px;
      background: #58a732;
      color: #fff;
      text-align: center;
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      border-radius: 20px;
      cursor: pointer;
      &:hover{
        opacity: 0.7;
      }
    }
  }
}
</style>

