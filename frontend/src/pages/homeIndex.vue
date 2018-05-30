<template>
  <div id="home-index">
    <header>
      <nav class="header-nav">
        <div class="select-box">
          <el-input placeholder="搜索内容" v-model="selectValue" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <div class="nav-btn">主页</div>
        <div class="nav-btn">标签</div>
      </nav>
      {{curName}}
    </header>
    <article>
      <div class="main">
        <el-card class="box-card" v-for="(item, index) in dataList" :key="index">
          <div class="card-top">
            <img :src="item.image" :alt="item.title">
            <div class="card-left">
              <p class="card-title">{{item.title}}</p>
              <div class="card-tags">
                <el-tag type="info" v-for="item in item.tags" :key="item">{{item}}</el-tag>
              </div>
            </div>
          </div>
          <div class="card-bottom">
            {{item.description}}
          </div>
        </el-card>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectValue: "",
      curName: "主页",
      dataList: [
        {
          image: "https://www.google.co.jp/search?q=%E5%9B%BE%E7%89%87&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiIioPl263bAhXEWrwKHQeDBeIQ_AUICigB&biw=1920&bih=938#",
          title: "第一篇文章",
          description: "这是第一个关于文章的描述，我也不知道写什么好。些什么好，些什么好，些什么好，些什么好，些什么好，些什么好，些什么好。",
          tags: ['学习', '技术', '生活', '记录']
        },
        {
          image: "https://www.google.co.jp/search?q=%E5%9B%BE%E7%89%87&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiIioPl263bAhXEWrwKHQeDBeIQ_AUICigB&biw=1920&bih=938#",
          title: "第一篇文章",
          description: "这是第一个关于文章的描述，我也不知道写什么好。些什么好，些什么好，些什么好，些什么好，些什么好，些什么好，些什么好。这是第一个关于文章的描述，我也不知道写什么好。些什么好，些什么好，些什么好，些什么好，些什么好，些什么好，些什么好。这是第一个关于文章的描述，我也不知道写什么好。些什么好，些什么好，些什么好，些什么好，些什么好，些什么好，些什么好。",
          tags: ['学习', '技术', '生活', '记录']
        },
      ]
    };
  }
};
</script>

<style>
.input-with-select input {
  background: transparent;
  color: #3a8ee6;
}
.input-with-select button:hover {
  opacity: 0.5;
}
.input-with-select ::-moz-placeholder {
  color: #fff;
}
.input-with-select ::-webkit-input-placeholder {
  color: #fff;
}
.input-with-select :-ms-input-placeholder {
  color: #fff;
}
</style>

<style lang="scss" scoped>
#home-index {
  background-image: url(http://oxnqkx7p0.bkt.clouddn.com/cassie-boca-293379-unsplash.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow-y: scroll;
  header {
    width: 100%;
    height: 600px;
    line-height: 400px;
    text-align: center;
    font-size: 60px;
    color: #fff;
    .header-nav {
      width: 100%;
      height: 100px;
      line-height: 100%;
      background: rgba($color: #fff, $alpha: 0.3);
      display: flex;
      justify-content: flex-end;
      padding-right: 100px;
      .select-box {
        height: 100px;
        line-height: 100px;
        font-size: 20px;
        color: #fff;
        padding: 0 30px;
      }
      .nav-btn {
        padding: 0 30px;
        height: 100px;
        line-height: 100px;
        font-size: 20px;
        color: #fff;
        cursor: pointer;
        position: relative;
        &::after {
          position: absolute;
          bottom: 30px;
          left: 0;
          z-index: -1;
          width: 0;
          height: 3px;
          background-color: #80c8f8;
          content: "";
          transition: all 0.3s ease-in-out;
        }
      }
      .nav-btn:hover {
        color: #3a8ee6;
        &::after {
          width: 100%;
        }
      }
      .select-box {
        width: 300px;
        height: 100px;
      }
    }
  }
  article {
    width: 100%;
    background: #fff;
    .main{
      width: 1200px;
      margin: 0 auto;
      .box-card{
        margin-top: 30px;
        border-radius: 30px;
        height: 200px;
        .card-top{
          height: 90px;
          img{
            width: 90px;
            height: 90px;
            display: block;
            float: left;
          }
          .card-left{
            margin-left: 20px;
            float: left;
          }
        }
      }
    }
  }
}
</style>

