<template>
  <div class="hy-breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <template v-for="item in props.breadcrumbs" :key="item.path">
        <el-breadcrumb-item :to="{ path: item.path }">
          {{ item.name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>
<script setup lang="ts">
import { PropType, defineProps } from 'vue'
import { IBreadcrumb } from '../types'
const props = defineProps({
  breadcrumbs: {
    type: Array as PropType<IBreadcrumb[]>,
    default: () => [{ name: '', path: '' }]
  }
})
</script>

<style scoped lang="less"></style>
