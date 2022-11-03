<template>
  <div class="tabsContainer">
    <div class="tabs">
      <div
        v-for="tab in names"
        :key="tab.name"
        :class="['tabHead', {'selected': selectedTab === tab.name}]"
        @click="changeTab(tab.name)"
      >
        {{tab.label}}
      </div>
    </div>
    <slot/>
  </div>

</template>

<script setup>
  const props = defineProps({
    names: {
      type: Array,
      required: true
    },
    selectedTab: {
      type: String
    }
  })

  const emit = defineEmits(['changeTab'])
  const changeTab = (newTab) => {
    emit('changeTab', newTab)
  }
</script>

<style scoped>
.tabsContainer{

}
.tabs{
  display: flex;
  width: 100%;
  border-bottom: 2px solid #009118;
  padding: 0 2rem;
}
.tabHead{
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  color: #009118;
  font-size: 24px;
  cursor: pointer;
  border-bottom: 3px solid #fff;
}
.selected{
  border-bottom: 3px solid #a9d902;
  font-weight: bold;
  color: #000;
}
</style>
