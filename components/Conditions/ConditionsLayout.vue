<template>
  <div class="conditionContainer">
    <div class="conditionType">
      <div class="conditionIndex">Условие {{ number }}</div>
      <div class="conditionSelect">
        <select
          :value="selected"
          @input="updateValue"
        >
          <option disabled selected value="">Выберите условия</option>
          <option
            v-for="condition in selectableConditions"
            :value="condition.value"
            :disabled="condition.selected === true"
            :key="condition.value"
          >
            {{condition.text}}
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
    selectedConditions() {
      return this.$store.getters["conditionsStore/selectedConditions"]
    },
    selectableConditions() {
      return this.$store.getters["conditionsStore/selectableConditions"]
    }
  },
  data() {
    return {
      selected: '',
    }
  },
  props: {
    number: {
      type: Number,
      required: true
    }
  },
  methods: {
    updateValue() {
      this.selected = event.target.value
      this.$store.commit('conditionsStore/addSelectedCondition', event.target.value)
      this.updateDisables()
    },
    updateDisables() {
      this.selectableConditions.forEach(mainItem => {
        mainItem.selected = !!this.selectedConditions.find(item => item === mainItem.value);
      })
    },
  },
}
</script>

<style scoped>
.conditionContainer {
  padding: 1rem 3rem 1rem 3rem;
}

.conditionType {
  display: flex;
}

.conditionIndex {
  width: 25%;
  min-width: 200px;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 24px;
}

.conditionSelect {
  width: 75%;
}

.conditionSelect select {
  border: 2px solid lightgray !important;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
}
</style>
