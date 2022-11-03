<template>
  <div class="routesContainer container">
    <router-link to="/" class="routeHistory">
      <img src="/house.svg" alt="home icon"/>
    </router-link>
    <div v-for="route in routes" :key="route.link">
      <div class="customRoutes" v-if="$route.path.includes(route.link)">
        <img src="/right-arrow.svg" alt="right arrow" class="arrow" />
        <router-link exact :to="route.link" class="routeHistory" active-class="active">
          {{route.title}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'route-history',
  mounted() {

  },
  props: {
    routes: {
      type: Array,
      required: true
    },
  }
}
</script>

<style scoped>
 .routesContainer{
   width: 100%;
   padding-top: 1rem;
   padding-bottom: 1rem;
   display: flex;
   align-items: center;
 }
 img{
   width: 25px;
   height: 25px;
 }
 .arrow{
   margin: 0 1rem;
 }
 .customRoutes{
   display: flex;
   align-items: center;
 }
 .customRoutes a{
   text-decoration: none;
   color: #000;
   font-size: 20px;
 }
 .active{
   color: gray !important;
 }
</style>
