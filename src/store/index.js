import Vue from 'vue'
import Vuex from 'vuex'

/*GitHub*/
import github  from './modules/github/index'
/*GitLab*/
import gitlab  from './modules/gitlab/index'

Vue.use(Vuex)

const store = new Vuex.Store({

  modules: {
    gitlab,
    github
  }
});

export default store;
