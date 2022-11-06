<template>
  <div class="itemContainer">
    <div class="settings">
      <div v-for="(ageItem, index) in ageArray" :key="ageItem.id" class="settingsCont">
        <div class="settingsTitle">
          <div class="eitherLabel" v-if="index > 0">или</div>
          Диапазон {{ index + 1 }}
        </div>
        <div class="itemsExactlyContainer">
          <div class="settingsFromTo">
            <div class="inputExactly">
              <span class="prefix">от</span>
              <input
                class="inputParams"
                :value="ageItem.from"
                @input="updateValue(ageItem, 'from')"
                type="number"
              />
            </div>
            <div class="inputExactly">
              <span class="prefix">до</span>
              <input
                class="inputParams"
                :value="ageItem.to"
                @input="updateValue(ageItem, 'to')"
                type="number"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="buttonsContainer">
      <my-button
        icon-path="/plus.svg"
        text="Добавить диапазон"
        @click.native="addAgeRange"
        class="addButton"
      />
      <my-button
        icon-path="/delete.svg"
        text="Удалить условие"
        @click.native="removeCondition"
        class="deleteButton"
      />
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";

export default {
  components: {
    MyButton
  },
  computed: {
    ageArray() {
      return this.$store.getters["conditionsStore/ageArray"]
    }
  },
  methods: {
    addAgeRange() {
      this.$store.commit('conditionsStore/addAgeItem')
    },
    removeCondition() {
      this.$store.commit('conditionsStore/removeCondition', 'ageArray')
    },
    updateValue(ageItem, key) {
      let newItem = {...ageItem, [key]: Number(event.target.value)}
      this.$store.commit('conditionsStore/changeAgeValue', newItem)
    },
  },
  unmounted() {
    this.$store.commit('conditionsStore/removeSelectedCondition', 'age')
  }
}
</script>

<style>
.eitherLabel {
  height: 100%;
  background: #ffd4a0;
  border-radius: 10px;
  display: flex;
  padding: 0 1rem;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
}

.itemContainer {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
}

.itemsExactlyContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.settingsCont {
  width: 100%;
  display: flex;
  margin-top: 1rem;
}

.settingsCont:first-of-type {
  margin-top: 0;
}

.settings {
  display: flex;
  font-size: 20px;
  flex-direction: column;
}

.settingsTitle {
  width: 25%;
  display: flex;
  align-items: center;
}

.settingsFromTo {
  display: flex;
}

.settingsFromTo input::-webkit-outer-spin-button,
.settingsFromTo input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.rangeFromTo:first-of-type {
  margin-top: 0;
}

.inputExactly:first-child {
  margin-right: 1rem;
}

input {
  padding: 10px;
  width: 100px;
  border-radius: 10px;
  border: 2px solid lightgray;
}

.buttonsContainer {
  padding-left: 25%;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}

button {
  border-radius: 10px;
}

.addButton {
  color: #009118;
  border: 2px solid #009118;
}

.deleteButton {
  border: 2px solid red;
  color: red;
}
</style>
