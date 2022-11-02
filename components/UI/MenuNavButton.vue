<template>
  <nuxt-link exact no-prefetch class="nav-link" :to="path" active-class="active" id="iconId">
    <img :src="iconPath" alt="nav icon" class="icon"/>
    <span>{{title}}</span>
  </nuxt-link>
</template>

<script>
export default {
  name: "menu-button",
  props: {
    title: {
      type: String,
      required: true
    },
    iconPath: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.nav-link{
  width: 100%;
  height: 150px;
  display: flex;
  border: 2px solid #fff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #000;
  border-radius: 10px;
  font-weight: normal;
  transition: background-color 0.3s;
}
.nav-link:hover{
  color: #93BC02;
  border: 2px solid #93BC02;
}
.nav-link span{
  font-size: 20px;
  transition: 0.3s;
}
.icon{
  width: 50px;
  height: 50px;
}
.active{
  font-weight: bold;
  color: #000 !important;
  background: lightgray;
  border: 2px solid lightgray !important;
}
</style>
