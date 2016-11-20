import { sample } from "lodash";
export const allTracks = (state) => state.tracks.all;
export const allGreetings = (state) => state.greetings.all;
export const randomGreeting = (state) => sample(state.greetings.all).replace('%s', 'Vue');
export const trackCount = (state) => state.tracks.count;
export const isPlaying = (state) => state.tracks.playing != null;
export const playingTrack = (state) => state.tracks.playing;
export const getRelatedArtists = (state) => state.artists.all;
//# sourceMappingURL=getters.js.map