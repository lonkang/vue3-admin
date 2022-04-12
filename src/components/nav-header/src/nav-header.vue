<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"
    ></i>

    <div class="content">
      <bread-crumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineEmits, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

import BreadCrumb from '@/base-ui/breadcrumb'
import UserInfo from './user-info.vue'

import { pathMapBreadcrumbs } from '@/utils/map-menus'

const isFold = ref(false)

const emit = defineEmits(['foldChange'])

const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}

const breadcrumbs = computed(() => {
  const path = useRoute().path
  const userMenus = useStore().state.login.userMenus
  return pathMapBreadcrumbs(userMenus, path)
})
</script>
<style scoped lang="less">
.nav-header {
  display: flex;
  align-items: center;
  flex: 1;

  .menu-icon {
    font-size: 28px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 18px;
  }
}
</style>
