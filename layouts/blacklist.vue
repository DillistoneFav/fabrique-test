<template>
  <div class="layout">
    <Menu/>
    <div class="app">
      <NavBar/>
      <RoutesHistory :routes="routes"/>
      <Nuxt class="scrollable container"/>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Menu from "@/components/Menu";
export default {
  components: {
    NavBar,
    Menu
  },
  data() {
    return {
      routes: [
        {title: 'Черный список', link: '/blacklist'},
      ]
    }
  }
}
</script>

<style scoped>
.layout{
  width: 100%;
  height: 100vh;
  display: flex;
}
.app{
  width: 100%;
  overflow: hidden;
}
</style>
