<template>
  <div class="content container">
    <div class="Heading">
      <span>Добавить опрос</span>
    </div>
    <slot/>
    <div class="addConditionsContainer">
      <img alt="plus icon" src="/plus.svg" loading="lazy"/>
      <p>Нажмите, чтобы добавить условие выборки</p>
      <p>Все условия связываются между собой логическим "И"</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RespondentsTabContent'
}
</script>

<style scoped>
.Heading{
  height: 100px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  padding-bottom: 1rem;
  font-size: 28px;
  color: gray;
  font-weight: bold;
}
.content{
  padding-bottom: 1rem;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
}
.addConditionsContainer{
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
}
.addConditionsContainer img{
  height: 30px;
  width: 30px;
  margin-bottom: 0.5rem;
}
</style>
