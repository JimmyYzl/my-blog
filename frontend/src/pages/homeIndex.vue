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
      <ul class="main">
        <li class="box-card" v-for="(item, index) in dataList" :key="index">
          <div class="card-top">
            <div class="card-left">
              <h2 class="card-title">{{item.title}}</h2>
              <p class="card-des">
                {{item.description}}
              </p>
              <div class="card-tags">
                <span class="card-tag" v-for="item in item.tags" :key="item">{{item}}</span>
              </div>
            </div>
            <div class="card-right" :style="{backgroundImage: 'url('+item.image+')', backgroundSize: 'cover'}"></div>
          </div>
          <div class="card-bottom">
            {{item.date}}
            <span class="goPage">查看更多>></span>
          </div>
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  data() {
    return {
      selectValue: "",
      curName: "主页",
      oldList: [
        {
          image: "http://oxnqkx7p0.bkt.clouddn.com/sky-img.jpg",
          title: "第一篇文章",
          description: "这是第一个关于文章的描述，我也不知道写什么好。些什么好，些什么好，些什么好，些什么好，些什么好，些什么好，些什么好。",
          tags: ['学习', '技术', '生活', '记录'],
          date: 1527737350037
        },
        {
          image: "http://oxnqkx7p0.bkt.clouddn.com/IMG_20170603_095735.jpg",
          title: "第一篇文章",
          description: "这是第一个关于文章的描述，我也不知道写什么好。些什么好，些什么好，些什么好，些什么好，些什么好，些什么好，些什么好。这是第一个关于文章的描述，我也不知道写什么好。些什么好，些什么好，些什么好，些什么好，些什么好，些什么好，些什么好。这是第一个关于文章的描述，我也不知道写什么好。些什么好，些什么好，些什么好，些什么好，些什么好，些什么好，些什么好。",
          tags: ['学习', '技术', '美的鉴赏和凭借', '记录'],
          date: 1527737340000
        },
      ]
    };
  },

  computed: {
    dataList () {
      this.oldList.forEach(i => {
        i.date = moment(i.date).format('YYYY-MM-DD HH:mm:ss')
      });
      return this.oldList;
    }
  },

  created () {

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
    min-height: 1000px;
    padding-top: 30px;
    .main{
      width: 1200px;
      margin: 0 auto;
      .box-card{
        margin-top: 30px;
        border-radius: 30px;
        padding: 40px;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        .card-top{
          display: flex;
          margin-bottom: 20px;
          .card-left{
            flex: 2;
            .card-title{
              font-size: 26px;
              height: 35px;
              line-height: 35px;
              margin-bottom: 10px;
              color: #333;
            }
            .card-des{
              color: #555;
              height: 90px;
              line-height: 30px;
              margin-bottom: 10px;
              overflow : hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
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
          .card-right{
            flex: 1;
            margin-left: 20px;
            width: 34%;
            padding: 20px;
            background-position: center;
            background-repeat: no-repeat;
          }
        }
        .card-bottom{
          width: 100%;
          height: 50px;
          line-height: 50px;
          padding-left: 30px;
          color: #888;
          text-align: left;
          position: relative;
          .goPage{
            cursor: pointer;
            font-size: 20px;
            position: absolute;
            right: 20px;
            top: 0;
            height: 50px;
            line-height: 50px;
            padding: 0 20px;
            &:hover{
              color: #3a8ee6;
            }
          }
        }
      }
    }
  }
}
</style>

