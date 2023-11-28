<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';

export default {
  components: {
    AppFooter,
    AppHeader
  }
  
};
</script>

<template>
  <AppHeader></AppHeader>

  <main>

    <router-view></router-view>
    
  </main>

  <AppFooter></AppFooter>
</template>

<style scoped>

main{
  margin-top: 120px;
  margin-bottom: 150px;
  background-color: rgb(20, 20, 40);
  height: calc(100vh - 270px);
  overflow:auto;
}
h1{
  color: white;
  font-size: 40px;
}
#h1-main-container{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90%;
}

</style>
