/// <reference path="../typings/lodash/lodash.d.ts" />
import {sample} from 'lodash';
import {State, StoreGetter} from "./state";

export const allTracks: StoreGetter = (state: State): Array<any> => state.tracks.all;

export const allGreetings: StoreGetter = (state: State): Array<any> => state.greetings.all;

export const randomGreeting: StoreGetter = (state: State): any => sample(state.greetings.all).replace('%s', 'Vue');

export const getCurrentUser: StoreGetter = (state: State): any => state.session.current;

export const trackCount: StoreGetter = (state: State): number => state.tracks.count;

export const getVersion: StoreGetter = (state: State): string => state.session.version;

export const isOnline: StoreGetter = (state: State): boolean => state.session.online;

export const isPlaying: StoreGetter = (state: State): boolean => state.tracks.playing != null;

export const playingTrack: StoreGetter = (state: State): any => state.tracks.playing;

export const getFavoriteTracks: StoreGetter = (state: State): any => state.favourite.songs;
