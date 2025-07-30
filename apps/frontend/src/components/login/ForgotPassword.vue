<script setup>
import { ref } from 'vue'

const emit = defineEmits(['submit', 'backToLogin'])

const email = ref('')
const isSubmitted = ref(false)

const handleSubmit = () => {
  if (!email.value) {
    return
  }
  isSubmitted.value = true
  emit('submit', email.value)
  setTimeout(() => {
    isSubmitted.value = false
    email.value = ''
  }, 3000)
}

const goBackToLogin = () => {
  emit('backToLogin')
}
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="text-center">
      <h2 class="text-2xl font-heading text-midnight mb-2">Reset Password</h2>
      <p class="text-muted text-sm">
        Enter your email address and we'll send you a link to reset your password.
      </p>
    </div>
    <div v-if="isSubmitted" class="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm text-center">
      Password reset link sent! Check your email.
    </div>
    <form v-else @submit.prevent="handleSubmit" class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <label for="reset-email" class="block text-sm font-medium text-midnight">Email Address</label>
        <input
          v-model="email"
          id="reset-email"
          type="email"
          autocomplete="username"
          placeholder="Enter your email"
          class="w-full px-3 py-2.5 border border-slate/30 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-200"
          required
        />
      </div>
      <button 
        type="submit" 
        class="w-full py-2.5 bg-gold hover:bg-gold/90 text-white font-medium rounded-lg transition-colors duration-200 shadow-sm cursor-pointer"
      >
        Send Reset Link
      </button>
    </form>

    <div class="text-center">
      <button 
        @click="goBackToLogin"
        class="text-sm text-muted hover:text-midnight transition-colors duration-200 hover:underline cursor-pointer"
      >
        Back to Sign In
      </button>
    </div>
  </div>
</template>
