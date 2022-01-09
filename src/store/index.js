// 데이터 중앙 관리
import { createStore } from 'vuex'
import movie from './movie'
import about from './about'

export default createStore({
  modules: {
    movie,
    about
  }
})