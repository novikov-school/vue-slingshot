/// <reference path="../typings/node/node.d.ts" />
const _vuex = require('vuex');
import {Store} from './types';
import {State} from './state';

type Dictionary<T> = { [key: string]: T };

export const mapState = (map: string[] | Dictionary<string>): Dictionary<() => any> => _vuex.mapState(map);

type MutationMethod = (...args: any[]) => void;
export const mapMutations = (map: string[] | Dictionary<string>): Dictionary<MutationMethod> => _vuex.mapMutations(map);

export const mapGetters = (map: string[] | Dictionary<string>): Dictionary<() => any> => _vuex.mapGetters(map);

type ActionMethod = (...args: any[]) => Promise<any[]>;
export const mapActions = (map: string[] | Dictionary<string>): Dictionary<ActionMethod> => _vuex.mapActions(map);

export const createStore = () : Store<State> => {
  return require('./store').default;
};

export default {
  mapActions,
  mapGetters,
  mapState,
  mapMutations,
  createStore
}
