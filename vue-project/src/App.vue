<script setup></script>

<template>
  <div>
    <p>Nombre de cookies : {{ Math.floor($store.state.cookies) }}</p>
    <p>Production automatique : {{ $store.getters.cookiesParSeconde }} cookie(s)/s</p>
  </div>

  <button @click="$store.commit('ajouterCookie')">
    🍪 Cliquer pour un cookie
  </button>

  <hr>

  <h3>Améliorations</h3>
  <div v-for="upgrade in $store.state.upgrades" :key="upgrade.id">
    <button
      :disabled="$store.state.cookies < upgrade.cout"
      @click="$store.commit('acheterUpgrade', upgrade.id)"
    >
      Acheter {{ upgrade.nom }} (coût : {{ upgrade.cout }}, possédées : {{ upgrade.quantite }})
    </button>
  </div>
</template>

<style scoped></style>
