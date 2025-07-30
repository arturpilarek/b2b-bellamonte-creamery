<script setup>
import { ref } from 'vue'

const emit = defineEmits(['submit', 'testLogin', 'forgotPassword'])

const form = ref({
  email: '',
  password: ''
})

const errorMessage = ref('')

const handleLogin = () => {
  if (!form.value.email || !form.value.password) {
    errorMessage.value = 'Please enter both email and password to continue'
    return
  }
  errorMessage.value = ''
  emit('submit', form.value)
}

const handleTestLogin = () => {
  form.value.email = 'test@test.com'
  form.value.password = 'test'
  errorMessage.value = ''
  emit('testLogin', form.value)
}

const handleForgotPassword = () => {
  emit('forgotPassword')
}
</script>

<template>
    <div class="text-center mb-4">
        <h1 class="text-3xl font-heading text-midnight mb-1">Welcome Back</h1>
        <p class="text-muted text-sm leading-relaxed">
        Sign in to your Bellamonte Creamery B2B Portal
        </p>
    </div>
  <div 
    v-if="errorMessage"
    class="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"
    role="alert"
    aria-live="polite"
  >
    {{ errorMessage }}
  </div>
  <form @submit.prevent="handleLogin" class="flex flex-col gap-3">
    <div class="flex flex-col gap-2">
      <label for="email" class="block text-sm font-medium text-midnight">Email Address</label>
      <input
        v-model="form.email"
        id="email"
        type="email"
        autocomplete="username"
        placeholder="Enter your email"
        class="w-full px-3 py-2.5 border border-slate/30 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-200"
        required
      />
    </div>
    <div class="flex flex-col gap-2">
      <label for="password" class="block text-sm font-medium text-midnight">Password</label>
      <input
        v-model="form.password"
        id="password"
        type="password"
        autocomplete="current-password"
        placeholder="Enter your password"
        class="w-full px-3 py-2.5 border border-slate/30 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-200"
        required
      />
    </div>
    <div class="flex flex-col gap-3 pt-4">
      <button 
        type="submit" 
        class="w-full py-2.5 bg-gold hover:bg-gold/90 text-white font-medium rounded-lg transition-colors duration-200 shadow-sm cursor-pointer"
      >
        Sign In
      </button>
      <button 
        type="button" 
        @click="handleTestLogin" 
        class="w-full py-2.5 bg-slate/10 hover:bg-slate/20 text-slate font-medium rounded-lg transition-colors duration-200 cursor-pointer"
      >
        Demo Login
      </button>
    </div>
    <div class="text-center pt-4">
      <button 
        type="button"
        @click="handleForgotPassword"
        class="text-sm text-muted hover:text-midnight transition-colors duration-200 hover:underline cursor-pointer"
      >
        Forgot your password?
      </button>
    </div>
  </form>
</template>
