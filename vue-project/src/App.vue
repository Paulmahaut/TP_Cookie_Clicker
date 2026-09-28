<script setup></script>

<template>
  <div class="jeu">
    <div class="hud">
      <span class="titre">Loot Farmer</span>
      <span class="xp">{{ Math.floor($store.state.xp) }} XP</span>
      <span class="stats">{{ $store.getters.xpParSeconde }} XP/s · {{ $store.state.xpParClic }} XP/clic</span>
    </div>

    <div class="corps">
      <div class="arene">
        <button class="bouton-farm" @click="$store.commit('ajouterXP')">
          Farmer du butin
        </button>
      </div>

      <aside class="boutique">
        <h3>Production automatique</h3>
        <button
          v-for="upgrade in $store.state.upgrades"
          :key="upgrade.id"
          class="carte-upgrade"
          :disabled="$store.state.xp < upgrade.cout"
          @click="$store.commit('acheterUpgrade', upgrade.id)"
        >
          <strong>{{ upgrade.nom }}</strong>
          <span>{{ upgrade.cout }} XP · +{{ upgrade.production }} XP/s</span>
          <span class="quantite">possédées : {{ upgrade.quantite }}</span>
        </button>

        <h3>Puissance de clic</h3>
        <button
          v-for="amelioration in $store.state.ameliorationsClic"
          :key="amelioration.id"
          class="carte-upgrade"
          :disabled="$store.state.xp < amelioration.cout"
          @click="$store.commit('acheterAmeliorationClic', amelioration.id)"
        >
          <strong>{{ amelioration.nom }}</strong>
          <span>{{ amelioration.cout }} XP · +{{ amelioration.bonus }} XP/clic</span>
          <span class="quantite">possédées : {{ amelioration.quantite }}</span>
        </button>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.jeu {
  font-family: system-ui, sans-serif;
  color: #222;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.hud {
  display: flex;
  align-items: baseline;
  gap: 24px;
  padding: 12px 20px;
  border-bottom: 1px solid #222;
}

.titre {
  font-weight: bold;
}

.xp {
  font-size: 1.3rem;
  font-weight: bold;
}

.stats {
  color: #555;
  font-size: 0.9rem;
}

.corps {
  flex: 1;
  display: flex;
  min-height: 0;
}

.arene {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bouton-farm {
  padding: 24px 48px;
  font-size: 1.4rem;
  border: 1px solid #222;
  background: #eee;
  color: #222;
  cursor: pointer;
}

.bouton-farm:active {
  background: #ddd;
}

.boutique {
  width: 280px;
  padding: 16px;
  border-left: 1px solid #222;
  overflow-y: auto;
}

h3 {
  border-bottom: 1px solid #ccc;
  padding-bottom: 6px;
  margin-top: 20px;
}

h3:first-child {
  margin-top: 0;
}

.carte-upgrade {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 8px;
  padding: 10px 14px;
  background: #fff;
  border: 1px solid #ccc;
  color: #222;
  cursor: pointer;
  text-align: left;
}

.carte-upgrade:hover:not(:disabled) {
  border-color: #222;
}

.carte-upgrade:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.quantite {
  font-size: 0.8rem;
  color: #555;
}
</style>
