import * as types from '../mutation-types'

const state = {
  menuList: [
    {
      title: '推荐',
      list: [
        { icon: 's-music', value: '发现音乐', selected: true, path: '/found' },
        { icon: 's-headset', value: '正在播放', selected: false, path: '/personer' },
        { icon: 's-play', value: 'MV', selected: false, path: '/MV' },
        { icon: 's-friends', value: '朋友', selected: false, path: '/friend' },
      ]
    },
    {
      title: '我的音乐',
      list: [
        { icon: 's-lmusic', value: '本地音乐', selected: false, path: '/localList' },
        { icon: 's-download', value: '下载管理', selected: false, path: '/download' }
      ]
    }
  ]
}

// getters
const getters = {
  menuList: state => state.menuList
}

// actions
const actions = {
  changeSelected({ commit, state }, item){
    commit(types.CHANGE_MENU_SELECTED, { item });
  }
}

// mutations
const mutations = {
  [types.CHANGE_MENU_SELECTED](state, { item }){
    state.menuList.forEach((each)=>{
      each.list.forEach((data)=>{
        data.selected = false;
        if(data.value === item.value){
          data.selected = true;
        }
      })
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}