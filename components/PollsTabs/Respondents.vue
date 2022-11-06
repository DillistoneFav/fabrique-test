<template>
  <div class="content">
    <div class="Heading">
      <span>Добавить опрос</span>
    </div>
    <div class="conditions" v-for="condition in conditions">
      <conditionsLayout :number="condition"/>
      <div class="connect" v-if="condition > 1">И</div>
    </div>
    <div class="addConditionsContainer" @click="addCondition">
      <img alt="plus icon" src="/plus.svg" loading="lazy"/>
      <p>Нажмите, чтобы добавить условие выборки</p>
      <p>Все условия связываются между собой логическим "И"</p>
    </div>
    <div class="footer">
      <button class="pollTest">Протестировать опрос</button>
      <button class="nextStep" @click="sendRequest">
        Далее
        <img src="/right-arrow-white.svg" alt="right arrow"/>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RespondentsTabContent',
  methods: {
    addCondition() {
      if (this.conditions < Object.keys(this.pollsConditions).length) {
        this.$store.commit('conditionsStore/addCondition')
      } else {
        alert("Невозможно добавить больше условий!")
      }
    },
    async sendRequest() {
      let body = JSON.stringify(this.pollsConditions)
      alert(`будет отправлен запрос с таким телом:\n ${body}`)
      const response = await this.$axios.$post('someurl', body)
      console.log(response)
    },
  },
  computed: {
    pollsConditions() {
      return this.$store.getters["conditionsStore/pollsConditions"]
    },
    conditions() {
      return this.$store.getters["conditionsStore/conditionsCount"]
    }
  },
}
</script>

<style scoped>
.Heading {
  height: 100px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  font-size: 28px;
  color: gray;
  font-weight: bold;
  padding: 0 3rem;
  margin-bottom: 1rem;
}

.content {
  padding-bottom: 1rem;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  height: calc(100vh - 213px);
}

.content::-webkit-scrollbar {
  width: 0.5rem;
}

.content::-webkit-scrollbar-track {
  background-color: #e4e4e4;
  border-radius: 100px;
}

.content::-webkit-scrollbar-thumb {
  background-color: #d4aa70;
  border-radius: 100px;
}

.addConditionsContainer {
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 3px solid lightgray;
  border-radius: 10px;
  color: #009118;
  font-size: 20px;
  cursor: pointer;
  margin: 2rem 3rem;
}

.addConditionsContainer img {
  height: 30px;
  width: 30px;
  margin-bottom: 0.5rem;
}

.footer {
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  background: #dcdcdc;
}

.footer button {
  padding: 0.5rem 1rem;
  width: auto;
  display: flex;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  outline: none;
  border: none;
}

.pollTest {
  color: #009118;
  background: #fff;
}

.nextStep {
  display: flex;
  color: #fff;
  background: #009118;
}

.footer img {
  height: 30px;
  width: 40px;
  margin-left: 0.5rem;
}
.conditions{
  position: relative;
  padding: 1rem 0;
  border-bottom: 1px solid lightgray;
}

.connect {
  position: absolute;
  padding: 1rem;
  left: 16px;
  top: -24px;
  border-radius: 10px;
  z-index: 999;
  border: 1px solid lightgray;
}

.conditions:nth-child(2) {
  background: #fff2e5;
}

.conditions:nth-child(3), .conditions:nth-child(3) .connect {
  background: #F8FAFF !important;
}

.conditions:nth-child(4), .conditions:nth-child(4) .connect  {
  background: #FAFFF8 !important;
}
</style>
