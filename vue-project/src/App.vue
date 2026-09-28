<script setup></script>

<template>
  <div>
    <h1> Loot Farmer</h1>
    <p>XP : {{ Math.floor($store.state.xp) }}</p>
    <p>Farming automatique : {{ $store.getters.xpParSeconde }} XP/s</p>
  </div>

  <button @click="$store.commit('ajouterXP')">
    ⚔️ Farmer du butin
  </button>

  <hr>

  <h3>Améliorations</h3>
  <div v-for="upgrade in $store.state.upgrades" :key="upgrade.id">
    <button
      :disabled="$store.state.xp < upgrade.cout"
      @click="$store.commit('acheterUpgrade', upgrade.id)"
    >
      Acheter {{ upgrade.nom }} (coût : {{ upgrade.cout }} XP, possédées : {{ upgrade.quantite }})
    </button>
  </div>
</template>

<style scoped></style>
