<template>
  <div id="home-index">
    <header>
      <nav class="header-nav">
        <div class="select-box">
          <el-input placeholder="搜索内容" v-model="selectValue" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <div>主页</div>
        <div>标签</div>
      </nav>
    </header>
    <article>

    </article>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectValue: ''
    }
  }
}
</script>

<style lang="scss" scoped>
#home-index{
  background-image: url(http://oxnqkx7p0.bkt.clouddn.com/img-bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow-y: scroll;
  header{
    width: 100%;
    height: 600px;
    .header-nav{
      width: 100%;
      height: 100px;
      background: rgba($color: #fff, $alpha: .3);
      display: flex;
      justify-content: flex-end;
      padding-right: 100px;
      >div{
        padding: 0 30px;
        height: 100px;
        line-height: 100px;
        font-size: 24px;

      }
      .select-box{
        width: 300px;
        height: 100px;
      }
      
    }
  }
  article{
    width: 100%;
    height: 1000px;
    background: #fff;
  }
}
</style>

