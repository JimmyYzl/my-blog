import axios from 'axios';
import Vue from 'vue'

let api = {

};

api.getlist = (data, cd) => {
  axios.get('/api/front_list', {
    params: data,
   })
  .then(cd)
  .catch((err) => {
    window.location.hash = '#/'; 
  });
}

export default api;
