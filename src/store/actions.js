import "isomorphic-fetch";
import * as types from "./mutation-types";
export const getAllGreetings = (store) => {
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
    store.commit(types.RECEIVE_GREETINGS, { greetings });
};
export const applicationReady = (store) => {
    return fetch('http://google.com').then(() => {
        store.commit(types.USER_LOGGED_IN);
    }).catch((e) => {
        console.log(e);
        store.commit(types.USER_OFFLINE);
    });
};
export const setCurrentUser = (store, user) => {
    console.log('setCurrentUser ' + user);
};
export const logEvent = (store, vm) => {
    console.log(vm);
    store.commit(types.LOG_EVENT);
};
export const playTrack = (store, track) => {
    store.commit(types.PAUSE_TRACK);
    store.commit(types.PLAY_TRACK, track);
};
export const pauseTrack = (store) => {
    store.commit(types.PAUSE_TRACK);
};
export const playNext = (store) => {
    const commit = store.commit;
    const tracks = store.state.tracks;
    if (tracks.playing) {
        const current = tracks.all.indexOf(tracks.playing);
        const next = (current + 1) % tracks.all.length;
        if (tracks.all[next]) {
            commit(types.PAUSE_TRACK);
            commit(types.PLAY_TRACK, tracks.all[next]);
        }
    }
};
//# sourceMappingURL=actions.js.map