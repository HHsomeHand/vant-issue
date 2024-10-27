<script setup>
import { ref, watchEffect } from 'vue'

const active = ref(0);

watchEffect(() => {
  console.log(active.value);
});

setInterval(() => {
  console.log(active.value);
}, 1000);
</script>

<template>
  <div class="app">
    <router-view></router-view>
    <h2>active: {{ active }}</h2>
    
    <p>
      直接在浏览器地址框内输入 
      <a href="http://localhost:5174/favor">http://localhost:5174/favor</a>
      active的值是0, 得手动切换, active的值才会被改变
    </p>
    <van-tabbar v-model="active" route>
      <van-tabbar-item to="/home">home</van-tabbar-item>
      <van-tabbar-item to="/favor">favor</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped>

</style>