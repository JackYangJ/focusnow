import { fa } from 'element-plus/es/locale'
import { defineStore } from 'pinia'
// import { localStore } from './index'

interface ViewState {
  currentDrawer: String,
  drawerOpen: Boolean,
  autoStartWorkTimer: Boolean,
  autoStartBreakTimer: Boolean,
  alwaysOnTop: String,
  breakAlwaysOnTop: String,
  minToTray: String,
  minToTrayOnClose: String,
  notifications: String,
  os: String,
  theme: String,
  count: Number
}

export const useViewStore = defineStore('view', {
  state: ():ViewState => ({
    currentDrawer: 'appDrawerTimer',
    drawerOpen: false,
    autoStartWorkTimer: true,
    autoStartBreakTimer: true,
    alwaysOnTop: '',
    breakAlwaysOnTop: '',
    minToTray: '',
    minToTrayOnClose: '',
    notifications: '',
    os: '',
    theme: '',
    count: 1
  }),
  getters: {
    // getter name can be same with state
    doubleCount: (state) => {
      console.log('state.count', state.count)
      return Number(state.count) * 2
    },
    autoStartWorkTimer(state) {
      return state.autoStartWorkTimer
    },
  
    autoStartBreakTimer(state) {
      return state.autoStartBreakTimer
    },
  
    currentDrawer(state) {
      return state.currentDrawer
    },
  
    alwaysOnTop(state) {
      return state.alwaysOnTop
    },
  
    breakAlwaysOnTop(state) {
      return state.breakAlwaysOnTop
    },
  
    minToTray(state) {
      return state.minToTray
    },
  
    minToTrayOnClose(state) {
      return state.minToTrayOnClose
    },
  
    notifications(state) {
      return state.notifications
    },
  
    os(state) {
      return state.os
    },
  
    theme(state) {
      return state.theme
    }
  },
  actions: {
    // increment() {
    //   this.count++
    // },
  },
})