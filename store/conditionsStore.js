// holds your root state
export const state = () => ({
  pollsConditions: [],
  ageArray: [
    {id: 0, from: 10, to: 20},
  ],
  typesArray: [
    {id: 0, value: 'Gold'},
  ],
  statusesArray: [
    {id: 0, value: 'Активна'},
  ],
})

// contains your actions
export const actions = {

}
// contains your mutations
export const mutations = {
  addAgeItem(state) {
    state.ageArray.push({id: Math.max(...state.ageArray.map(item => item.id), 0) + 1, from: undefined, to: undefined})
  },
  changeAgeValue(state, changedItem) {
    let index = state.ageArray.findIndex(item => item.id === changedItem.id)
    state.ageArray.splice(index, 1, changedItem)
  },

  addTypeItem(state) {
    state.typesArray.push({id: Math.max(...state.typesArray.map(item => item.id), 0) + 1, value: ''})
  },
  changeTypeValue(state, changedItem) {
    let index = state.typesArray.findIndex(item => item.id === changedItem.id)
    state.typesArray.splice(index, 1, changedItem)
  },

  addStatusItem(state) {
    state.statusesArray.push({id: Math.max(...state.statusesArray.map(item => item.id), 0) + 1, value: ''})
  },
  changeStatusValue(state, changedItem) {
    let index = state.statusesArray.findIndex(item => item.id === changedItem.id)
    state.statusesArray.splice(index, 1, changedItem)
  }
}
// your root getters
export const getters = {
  ageArray: state => state.ageArray,
  typesArray: state => state.typesArray,
  statusesArray: state => state.statusesArray,
}
