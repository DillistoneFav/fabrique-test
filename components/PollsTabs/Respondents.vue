<template>
  <div class="content">
    <div class="Heading">
      <span>Добавить опрос</span>
    </div>
    <div class="conditions">
      <conditionsLayout/>
      <conditionsLayout/>
      <conditionsLayout/>
    </div>
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
  font-size: 28px;
  color: gray;
  font-weight: bold;
  padding: 0 3rem;
  margin-bottom: 1rem;
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
  margin: 1rem 3rem 0;
}
.addConditionsContainer img{
  height: 30px;
  width: 30px;
  margin-bottom: 0.5rem;
}



.conditions .conditionContainer:nth-child(1){
  background: #fff2e5;
}
.conditions .conditionContainer:nth-child(2){
  background: #F8FAFF;
}
.conditions .conditionContainer:nth-child(3){
  background: #FAFFF8;
}
</style>
