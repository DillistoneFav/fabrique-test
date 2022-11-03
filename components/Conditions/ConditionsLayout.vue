<template>
  <div class="conditionContainer">
    <div class="conditionType">
      <span>Условие 1</span>
      <select>
        <option>
          1
        </option>
      </select>
      {{conditionsStore}}
    </div>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'conditionsLayout',
  computed: {
    conditionsStore() {
      return this.$store.getters["conditionsStore/counterValue"]
    }
  }
}
</script>

<style scoped>

</style>
