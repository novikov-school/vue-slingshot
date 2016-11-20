import { sample } from 'lodash';
export const allTracks = (state) => state.tracks.all;
export const allGreetings = (state) => state.greetings.all;
export const randomGreeting = (state) => sample(state.greetings.all).replace('%s', 'Vue');
export const getCurrentUser = (state) => state.session.current;
export const trackCount = (state) => state.tracks.count;
export const getVersion = (state) => state.session.version;
export const isOnline = (state) => state.session.online;
export const isPlaying = (state) => state.tracks.playing != null;
export const playingTrack = (state) => state.tracks.playing;
export const getFavoriteTracks = (state) => state.favourite.songs;
//# sourceMappingURL=getters.js.map