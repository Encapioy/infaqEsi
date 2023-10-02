<template>
    <div class="container px-3 lg:px-11 py-4">
        <div class="grid grid-cols-1 gap-4">
            <div class="w-full h-full rounded shadow-md overflow-hidden">
                <div class="h-48">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" class="object-cover w-full h-full"
                        alt="Fissure in Sandstone" />
                    <h5 class="text-xl text-white -mt-10 mb-5 ms-5">Infaq Tanah</h5>
                </div>
                <div class="divide-y divide-gray-600">
                    <div class="p-5">
                        <div class="flex items-center my-4">
                            <div>
                                <span class="mdi mdi-cash-multiple text-2xl me-4"></span>
                            </div>
                            <div class="w-full relative">
                                <input type="text"
                                    class="w-full text-gray-900 border-b-2 outline-none focus:border-gray-400 duration-500 peer">
                                <label
                                    class="absolute left-0 text-gray-400 -top-1 text-base cursor-text peer-focus:text-sm peer-focus:-top-5 duration-200">Nominal
                                    Infaq</label>
                            </div>
                        </div>
                        <div class="ps-10 -mt-3">
                            <p class="peer-invalid:invisible text-pink-600 text-sm">
                                Kolom harus diisi
                            </p>
                        </div>
                        <div class="grid grid-cols-2 my-4">
                            <button
                                class="rounded text-green-600 outline outline-1 outline-green-600 mb-2 me-2 text-center p-1 active:bg-green-300 active:text-green-600 focus:bg-green-600 focus:text-white duration-500">Rp.100.000</button>
                            <button
                                class="rounded text-green-600 outline outline-1 outline-green-600 mb-2 me-2 text-center p-1 active:bg-green-300 active:text-green-600 focus:bg-green-600 focus:text-white duration-500">Rp.250.000</button>
                            <button
                                class="rounded text-green-600 outline outline-1 outline-green-600 mb-2 me-2 text-center p-1 active:bg-green-300 active:text-green-600 focus:bg-green-600 focus:text-white duration-500">Rp.500.000</button>
                            <button
                                class="rounded text-green-600 outline outline-1 outline-green-600 mb-2 me-2 text-center p-1 active:bg-green-300 active:text-green-600 focus:bg-green-600 focus:text-white duration-500">Rp.1.000.000</button>
                            <button
                                class="rounded text-green-600 outline outline-1 outline-green-600 mb-2 me-2 text-center p-1 active:bg-green-300 active:text-green-600 focus:bg-green-600 focus:text-white duration-500">Rp.1.500.000</button>
                            <button
                                class="rounded text-green-600 outline outline-1 outline-green-600 mb-2 me-2 text-center p-1 active:bg-green-300 active:text-green-600 focus:bg-green-600 focus:text-white duration-500">Rp.2.000.000</button>
                        </div>
                        <div class="flex items-center my-4">
                            <div>
                                <span class="mdi mdi-account text-2xl me-4"></span>
                            </div>
                            <div class="w-full relative">
                                <input type="email"
                                    class="w-full text-gray-900 border-b-2 outline-none focus:border-gray-400 duration-500 peer">
                                <label
                                    class="absolute left-0 text-gray-400 -top-1 text-base cursor-text peer-focus:text-sm peer-focus:-top-5 duration-200">Nama</label>
                            </div>
                        </div>
                        <button type="submit"
                            class="rounded text-white bg-blue-800 px-4 py-2 shadow shadow-gray-400 w-full mt-10 hover:shadow-lg">
                            <span class="text-center uppercase">infaq sekarang</span>
                        </button>
                    </div>
                    <div class="my-4 p-5">
                        <h5 class="text-xl font-semibold mb-5">Infaq Tanah</h5>
                        <p class="text-sm font-semibold mb-3">
                            Lokasi berada di daerah Cipanas, luas tanah 2,5 hektar. Alhamdulillah berada di lokasi yang
                            sangat strategis, dekat dengan pintu tol Cager, memiliki mata air, dan berada di ketinggian
                            sehingga pemandangan dapat lepas sejauh mata memandang.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <FooterComp />
</template>

<script setup>
import FooterComp from "../components/FooterComp.vue";
</script>
