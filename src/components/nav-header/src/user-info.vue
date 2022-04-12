<template>
  <div class="nav-info">
    <div class="info">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar
            size="medium"
            class="avatar"
            src="https://upload.jianshu.io/users/upload_avatars/1102036/c3628b478f06.jpeg"
          ></el-avatar>
          <span class="name">{{ name }}</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              icon="el-icon-circle-close"
              @click="handleExitClick"
              >退出系统</el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-info" divided
              >个人信息</el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-unlock">修改密码</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import localCache from '@/utils/cache'

const store = useStore()
const name = computed(() => store.state.login.userInfo.name)

const router = useRouter()

const handleExitClick = () => {
  localCache.deleteCache('token')
  router.push('/main')
}
</script>

<style scoped lang="less">
.nav-info {
  display: flex;
  align-items: center;

  .el-dropdown-link {
    display: flex;
    align-items: center;
    cursor: pointer;

    .avatar {
      width: 30px;
      height: 30px;
    }
    .name {
      margin-left: 8px;
    }
  }
}
</style>
