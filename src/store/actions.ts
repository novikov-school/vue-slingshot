import "isomorphic-fetch";
import * as types from "./mutation-types";
import {Commit} from "./types";
import {StoreAction, StoreActionContext} from "./state";

export const applicationReady: StoreAction = (store: StoreActionContext) => {
  store.commit(types.APPLICATION_READY);
};

export const playTrack: StoreAction = (store: StoreActionContext, track) => {
  store.commit(types.PAUSE_TRACK);
  store.commit(types.PLAY_TRACK, track);
};

export const pauseTrack: StoreAction = (store: StoreActionContext) => {
  store.commit(types.PAUSE_TRACK);
};

export const playNext: StoreAction = (store: StoreActionContext) => {
  const commit: Commit = store.commit;
  const tracks: any = store.state.tracks;

  if (tracks.playing) {
    const current = tracks.all.indexOf(tracks.playing);
    const next = (current + 1) % tracks.all.length;
    if (tracks.all[next]) {
      commit(types.PAUSE_TRACK);
      commit(types.PLAY_TRACK, tracks.all[next]);
    }
  }
};

export const fetchRelatedArtists = (store: StoreActionContext) => {
  return new Promise((resolve) => {
    store.commit(types.RECEIVE_ARTISTS, store.state.artists.all);
    resolve(store.state.artists.all);
  })
};
