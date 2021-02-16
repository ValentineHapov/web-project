<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <article class="blog-post">
          <h2 class="blog-post-title">{{list.data().posts[id].title}}</h2>
          <p class="blog-post-meta">{{list.data().posts[id].day}}</p>

          <p></p>
          <hr>
          <p>{{list.data().posts[id].text}}</p>
        </article>
      </div>
      <div class="col-md-4">
        <div class="p-4 mb-3 bg-light rounded">
          <h4 class="font-italic">Сайт со статьями</h4>
          <p class="mb-0">Проект подготовленный мной, для сдачи долгов.
            В нем приведен минимальный функционал для демонстрации знаний Vue.js.
          </p>
        </div>
      </div>
    </div><!-- /.row -->

  </div>
</template>

<script>
import PostsList from "../components/PostsList.vue";
export default {
  name: "Post",
  props: ['id'],
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