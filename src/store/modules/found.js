import * as types from '../mutation-types'

import one from '../../views/images/1.jpg';
import two from '../../views/images/2.jpg';
import three from '../../views/images/4.jpg';
import four from '../../views/images/3.jpg';

import list1 from '../../views/images/list1.jpg';
import list2 from '../../views/images/list2.jpg';
import list3 from '../../views/images/list3.jpg';
import list4 from '../../views/images/list4.jpg';
import list5 from '../../views/images/list5.jpg';
import list6 from '../../views/images/list6.jpg';
import list7 from '../../views/images/list7.jpg';
import list8 from '../../views/images/list8.jpg';

const state = {
  tabList: [
    { value: '个性推荐', selected: true },
    { value: '歌单', selected: false },
    { value: '主播电台', selected: false },
    { value: '排行榜', selected: false },
    { value: '歌手', selected: false },
    { value: '最新音乐', selected: false }
  ],

  carouselList: {
    playing: true,
    list: [
      { src: one, pos: 's_carousel_left', id: 'one', selected: false },
      { src: two, pos: 's_carousel_center', id: 'two', selected: true },
      { src: three, pos: 's_carousel_right', id: 'three', selected: false },
      { src: four, pos: 's_carousel_back', id: 'four', selected: false },
    ]
  },

  songSheetList: {
    title: '推荐歌单',
    more: '更多',
    list: [
      { img: list1, name: '1', count: '11', discribe: '11' },
      { img: list2, name: '2', count: '22', discribe: '22' },
      { img: list3, name: '3', count: '33', discribe: '33' },
      { img: list4, name: '4', count: '44', discribe: '44' },
      { img: list5, name: '5', count: '55', discribe: '55' },
      { img: list6, name: '6', count: '66', discribe: '66' },
      { img: list7, name: '7', count: '77', discribe: '77' },
      { img: list8, name: '8', count: '88', discribe: '88' }
    ]
  }

}

// getters
const getters = {
  tabList: state => state.tabList,
  carouselList: state => state.carouselList,
  songSheetList: state => state.songSheetList
}

// actions
const actions = {
  changeTabSelected({ commit, state }, item){
    commit(types.CHANGE_TABS_SELECTED, { item });
  },

  changeCarouselSelected({ commit, state }, item){
    commit(types.CHANGE_CAROUSEE_SELECTED, { item });
  }
}

// mutations
const mutations = {

  [types.CHANGE_TABS_SELECTED](state, { item }){
    state.tabList.forEach((each)=>{
      each.selected = false;
      if(each.value === item.value){
        each.selected = true;
      }
    })
  },

  [types.CHANGE_CAROUSEE_SELECTED](state, { item }){
    let carouselIndex;
    state.carouselList.list.forEach((each, index)=>{
      each.selected = false;
      if(each.id === item.id){
        carouselIndex = index;
        each.selected = true;
      }
    });

    // state.carouselList[carouselIndex].selected = true;
    state.carouselList.list[carouselIndex].pos = 's_carousel_center';
    
    if(carouselIndex - 1 < 0)
      state.carouselList.list[carouselIndex - 1 + 4].pos = 's_carousel_left';
    else
      state.carouselList.list[carouselIndex - 1].pos = 's_carousel_left';


    if(carouselIndex + 1 >= 4)
      state.carouselList.list[carouselIndex + 1 - 4].pos = 's_carousel_right';
    else 
      state.carouselList.list[carouselIndex + 1].pos = 's_carousel_right';

    if(carouselIndex + 2 >= 4)
      state.carouselList.list[carouselIndex + 2 - 4].pos = 's_carousel_back';
    else 
      state.carouselList.list[carouselIndex + 2].pos = 's_carousel_back';
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}