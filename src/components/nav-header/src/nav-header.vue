<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"
    ></i>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineEmits } from 'vue'
const isFold = ref(false)
const emit = defineEmits(['foldChange'])

const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
</script>
<style scoped lang="less">
.nav-header {
  .fold-menu {
    font-size: 28px;
    cursor: pointer;
  }
}
</style>
