<template>
  <div class="col-md-6" v-for="post in list">
    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div class="col p-4 d-flex flex-column position-static">
        <strong class="d-inline-block mb-2 text-primary">Тип статьи</strong>
        <h3 class="mb-0">{{ post.title }}</h3>
        <div class="mb-1 text-muted">12 Февраля</div>
        <p class="card-text mb-auto">Синопсис статьи, который должен заинтересовать</p>
        <a href="file:///D:/%D1%83%D1%87%D0%B5%D0%B1%D0%B0/Web/blog/index.html#" class="stretched-link">Читать</a>
      </div>
      <div class="col-auto d-none d-lg-block">
        <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Миниатюра</text></svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ['posts']
}
</script>

<style scoped>

</style>