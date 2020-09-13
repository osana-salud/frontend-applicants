import Vue from "vue";
import axios from "axios";

const store = Vue.observable({
  users: [],
  isFetching: false,
  user: {}
});

export const getters = {
  users: () => store.users,
  isFetching: () => store.isFetching,
  user: () => store.user
};

export const mutations = {
  setUsers: users => store.users = users,
  setIsFetching: value => store.isFetching = value,
  setUser: user => store.user = user
};

export const actions = {
  fetchUsersFromApi(input) {
    mutations.setIsFetching(true);
    return axios
           .get(`https://api.github.com/search/users?q=${input}`)
           .then(res => {
             mutations.setUsers(res.data.items.slice(0, 10));
             mutations.setIsFetching(false);
             console.log(res.data.items)
            })
  },
  fetchUserDetails(user) {
    mutations.setIsFetching(true);
    return axios
           .get(`https://api.github.com/users/${user}`)
           .then(res => {
              mutations.setUser(res.data);
              mutations.setIsFetching(false);
              console.log(res.data)
            })
  }
};

Vue.prototype.$store = store;