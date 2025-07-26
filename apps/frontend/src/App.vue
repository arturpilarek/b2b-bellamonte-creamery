<template>
  <main>
    <component :is="layout">
      <RouterView />
    </component>
  </main>
</template>

<script setup lang="ts">
import { provide, shallowRef } from 'vue';
import layouts from './layouts/layouts';
import router from './router';

const layout = shallowRef<any>('DefaultLayout');

router.afterEach((to) => {
  console.log(layouts)
  console.log(to.meta);
  layout.value = layouts[to.meta.layout as keyof typeof layouts] || layouts.DefaultLayout;
});

provide('app:layout', layout);
</script>