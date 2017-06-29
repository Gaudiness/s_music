import * as types from '../mutation-types'

const state = {
  musicList: [],

  currentSong: {
  	timeLong: 245,
  	currentTime: 0,
  	startTime: '00:00',
  	endTime: '',
  	length: null,
    currentPoint: 0,
    currentPosition: null
  },

  suspend: true,
}

// getters
const getters = {
  musicList: state => state.musicList,
  currentSong: state => state.currentSong,
  suspend: state => state.suspend
}

// actions
const actions = {
  setCurrentSong({ commit, state }){
    commit(types.SET_CURRENT_SONG);
  },


}

// mutations
const mutations = {
  [types.SET_CURRENT_SONG](state){
    let m = parseInt(state.currentSong.timeLong / 60);
    let s = state.currentSong.timeLong % 60

    m = m>9?m:('0' + m);
    s = s>9?s:('0' + s);

    state.currentSong.endTime = m + ":" + s;
    state.currentSong.length = 1 / state.currentSong.timeLong * 100 + '%';

    let pos = parseFloat(state.currentSong.length) * state.currentSong.currentPoint;
    // pos = pos>0?(pos-2.5):(pos - 2.5);
    state.currentSong.currentPosition = pos - 2 + '%';

  }
}

export default {
  state,
  getters,
  actions,
  mutations
}