/// <reference path="../typings/lodash/lodash.d.ts" />
import {sample} from "lodash";
import {State, StoreGetter} from "./state";

export const allTracks: StoreGetter = (state: State): Array<any> => state.tracks.all;

export const allGreetings: StoreGetter = (state: State): Array<any> => state.greetings.all;

export const randomGreeting: StoreGetter = (state: State): any => sample(state.greetings.all).replace('%s', 'Vue');

export const trackCount: StoreGetter = (state: State): number => state.tracks.count;

export const isPlaying: StoreGetter = (state: State): boolean => state.tracks.playing != null;

export const playingTrack: StoreGetter = (state: State): any => state.tracks.playing;

export const getRelatedArtists: StoreGetter = (state: State): any => state.artists.all;
