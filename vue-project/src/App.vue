<script setup></script>

<template>
  <div>
    <p>Nombre de cookies : {{ $store.state.cookies }}</p>
    <p>Double des cookies : {{ $store.getters.doubleCookies }}</p>
  </div>


 <button @click="$store.commit('ajouterCookie')">
      Ajouter un cookie
    </button>



</template>

<style scoped></style>
