import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    surveys: [
      {question: 'I have the ability to organize ideas, resources, time and people effectively.',value:null, id:1},
      {question: 'I am willing to study and prepare for the task of teaching.',value:null, id:2},
      {question: 'I am able to relate the truths of God to specific situations.',value:null, id:3},
      {question: 'I have the ability to organize ideas, resources, time and people effectively.',value:null, id:4},
      {question: 'I am willing to study and prepare for the task of teaching.',value:null, id:5},
      {question: 'I am able to relate the truths of God to specific situations.',value:null, id:6},
      {question: 'I have the ability to organize ideas, resources, time and people effectively.',value:null, id:7},
      {question: 'I am willing to study and prepare for the task of teaching.',value:null, id:8},
      {question: 'I am able to relate the truths of God to specific situations.',value:null, id:9},
    ],
  },

  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
