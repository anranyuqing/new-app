import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {

  state: () => ({
    theme: 'light',
  }),
  getters: {
    isDark() {
      return this.theme === 'dark'
    },
  },
  actions: {
    setTheme(theme: string) {
      this.theme = theme
    },
    toggleTheme() { }
  }
})
