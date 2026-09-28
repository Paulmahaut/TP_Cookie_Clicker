import { createStore } from 'vuex'

export default createStore({
  state: {
    xp: 0,
    autoProduction: 0,
    upgrades: [
      { id: 'manette-turbo', nom: 'Manette Turbo', cout: 15, production: 0.1, quantite: 0 },
      { id: 'npc-farmeur', nom: 'NPC Farmeur', cout: 100, production: 1, quantite: 0 },
      { id: 'bot-de-raid', nom: 'Bot de Raid', cout: 500, production: 4, quantite: 0 },
      { id: 'ferme-de-mules', nom: 'Ferme de Mules', cout: 1200, production: 7, quantite: 0 },
      { id: 'serveur-de-guilde', nom: 'Serveur de Guilde', cout: 3000, production: 10, quantite: 0 },
      { id: 'datacenter-esport', nom: 'Datacenter eSport', cout: 8000, production: 20, quantite: 0 }
    ]
  },
  getters: {
    doubleXP: state => state.xp * 2,
    xpParSeconde: state => state.autoProduction
  },
  mutations: {
    ajouterXP(state) {
      state.xp++
    },
    ajouterXPAuto(state) {
      state.xp += state.autoProduction
    },
    acheterUpgrade(state, upgradeId) {
      const upgrade = state.upgrades.find(u => u.id === upgradeId)
      if (!upgrade || state.xp < upgrade.cout) return

      state.xp -= upgrade.cout
      state.autoProduction += upgrade.production
      upgrade.quantite++
      upgrade.cout = Math.ceil(upgrade.cout * 1.15)
    }
  },
  actions: {
    demarrerProductionAuto({ commit }) {
      setInterval(() => {
        commit('ajouterXPAuto')
      }, 1000)
    }
  }
})
