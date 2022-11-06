<template>
  <div class="conditionContainer">
    <div class="conditionType">
      <div class="conditionIndex">Условие {index}</div>
      <div class="conditionSelect">
        <select v-model="selected">
          <option disabled selected value="">
            Выберите условия
          </option>
          <option value="age">
            Возраст респондента
          </option>
          <option value="type">
            Тип карты лояльности
          </option>
          <option value="status">
            Статус карты лояльности
          </option>
        </select>
      </div>
    </div>
    <Age v-if="selected === 'age'"/>
    <Types v-if="selected === 'type'"/>
    <Status v-if="selected === 'status'"/>
  </div>
</template>

<script>
import Age from "@/components/Conditions/conditions_exactly/Age";
import Types from "@/components/Conditions/conditions_exactly/Types";
import Status from "@/components/Conditions/conditions_exactly/Status";

export default {
  name: 'conditionsLayout',
  components: {Status, Types, Age},
  computed: {
    conditionsStore() {
      return this.$store.getters["conditionsStore/counterValue"]
    }
  },
  data() {
    return {
      selected: ''
    }
  }
}
</script>

<style scoped>
.conditionContainer{
  padding: 1rem 3rem 1rem 3rem;
}
.conditionType{
  display: flex;
}
.conditionIndex{
  width: 25%;
  min-width: 200px;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 24px;
}
.conditionSelect{
  width: 75%;
}
.conditionSelect select{
  border: 2px solid lightgray !important;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
}
</style>
