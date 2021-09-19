import Vue from 'vue';
import Vuex from 'vuex';
//import * as getters from './getters';
//import * as mutations from './mutations';
import todo from './modules/todo';

Vue.use(Vuex);

// const storage = {
//   fetch() {
//     const arr = [];
//     if (localStorage.length > 0) {
//       for (let i = 0; i < localStorage.length; i++) {
//         if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
//           const value = JSON.parse(localStorage.getItem(localStorage.key(i)));
//           arr.push(value);
//         }
//       }
//     }
//     return arr;
//   },
// };

export const store = new Vuex.Store({
  modules: {
    todo: todo,
  },
  // state: {
  //   todoItems: storage.fetch(),
  // },
  // getters,
  // mutations,
  // actions: {
  //   // app에서 메소드에 action을 dispatch하면,
  //   // context로 mutation에 접근해 수행을함.
  //   // 비동기로직은 액션에서
  // },
});
