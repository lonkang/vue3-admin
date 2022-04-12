<template>
  <el-form ref="formRef" :model="account" label-width="60px" :rules="rules">
    <el-form-item label="账号" prop="name">
      <el-input v-model="account.name" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="account.password" show-password />
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, computed, ref } from 'vue'
import type { PropType } from 'vue'

import { ElForm } from 'element-plus'
import { ElMessage } from 'element-plus'

import { Account } from '../types'
import localCache from '@/utils/cache'
import { useStore } from 'vuex'
import { rules } from '../config/account-config'
const store = useStore()

const props = defineProps({
  modelValue: {
    modelValue: Object as PropType<Account>,
    default: () => ({ name: '', password: '' })
  }
})
const emit = defineEmits(['update:modelValue'])

const account = computed({
  get: () => props.modelValue,
  set: (newValue) => emit('update:modelValue', newValue)
})

// 验证form的函数
const formRef = ref<InstanceType<typeof ElForm>>()
const accountLoginAction = (isKeep: boolean) => {
  // 1.验证是否成功
  formRef.value?.validate((valid) => {
    if (valid) {
      // 登录逻辑
      const name = account.value.name
      const password = account.value.password

      // 保存账号和密码
      if (isKeep) {
        localCache.setCache('name', name)
        localCache.setCache('password', password)
      }

      // 登录
      store.dispatch('login/accountLoginAction', { name, password })
    } else {
      ElMessage.error('账号或者密码错误~')
    }
  })
}
defineExpose({
  accountLoginAction
})
</script>
<style lang=""></style>
