<template>
    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div class="col p-4 d-flex flex-column position-static">
        <h3 class="mb-0">{{ post.title }}</h3>
        <div class="mb-1 text-muted">{{post.day}}</div>
        <p class="card-text mb-auto">{{ post.synop }}</p>
        <router-link class="stretched-link" v-bind:to="{name: 'Post', params:{id:post.id}}">Читать</router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: "Card",
  props: ['post']
}
</script>

<style scoped>

</style>