<template>
  <div>
    <div class="row mb-2">
      <div class="col-md-6" v-for="post in list">
        <Card v-bind:post="post"></Card>
      </div>
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