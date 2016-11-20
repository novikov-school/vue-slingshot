import * as types from '../mutation-types';
// initial state
const state = {
    all: [
        'Привет!',
        'Hi, %s!',
        'Howdy, %s!',
        'Йо!',
        'Всё хорошо, %s?',
        'Прекрасно, не правда ли, %s?',
        'Как жизнь, %s?',
        'Как дела, %s?'
    ]
};
// mutations
const mutations = {
    [types.RECEIVE_GREETINGS](state, { greetings }) {
        state.all = greetings;
    }
};
export default {
    state,
    mutations
};
//# sourceMappingURL=greetings.js.map