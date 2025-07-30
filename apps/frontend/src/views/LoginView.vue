<script setup>
import { ref } from 'vue'
import loginBg from '@/assets/images/login-bg.webp'
import LoginCard from '@/components/login/LoginCard.vue'
import LoginForm from '@/components/login/LoginForm.vue'
import ForgotPassword from '@/components/login/ForgotPassword.vue'

const currentView = ref('login')

const handleLogin = (formData) => {
  console.log('Login attempt:', formData)
}

const handleTestLogin = (formData) => {
  console.log('Test login:', formData)
}

const handleForgotPassword = (email) => {
  console.log('Password reset requested for:', email)
}

const showForgotPassword = () => {
  currentView.value = 'forgot-password'
}

const showLogin = () => {
  currentView.value = 'login'
}
</script>

<template>
    <div 
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${loginBg})` }"
    >
    </div>
    <LoginCard>
      <LoginForm 
        v-if="currentView === 'login'"
        @submit="handleLogin"
        @test-login="handleTestLogin"
        @forgot-password="showForgotPassword"
      />
      <ForgotPassword 
        v-else-if="currentView === 'forgot-password'"
        @submit="handleForgotPassword"
        @back-to-login="showLogin"
      />
    </LoginCard>
</template>
