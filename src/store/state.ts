import {ActionContext} from "./types";

export interface TrackState {
  all: Array<any>;
  count: number;
  playing: boolean;
  current: any;
  handle: any;
  playStatus: any;
}

export interface GreetingsState {
  all: Array<any>
}

export interface ArtistsState {
  all: Array<any>
}

export interface State {
  tracks: TrackState;
  greetings: GreetingsState;
  artists: ArtistsState;
}

export type StoreGetter = (state: State, getters: any, rootState: State) => any;
export type StoreAction = (injectee: ActionContext<State, State>, payload: any) => any;

export interface StoreActionContext extends ActionContext<State, State> {

}
