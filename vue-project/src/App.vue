<script setup></script>

<template>
  <div class="jeu">
    <header>
      <h1>Loot Farmer</h1>
      <p class="xp">{{ Math.floor($store.state.xp) }} XP</p>
      <p class="stats">
        {{ $store.getters.xpParSeconde }} XP/s auto · {{ $store.state.xpParClic }} XP/clic
      </p>
    </header>

    <button class="bouton-farm" @click="$store.commit('ajouterXP')">
      Farmer du butin
    </button>

    <div class="colonnes">
      <section>
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
      </section>

      <section>
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
      </section>
    </div>
  </div>
</template>

<style scoped>
.jeu {
  max-width: 720px;
  margin: 0 auto;
  padding: 24px;
  font-family: system-ui, sans-serif;
  color: #222;
}

header {
  text-align: center;
  margin-bottom: 20px;
}

.xp {
  font-size: 2rem;
  font-weight: bold;
  margin: 4px 0;
}

.stats {
  color: #555;
  font-size: 0.9rem;
}

.bouton-farm {
  display: block;
  margin: 0 auto 32px;
  padding: 18px 36px;
  font-size: 1.2rem;
  border: 1px solid #222;
  background: #eee;
  color: #222;
  cursor: pointer;
}

.bouton-farm:active {
  background: #ddd;
}

.colonnes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

h3 {
  border-bottom: 1px solid #ccc;
  padding-bottom: 6px;
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
