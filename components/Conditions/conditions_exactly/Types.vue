<template>
  <div class="itemContainer">
    <div class="settingsCont" v-for="(type, index) in typesArray" :key="type.id">
        <div class="settingsTitle">
          <div class="eitherLabel" v-if="index > 0">или</div>
          Тип {{index + 1}}
        </div>
        <select
          class="rangeFromTo"
          :value="type.value"
          @input="updateValue(type)"
        >
          <option value="" disabled>Выберите тип</option>
          <option
            :value="type.value"
            v-for="type in selectableTypes"
            :disabled="type.selected === true"
            :key="type.value"
          >
            {{ type.value }}
          </option>
        </select>
    </div>
    <div class="buttonsContainer">
      <my-button
        icon-path="/plus.svg"
        text="Добавить статус"
        @click.native="addTypeItem"
        v-if="typesArray.length < selectableTypes.length"
        class="addButton"
      />
      <my-button
        icon-path="/delete.svg"
        text="Удалить условие"
        @click.native=""
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
      selectableTypes: [
        {value: 'Gold', selected: false},
        {value: 'Silver', selected: false},
        {value: 'Bronze', selected: false},
      ]
    }
  },
  beforeMount() {
    this.updateDisables()
  },
  computed: {
    typesArray() {
      return this.$store.getters["conditionsStore/typesArray"]
    }
  },
  methods: {
    addTypeItem() {
      this.$store.commit('conditionsStore/addTypeItem')
    },
    updateValue(item) {
      let newItem = {...item, value: event.target.value}
      this.$store.commit('conditionsStore/changeTypeValue', newItem)
      this.updateDisables()
    },
    updateDisables() {
      this.selectableTypes.forEach(mainItem => {
        mainItem.selected = !!this.typesArray.find(item => item.value === mainItem.value);
      })
    }
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
