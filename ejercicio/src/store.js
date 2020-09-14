import Vue from "vue";
import axios from "axios";

const store = Vue.observable({
  users: [],
  isFetching: false,
  user: {}, 
  usersFollowers: []
});

export const getters = {
  users: () => store.users,
  isFetching: () => store.isFetching,
  user: () => store.user,
  usersNames: () => store.users.map(user => user.login),
  usersFollowers: () => store.users.map(user => user.followers)
};

export const mutations = {
  setUsers: users => store.users = users,
  setIsFetching: value => store.isFetching = value,
  setUser: user => store.user = user,
  setUserFollowers: followers => store.followers = followers
};

export const actions = {
  fetchUsersFromApi(input) {
    mutations.setIsFetching(true);
    axios.get(`https://api.github.com/search/users?q=${input}`)
      .then(res => res.data.items.map(user => actions.getUserFollowers(user.login)))
      .then(async res => {
        const response = await Promise.all(res);
        const followersData = response.map(userData => userData.data);
        mutations.setUsers(followersData.slice(0, 10));
        mutations.setIsFetching(false);
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
  },
  getUserFollowers(user) { return axios.get(`https://api.github.com/users/${user}`) }
};

Vue.prototype.$store = store;