<template>
  <header class="bg-white z-50 inset-x-0 top-0 sticky">
    <nav class="flex items-center justify-between px-5 py-2 shadow-md shadow-gray-400" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="flex items-center -m-1.5 p-1.5">
          <img class="h-12 w-auto me-3" src="../public/images/logo.png" alt="" />
          <h1 class="text-xl text-black">Yuk Infaq</h1>
        </a>
      </div>
      <div class="flex lg:flex-1 lg:justify-end">
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
          <span class="mdi mdi-logout text-2xl"></span>
        </a>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<script setup>
</script>