/// <reference path="../typings/isomorphic-fetch/isomorphic-fetch.d.ts" />
import "isomorphic-fetch";
import * as types from "./mutation-types";
import {StoreAction, StoreActionContext, Commit} from "./state";

export const getAllGreetings: StoreAction = (store: StoreActionContext) => {
  const greetings = [
    'Howdy!',
    'Hi, %s!',
    'Howdy, %s!',
    'How are you doing?',
    'What`s next with %s?',
    'All fine with %s?',
    'How do you do?',
    'How are you feel with %s?'
  ];
  store.commit(types.RECEIVE_GREETINGS, {greetings});
};

export const applicationReady: StoreAction = (store: StoreActionContext) => {
  return fetch('http://google.com').then(() => {
    store.commit(types.USER_LOGGED_IN);
  }).catch((e) => {
    console.log(e);
    store.commit(types.USER_OFFLINE);
  });
};

export const setCurrentUser: StoreAction = (store: StoreActionContext, user) => {
  console.log('setCurrentUser ' +  user);
};

export const logEvent: StoreAction = (store: StoreActionContext, vm) => {
  console.log(vm);
  store.commit(types.LOG_EVENT);
};

export const playTrack: StoreAction = (store: StoreActionContext, track) => {
  store.commit(types.PAUSE_TRACK);
  store.commit(types.PLAY_TRACK, track);
};

export const pauseTrack: StoreAction = (store: StoreActionContext) => {
  store.commit(types.PAUSE_TRACK);
};

export const playNext: StoreAction = (store: StoreActionContext) => {
  const commit : Commit = store.commit;
  const tracks : any = store.state.tracks;

  if(tracks.playing){
    const current = tracks.all.indexOf(tracks.playing);
    const next = (current + 1) % tracks.all.length;
    if(tracks.all[next]){
      commit(types.PAUSE_TRACK);
      commit(types.PLAY_TRACK, tracks.all[next]);
    }
  }
};
