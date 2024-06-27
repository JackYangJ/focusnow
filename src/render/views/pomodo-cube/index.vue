<template>
   <div class="pomodo-cube-container">
      
   </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {useCache} from '@/render/hooks/useCache'
const {wsCache}=useCache('localStorage')

const count = ref('消息提醒')


</script>

<style lang="scss" scoped>

</style>
