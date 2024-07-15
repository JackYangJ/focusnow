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
  theme: String
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
    theme: ''
  }),
  getters: {
    // doubleCount: (state) => state.count * 2,
    autoStartWorkTimer(state) {
      return state.autoStartWorkTimer
    },
  
    autoStartBreakTimer(state) {
      return state.autoStartBreakTimer
    },
  
    currentDrawer(state) {
      return state.currentDrawer
    },
  
    drawerOpen(state) {
      return state.drawerOpen
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