<script setup lang="ts">
import { AtForm, type AtFormInst, type AtFormItemConfig, AtIconBtn } from '@gupo-admin/components'
import { NFlex } from 'naive-ui'
import { computed, reactive, shallowRef } from 'vue'

import pca from './pca-code.json'

const formRef = shallowRef<AtFormInst>()
const model = reactive({
  province: null,
  city: null,
  area: null,
})
const currentProvince = computed(() => {
  return pca.find(item => item.code === model.province)
})
const currentCity = computed(() => {
  return currentProvince.value?.children?.find(item => item.code === model.city)
})
const configs: AtFormItemConfig[] = [
  {
    label: '省',
    field: 'province',
    type: 'select',
    span: 8,
    onChange() {
      model.city = null
      model.area = null
    },
    props: { options: pca.map(item => ({ ...item, children: undefined })), labelField: 'name', valueField: 'code' },
  },
  {
    label: '市',
    field: 'city',
    type: 'select',
    span: 8,
    deps: ['province'],
    props: { labelField: 'name', valueField: 'code' },
    listener({ config }) {
      model.area = null
      if (model.province) {
        config.props!.disabled = false
        config.props!.options = currentProvince.value?.children.map(item => ({ ...item, children: undefined })) ?? []
      }
      else {
        config.props!.disabled = true
        config.props!.options = []
      }
    },
  },
  {
    label: '区',
    field: 'area',
    type: 'select',
    span: 8,
    deps: ['city'],
    props: { labelField: 'name', valueField: 'code' },
    listener({ config }) {
      if (model.city) {
        config.props!.disabled = false
        config.props!.options = currentCity.value?.children.map(item => ({ ...item, children: undefined })) ?? []
      }
      else {
        config.props!.disabled = true
        config.props!.options = []
      }
    },
  },
]

function submit() {
  formRef.value?.validate()
}
function reset() {
  formRef.value?.resetValue()
}
</script>

<template>
  <div>
    <AtForm ref="formRef" :n-form-props="{ labelPlacement: 'left' }" :model :configs />
    <NFlex items="center">
      <AtIconBtn type="primary" @click="submit">
        提交
      </AtIconBtn>
      <AtIconBtn @click="reset">
        重置
      </AtIconBtn>
      <span>{{ model }}</span>
    </NFlex>
  </div>
</template>
