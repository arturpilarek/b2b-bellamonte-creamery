<script setup>
import logo from '@/assets/logo.svg'
</script>

<template>
  <div class="relative z-10 bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-2xl max-w-md w-full mx-4 border border-white/20">
    <div class="flex items-center justify-center mb-6">
      <img :src="logo" alt="Bellamonte Creamery Logo" width="80" height="168" class="w-auto h-20" />
    </div>
    <slot />
  </div>
</template>
