<template>
  <div class="container">
    <TabsWrapper
      :names="names"
      :selectedTab="selectedTab"
      @changeTab="changeTab"
    >
      <div v-if="selectedTab === 'ParamsTab'">
        params
      </div>
      <div v-if="selectedTab === 'QuestionsTab'">
        questions
      </div>
      <div v-if="selectedTab === 'LogicTab'">
        logic
      </div>
      <div v-if="selectedTab === 'ConditionsTab'">
        <conditionsLayout/>
      </div>
      <div v-if="selectedTab === 'RespondentsTab'">
        <RespondentsTabContent/>
      </div>
    </TabsWrapper>
  </div>
</template>

<script>
import ConditionsLayout from "@/components/Conditions/ConditionsLayout";
export default {
  layout: 'poll',
  components: {ConditionsLayout}
}
</script>

<script setup>
import {ref} from "vue"
import RespondentsTabContent from "@/components/PollsTabs/Respondents";

const selectedTab = ref('RespondentsTab')
const names = [
  {name: 'ParamsTab', label: 'Параметры'},
  {name: 'QuestionsTab', label: 'Вопросы'},
  {name: 'LogicTab', label: 'Логика'},
  {name: 'ConditionsTab', label: 'Условия'},
  {name: 'RespondentsTab', label: 'Респонденты'},
]
const changeTab = (newTab) => {
  selectedTab.value = newTab
}
</script>

<style scoped>

</style>
