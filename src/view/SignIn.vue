<template>
  <div class="text-center form-signin" style="
    width: 300px;
    height: 387px;
    align-content: center">
    <form>
      <h1 class="h1 blog-header-logo mb-3 fw-normal">Сайт со статьями</h1>
      <h2 class="h3 mb-3 fw-normal">Пожалуйста, войдите</h2>
      <label for="inputEmail" class="visually-hidden">Адрес элктронной почты</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Адрес элктронной почты" required="" autofocus="">
      <label for="inputPassword" class="visually-hidden">Пароль</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Пароль" required="">
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Запомнить меня</label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">Войти</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Signup"
}
</script>

<style scoped>

</style>