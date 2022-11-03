<template>
  <button class="myButton">
    <img :src="iconPath" alt="icon" class="plusIcon"/>
    {{text}}
  </button>
</template>

<script>
export default {
  name: "my-button",
  props: {
    text: {
      type: String,
      required: true
    },
    iconPath: {
      type: String,
      required: true
    }
  }
}
</script>

<style style>
.myButton{
  height: 40px;
  border: 2px solid #93BC02;
  background: #fff;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 1rem;
  font-size: 18px;
}
.plusIcon{
  width: 18px;
  height: 18px;
  margin-right: 0.5rem;
}
</style>
