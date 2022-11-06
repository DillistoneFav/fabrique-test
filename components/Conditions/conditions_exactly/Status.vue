<template>
  <div class="itemContainer">
    <div class="settingsCont" v-for="(status, index) in statusesArray" :key="status.id">
      <div class="settingsTitle">
        <div class="eitherLabel" v-if="index > 0">или</div>
        Статус {{index + 1}}
      </div>
      <select
        class="rangeFromTo"
        :value="status.value"
        @input="updateValue(status)"
      >
        <option value="" disabled>Выберите статус</option>
        <option
          :value="status.value"
          v-for="status in selectableStatuses"
          :disabled="status.selected === true"
          :key="status.value"
        >
          {{ status.value }}
        </option>
      </select>
    </div>
    <div class="buttonsContainer">
      <my-button
        icon-path="/plus.svg"
        text="Добавить тип"
        @click.native="addStatusItem"
        v-if="statusesArray.length < selectableStatuses.length"
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
  components: {MyButton},
  data() {
    return {
      selectableStatuses: [
        {id: 0, value: 'Активна'},
        {id: 1, value: 'Выпускается'},
        {id: 1, value: 'Закрыта'},
      ],
    }
  },
  beforeMount() {
    this.updateDisables()
  },
  computed: {
    statusesArray() {
      return this.$store.getters["conditionsStore/statusesArray"]
    }
  },
  methods: {
    addStatusItem() {
      this.$store.commit('conditionsStore/addStatusItem')
    },
    removeCondition() {
      this.$store.commit('conditionsStore/removeCondition', 'statusesArray')
    },
    updateValue(item) {
      let newItem = {...item, value: event.target.value}
      this.$store.commit('conditionsStore/changeStatusValue', newItem)
      this.updateDisables()
    },
    updateDisables() {
      this.selectableStatuses.forEach(mainItem => {
        mainItem.selected = !!this.statusesArray.find(item => item.value === mainItem.value);
      })
    },
  },
  unmounted() {
    this.$store.commit('conditionsStore/removeSelectedCondition', 'status')
  }
}
</script>

<style >

select{
  border: 2px solid lightgray !important;
  border-radius: 10px;
  padding: 10px;
  width: 75%;
}
</style>
