import { createStore } from 'vuex'

export default createStore({
  state: {
    cookies: 0,
    autoProduction: 0,
    upgrades: [
      { id: 'grandmere', nom: 'Grand-mère', cout: 10, production: 1, quantite: 0 }
    ]
  },
  getters: {
    doubleCookies: state => state.cookies * 2,
    cookiesParSeconde: state => state.autoProduction
  },
  mutations: {
    ajouterCookie(state) {
      state.cookies++
    },
    ajouterCookiesAuto(state) {
      state.cookies += state.autoProduction
    },
    acheterUpgrade(state, upgradeId) {
      const upgrade = state.upgrades.find(u => u.id === upgradeId)
      if (!upgrade || state.cookies < upgrade.cout) return

      state.cookies -= upgrade.cout
      state.autoProduction += upgrade.production
      upgrade.quantite++
      upgrade.cout = Math.ceil(upgrade.cout * 1.15)
    }
  },
  actions: {
    demarrerProductionAuto({ commit }) {
      setInterval(() => {
        commit('ajouterCookiesAuto')
      }, 1000)
    }
  }
})
