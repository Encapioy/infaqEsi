<template>
  <header class="bg-white z-50 inset-x-0 top-0 sticky">
    <nav class="flex items-center justify-between px-5 py-2 shadow-md shadow-gray-400" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="flex items-center -m-1.5 p-1.5">
          <img class="h-12 w-auto me-3" src="../public/images/logo.png" alt="" />
          <h1 class="text-xl text-black">Yuk Infaq</h1>
        </a>
      </div>
      <div class="relative flex lg:flex-1 lg:justify-end">
        <button v-if="getToken" @click="deleteCookie('token')" class="text-sm font-semibold leading-6 text-gray-900">
          <span class="mdi mdi-logout text-2xl"></span>
        </button>
        <RouterLink v-else to="/infaq-login" class="absolute right-1 -top-4 text-sm font-semibold leading-6 text-gray-900">
          <span class="mdi mdi-login text-2xl"></span>
        </RouterLink>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<script setup>
import { useToken } from "../src/stores/auth.js";
import { provide } from "vue";

const getToken = useToken()

function deleteCookie(name) {
  // Mengatur tanggal kedaluwarsa ke masa lalu
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;

  location.reload()
}

const salin = (text) => {
  navigator.clipboard.writeText(text)
  alert('nomor rekening sudah tersalin')
} 

provide('salin', salin);


</script>