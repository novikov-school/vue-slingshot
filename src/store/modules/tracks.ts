/* eslint-disable no-unused-vars */
import * as types from '../mutation-types';
import {TrackState} from '../state';

const playStatuses = {
  PLAYING: 'PLAYING',
  STOPPED: 'STOPPED',
  PAUSED: 'PAUSED'
};

// initial state
const state : TrackState = {
  playStatus: playStatuses.STOPPED,
  all: [],
  get count() {
    return this.all.length;
  },
  playing: null,
  current: null,
  handle: new Audio('http://s.dootoo.ru/api/v2/media/stream/5')
};

// mutations
const mutations = {
  [types.RECEIVE_TRACKS] (state: TrackState, { tracks }) {
    state.all = tracks
  },

  [types.ADD_TO_QUEUE] (state: TrackState, { id }) {
    state.all.find(p => p.id === id)
  },

  [types.PLAY_TRACK] (state: TrackState, track) {
    console.log(track.source);
    state.current = state.playing = track;
    state.handle = new Audio(track.source);
    state.handle.play();
  },

  [types.PLAY_TRACK_NEXT]() {

  },

  [types.PLAY_TRACK_PREV]() {

  },

  [types.PAUSE_TRACK] (state: TrackState) {
    state.playing = null;
    if(state.handle){
      state.handle.pause();
    }
    state.handle = null;
  }
};

export default {
  state,
  mutations
}
