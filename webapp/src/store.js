import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: "project-template",
  storage: window.localStorage
});

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    todos: [
      {
        id: 1,
        done: false,
        title: "Test Todo1"
      },
      {
        id: 2,
        done: false,
        title: "Test Todo2"
      }
    ]
  },
  mutations: {
    addToDo(state, todo) {
      state.todos = [...state.todos, {...todo, done: false, id: state.todos.length+1}];
    },
    persistState(state) {
      // creates a deep copy of the state.todos, then reassigns it
      // in principle, this works since the checkbox apparently reflects in the todos, but isn't detected as changed
      // who knows, really
      state.todos = state.todos.map(t => t);
    },
    deleteToDo(state, todo) {
      // just filters out the one that we're deleting; not so much a delete as a "take everything BUT..."
      state.todos = state.todos.filter(t => t !== todo);
    }
  },
  actions: {
    addToDo({ commit }, toDo) {
      debugger;
      commit("addToDo", toDo);
    },
    persistState({ commit }) {
      debugger;
      commit("persistState");
    },
    deleteToDo({ commit }, toDo) {
      debugger;
      commit("deleteToDo", toDo);
    }
  }
});
