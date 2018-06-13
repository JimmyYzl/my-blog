<template>
  <div class="articlePage">
    <mavon-editor v-model="article" :subfield="false" defaultOpen="preview" :editable="false" :toolbarsFlag="false"></mavon-editor>
  </div>
</template>

<script>
import Api from '../api/index.js'
export default {
  data () {
    return {
      article: '',
      html: ''
    }
  },

  created () {
    Api.getarticle({id: this.$route.query.id}, (data) => {
      console.log(data);
      this.article = data.data.article;
    })
  },
}
</script>

<style lang="scss" scoped>
.main{
  width: 1200px;
  margin: 0 auto;
}
</style>
