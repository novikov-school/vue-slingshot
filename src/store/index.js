/// <reference path="../typings/node/node.d.ts" />
const _vuex = require('vuex');
export const mapState = (map) => _vuex.mapState(map);
export const mapMutations = (map) => _vuex.mapMutations(map);
export const mapGetters = (map) => _vuex.mapGetters(map);
export const mapActions = (map) => _vuex.mapActions(map);
export const createStore = () => {
    return require('./store').default;
};
export default {
    mapActions: mapActions,
    mapGetters: mapGetters,
    mapState: mapState,
    mapMutations: mapMutations,
    createStore: createStore
};
//# sourceMappingURL=index.js.map