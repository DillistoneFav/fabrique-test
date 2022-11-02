<template>
  <div class="navbar container">
    <div class="navbarTop">
      <search-input placeholder-prop="placeholder" icon-path="/search.svg"/>
      <div class="profileBlock">
        <img src="/profilePic.jpg" alt="profile pic" class="profileImage" loading="lazy"/>
        <div class="profileInfo">
          <span class="profileName">Kirill Melnikov</span>
          <span class="profileRole">Administrator</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from "~/components/UI/SearchInput";

export default {
  name: 'Navbar',
  components: {
    SearchInput
  },
  data() {
    return {
      placeholder: 'placeholder',
    }
  },
  layout: 'content'
}
</script>

<style scoped>
.navbar{
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100px;
}
.navbarTop{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.profileBlock{
  display: flex;
  align-items: center;
  cursor: pointer;
}
.profileBlock .profileInfo{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.profileBlock .profileInfo .profileName{
  font-size: 24px;
  font-weight: bold;
}
.profileBlock .profileInfo .profileRole{
  font-size: 18px;
  line-height: 15px;
  color: gray;
}
.profileImage{
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 1rem;
}
</style>
