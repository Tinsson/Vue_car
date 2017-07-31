import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  // 定义状态
  state: {
    author: 'in store',
    count: 'dfdfdf23',
    todos: [
      {id:1,text:'study',done:true},
      {id:2,text:'work',done: false}
    ]
  },
  mutations: {
    newAuthor (state, msg){
      state.author = msg;
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }
});

export default store
