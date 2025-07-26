<template>
  <div class="min-h-screen flex flex-col">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </header>
    <slot />
  </div>
</template>