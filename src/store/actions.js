import "isomorphic-fetch";
import * as types from "./mutation-types";
export const applicationReady = (store) => {
    store.commit(types.APPLICATION_READY);
};
export const playTrack = (store, track) => {
    store.commit(types.PAUSE_TRACK);
    store.commit(types.PLAY_TRACK, track);
};
export const pauseTrack = (store) => {
    store.commit(types.PAUSE_TRACK);
};
export const playNext = ({ commit, state }) => {
    const tracks = state.tracks;
    if (tracks.playing) {
        const current = tracks.all.indexOf(tracks.playing);
        const next = (current + 1) % tracks.all.length;
        if (tracks.all[next]) {
            commit(types.PAUSE_TRACK);
            commit(types.PLAY_TRACK, tracks.all[next]);
        }
    }
};
export const fetchRelatedArtists = (store) => {
    return new Promise((resolve) => {
        store.commit(types.RECEIVE_ARTISTS, store.state.artists.all);
        resolve(store.state.artists.all);
    });
};
//# sourceMappingURL=actions.js.map