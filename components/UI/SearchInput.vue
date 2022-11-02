<template>
  <div class="inputContainer">
    <input type="text" :placeholder="placeholderProp" class="searchInput"/>
    <img :src="iconPath" alt="icon" v-if="iconPath" class="searchIcon"/>
  </div>
</template>

<script>
export default {
  name: "search-input",
  props: {
    placeholderProp: {
      type: String,
      required: true
    },
    iconPath: {
      type: String
    }
  }
}
</script>

<style scoped>
.inputContainer{
  position: relative;
  width: 500px;
}
.searchInput{
  height: 45px;
  padding: 15px 40px 15px 15px;
  border: 2px solid gray;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  position: relative;
  width: 100%;
}
.searchInput:focus{
  border: 2px solid #000;
}
.searchIcon{
  width: 25px;
  height: 25px;
  position: absolute;
  right: 15px;
  top: 10px;
  cursor: pointer;
}
</style>
