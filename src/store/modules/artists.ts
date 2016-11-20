import {ArtistsState} from "../state";
import * as types from '../mutation-types';

export const state : ArtistsState = {
  all: [
    {
      name: 'Mike Stud',
      style: {
        'background-image': 'url(/public/img/mikestud_large.jpg)'
      }
    },
    {
      name: 'Childish Gambino',
      style: {
        'background-image': 'url(/public/img/childish.jpg)'
      }
    },
    {
      name: 'Drake',
      style: {
        'background-image': 'url(/public/img/drake_large.jpg)'
      }
    },
    {
      name: 'J. Cole',
      style: {
        'background-image': 'url(/public/img/jcole_large.jpg)'
      }
    },
    {
      name: 'Big Sean',
      style: {
        'background-image': 'url(/public/img/bigSean_large.jpg)'
      }
    },
    {
      name: 'Wiz Khalifa',
      style: {
        'background-image': 'url(/public/img/wiz.jpeg)'
      }
    },
    {
      name: 'Yonas',
      style: {
        'background-image': 'url(/public/img/yonas.jpg)'
      }
    },
  ]
};

// mutations
export const mutations = {
  [types.RECEIVE_ARTISTS] (state: ArtistsState, artists) {
    state.all = artists
  }
};

export default {
  state,
  mutations
}
