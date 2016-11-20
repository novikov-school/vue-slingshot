import * as types from '../mutation-types'

// initial state
const state = {
  all: [
    'Howdy!',
    'Hi, %s!',
    'Howdy, %s!',
    'How are you doing?',
    'What`s next with %s?',
    'All fine with %s?',
    'How do you do?',
    'How are you feel with %s?'
  ]
};

// mutations
const mutations = {
  [types.APPLICATION_READY](){

  },
  [types.RECEIVE_GREETINGS] (state, { greetings }) {
    state.all = greetings
  }
};

export default {
  state,
  mutations
};
