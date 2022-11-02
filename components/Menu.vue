<template>
  <div class="menu">
    <menu-button title="Опросы" icon-path="/list.svg" path="/"/>
    <menu-button title="Пользователи" icon-path="/people.svg" path="/users"/>
    <menu-button title="Черные списки" icon-path="/warning-flag.svg" path="/blacklist"/>
    <menu-button title="Колл-центр" icon-path="/call.svg" path="/callcenter"/>
  </div>
</template>

<script>
import MenuButton from "~/components/UI/MenuNavButton";
export default {
  name: "Menu",
  components: {MenuButton}
}
</script>

<style scoped>
.menu{
  width: 200px;
  min-width: 200px;
  border-right: 2px solid gray;
  padding: 1rem;
}
</style>
