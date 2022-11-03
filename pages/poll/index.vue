<template>
  <div class="scrollable container">
    <router-link to="/poll/create">
      <my-button iconPath="/plus.svg" text="Создать опрос"/>
    </router-link>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";

export default {
  components: {MyButton},
  layout: 'poll',
  methods: {
    goTo(url) {
      this.$router.push(url)
    }
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
}
</style>
