<script lang="ts">
import type { CheckboxProps } from "naive-ui";
import type { ComponentTheme } from "../types/theme";
import type { IconProps } from "./Icon.vue";
import type { IconBtnProps } from "./IconBtn.vue";
import { NCheckbox } from "naive-ui";
import { checkboxGroupInjectionKey } from "naive-ui/es/checkbox/src/CheckboxGroup";
import { tv } from "tailwind-variants";
import { computed, inject, useAttrs } from "vue";
import theme from "../themes/checkbox-btn";
import { camelCaseObject } from "../utils/object";
import Icon from "./Icon.vue";
import IconBtn from "./IconBtn.vue";

export interface CheckboxBtnProps extends /* @vue-ignore */ CheckboxProps {
  uncheckBtnProps?: IconBtnProps;
  checkedBtnProps?: IconBtnProps;
  showCheckIcon?: boolean;
  label?: string;
  icon?: IconProps["icon"];
  ui?: ComponentTheme<typeof theme>;
}

const defaultCheckedProps: IconBtnProps = {
  type: "primary",
  focusable: false,
};
const defaultUnCheckedProps: IconBtnProps = {
  secondary: true,
  focusable: false,
};
</script>

<script setup lang="ts">
const {
  uncheckBtnProps = defaultUnCheckedProps,
  checkedBtnProps = defaultCheckedProps,
  showCheckIcon: checkIcon = false,
  ui: propsUi,
} = defineProps<CheckboxBtnProps>();

const checkboxGroup = inject(checkboxGroupInjectionKey, null);
const checked = defineModel<string | number | boolean | undefined>("checked");
const attrs = camelCaseObject(useAttrs());
const finalChecked = computed(() => {
  if (checkboxGroup) {
    return checkboxGroup.valueSetRef.value.has(attrs.value as string);
  }
  return checked.value;
});
const btnProps = computed(() => {
  if (attrs.checkedValue) {
    return finalChecked.value === attrs.checkedValue ? checkedBtnProps : uncheckBtnProps;
  }
  return finalChecked.value ? checkedBtnProps : uncheckBtnProps;
});

const checkedIconBg = computed(() => {
  if ((checkedBtnProps.type || checkedBtnProps.color) && !checkedBtnProps.ghost && !checkedBtnProps.secondary) {
    if (checkedBtnProps.textColor) {
      return `bg-[var(--n-text-color)] text-white`;
    }
    return "text-[var(--n-color)] bg-white";
  }
  return "bg-[var(--n-text-color)] text-white";
});

const ui = computed(() => tv({ extend: theme, ...propsUi })());
</script>

<template>
  <NCheckbox v-model:checked="checked" v-bind="$attrs">
    <IconBtn :class="ui.iconBtn()" :icon v-bind="btnProps">
      <slot>{{ label }}</slot>
      <span
        v-if="checkIcon && finalChecked" :class="ui.checkedIcon({ class: checkedIconBg })"
      >
        <Icon icon="icon-[lucide--check]" size="12px" />
      </span>
    </IconBtn>
  </NCheckbox>
</template>

<style scoped>
:deep(.n-checkbox-box-wrapper) {
  display: none;
}
:deep(.n-checkbox__label) {
  padding: 0;
}
</style>
