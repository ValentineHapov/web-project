<template>
  <div>
    <div class="row mb-2">

    </div>
  </div>
</template>

<script>
import PostsList from "../components/PostsList.vue";
export default {
  name: "Home",
  components: PostsList,
  data ()
  {
    return {
      list: PostsList
    }
  }
}
</script>

<style scoped>

</style>