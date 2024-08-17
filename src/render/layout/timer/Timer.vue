<script setup>
import { ref } from 'vue'


const time = ref('25:01');
</script>

<template>
	<div class="timer">
    <div class="cicle">
      <div class="time">
        25:01
      </div>
      <div>Short Break</div>
    </div>
    <button class="change"></button>
    <div class="bottom">
      <div class="left">
        <div class="cal">1/12</div>
        <div class="reset">Reset</div>
      </div>
      <div class="right">
        
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>

</style>