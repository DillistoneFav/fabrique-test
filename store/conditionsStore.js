// holds your root state
export const state = () => ({
  pollsConditions: {
    ageArray: [
      // {id: 0, from: 10, to: 20},
    ],
    typesArray: [
      // {id: 0, value: 'Gold'},
    ],
    statusesArray: [
      // {id: 0, value: 'Активна'},
    ],
  },
  selectedConditions: [],
  selectableConditions: [
    {id: 0, text: 'Возраст респондента', value: 'age'},
    {id: 1, text: 'Тип карты лояльности', value: 'type'},
    {id: 2, text: 'Статус карты лояльности', value: 'status'},
  ],
  conditionsCount: 0
})

// contains your actions
export const actions = {

}
// contains your mutations
export const mutations = {
  addAgeItem(state) {
    state.pollsConditions.ageArray.push(
      {
        id: Math.max(...state.pollsConditions.ageArray.map(item => item.id), 0) + 1,
        from: undefined,
        to: undefined
      })
  },
  changeAgeValue(state, changedItem) {
    let index = state.pollsConditions.ageArray.findIndex(item => item.id === changedItem.id)
    state.pollsConditions.ageArray.splice(index, 1, changedItem)
  },

  addTypeItem(state) {
    state.pollsConditions.typesArray.push(
      {
        id: Math.max(...state.pollsConditions.typesArray.map(item => item.id), 0) + 1,
        value: ''
      })
  },
  changeTypeValue(state, changedItem) {
    let index = state.pollsConditions.typesArray.findIndex(item => item.id === changedItem.id)
    state.pollsConditions.typesArray.splice(index, 1, changedItem)
  },

  addStatusItem(state) {
    state.pollsConditions.statusesArray.push(
      {
        id: Math.max(...state.pollsConditions.statusesArray.map(item => item.id), 0) + 1,
        value: ''
      })
  },
  changeStatusValue(state, changedItem) {
    let index = state.pollsConditions.statusesArray.findIndex(item => item.id === changedItem.id)
    state.pollsConditions.statusesArray.splice(index, 1, changedItem)
  },

  addSelectedCondition(state, item) {
    state.selectedConditions.push(item)
  },

  addCondition(state) {
    state.conditionsCount += 1
  },
  removeCondition(state, type) {
    state.conditionsCount -= 1
    state.pollsConditions[type] = []
    state.selectedConditions.pop()
  },
  removeSelectedCondition(state, value) {
    state.selectedConditions.filter(item => item !== value)
  }
}
// your root getters
export const getters = {
  ageArray: state => state.pollsConditions.ageArray,
  typesArray: state => state.pollsConditions.typesArray,
  statusesArray: state => state.pollsConditions.statusesArray,
  pollsConditions: state => state.pollsConditions,
  selectedConditions: state => state.selectedConditions,
  selectableConditions: state => state.selectableConditions,
  conditionsCount: state => state.conditionsCount
}
