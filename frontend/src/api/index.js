import axios from 'axios';
import Vue from 'vue'

let api = {

};

api.getlist = (data, cd) => {
  axios.get('/api/front_list', {
    params: data,
   })
  .then(cd)
}

api.getarticle = (data, cd) => {
  axios.get('/api/front_article', {
    params: data
  })
  .then(cd)
}

api.gettags = (data, cd) => {
  axios.get('/api/front_tags')
  .then(cd)
}

export default api;
