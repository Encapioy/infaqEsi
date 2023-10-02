<template>
    <div class="container px-3 lg:px-11 py-4">
        <div class="grid grid-cols-1 gap-4">
            <div class="w-full h-full rounded shadow-md overflow-hidden">
                <div class="pt-5">
                    <h2 class="text-3xl lg:text-5xl uppercase font-semibold text-center">Login</h2>
                </div>
                <div class="p-5">

                    <!-- username  -->
                    <div class="flex items-center my-4">
                        <div>
                            <span class="mdi mdi-account text-2xl me-4"></span>
                        </div>
                        <div class="w-full relative">
                            <input type="text" placeholder="Username"
                                class="w-full text-gray-900 border-b-2 outline-none placeholder-transparent focus:border-gray-400 duration-500 peer">
                            <label
                                class="absolute left-0 text-sm -top-5 text-gray-400 capitalize peer-placeholder-shown:-top-0 peer-placeholder-shown:text-base cursor-text peer-focus:text-sm peer-focus:-top-5 duration-200">Username</label>
                        </div>
                    </div>
                    <div class="ps-10 -mt-3">
                        <p class="peer-invalid:invisible text-pink-600 text-sm">
                            Kolom harus diisi
                        </p>
                    </div>

                    <!-- password  -->
                    <div class="flex items-center my-4">
                        <div>
                            <span class="mdi mdi-key text-2xl me-4"></span>
                        </div>
                        <div class="w-full relative">
                            <input type="email" placeholder="Password"
                                class="w-full text-gray-900 border-b-2 outline-none placeholder-transparent focus:border-gray-400 duration-500 peer">
                            <label
                                class="absolute left-0 text-sm -top-5 text-gray-400 capitalize peer-placeholder-shown:-top-0 peer-placeholder-shown:text-base cursor-text peer-focus:text-sm peer-focus:-top-5 duration-200">Password</label>
                        </div>
                    </div>

                    <!-- submit  -->
                    <button type="submit"
                        class="rounded text-white bg-blue-800 px-4 py-2 shadow shadow-gray-400 w-full mt-10 hover:shadow-lg">
                        <span class="text-center uppercase">submit</span>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <FooterComp />
</template>

<script setup>
import FooterComp from "../components/FooterComp.vue";
</script>
