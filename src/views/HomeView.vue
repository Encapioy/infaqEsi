<template>
    <div class="container px-3 lg:px-11 py-4">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div class="w-full h-full rounded shadow-md overflow-hidden" v-for="item in infaq" :key="infaq.id">
                <div class="h-48">
                    <img src="../../public/images/infaq-tanah.jpg" class="object-cover w-full h-full"
                        alt="Fissure in Sandstone" />
                </div>
                <div class="p-2 divide-y divide-gray-200">
                    <div class="p-3">
                        <h5 class="text-xl text-white -mt-14 mb-5">{{ item.judul }}</h5>
                        <p class="text-sm mb-3">{{ item.deskripsi }}</p>
                        <routerLink :to="`/infaq-find/${ item.id }`">
                            <button class="rounded flex text-white bg-yellow-500 px-2 py-px shadow shadow-gray-400">
                            <span class="text-xs uppercase">More Info...</span>
                            </button>
                        </routerLink>
                    </div>
                    <div class="my-4 p-3">
                        <p class="text-sm">Bank: <span class="font-bold">{{ item.bank }}</span></p>
                        <p class="text-sm mb-4">No Rekening: <span class="font-bold">{{ item.rekening }}</span></p>
                        <div class="flex justify-between">
                            <button
                                @click="salin(item.rekening)"
                                class="rounded flex items-center text-blue-400 outline outline-1 outline-blue-400 px-3 py-px">
                                <span class="mdi mdi-content-copy me-1"></span>
                                <span class="uppercase">salin</span>
                            </button>
                            <routerLink to="/infaq-payment" class="rounded text-white bg-green-500 px-4 py-2 shadow shadow-gray-400 hover:shadow-lg">
                                <span class="uppercase">infaq sekarang</span>
                            </routerLink>
                        </div>
                    </div>
                    <div class="my-4 p-3">
                        <div class="mt-3 bg-orange-100 w-full h-2.5 rounded-full"></div>
                        <div class="flex justify-between">
                            <p class="text-gray-400 font-semibold">Terkumpul <br> <span
                                    class="text-black font-semibold">Rp.{{ item.terkumpul }}</span></p>
                            <p class="text-gray-400 font-semibold">Dibutuhkan <br> <span
                                    class="text-black font-semibold">Rp.{{ item.target }}</span></p>
                        </div>
                    </div>
                     <div class="p-3">
                        <div class="flex justify-start">
                            <routerLink :to="`/infaq-edit/${ item.id }`" class="rounded text-white bg-green-500 px-4 py-2 shadow shadow-gray-400 hover:shadow-lg">
                                <span class="uppercase">ubah</span>
                            </routerLink>
                            <button @click="hapus(item.id)" class="rounded text-white bg-red-500 px-4 py-2 mx-4 shadow shadow-gray-400 hover:shadow-lg">
                                <span class="uppercase">hapus</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <FooterComp />
</template>

<script setup>
import FooterComp from "../components/FooterComp.vue";
import { ref } from "vue";
import axios from "axios";

function salin(text) {
    navigator.clipboard.writeText(text)
    alert('Alhamdulillah. No Rek sudah tersalin, silahkan di Paste ke aplikasi perbankan anda.')
}

const hapus = (id) => {
    axios.delete(url + '/' + id)
    .then(response => alert('berhasil menghapus kategori'))

    setTimeout(() => {
            location.reload()
    }, 1000);
}

const infaq = ref([])

const url = 'http://donasi-api.test/api/infaq'

axios.get(url)
.then(response => (infaq.value = response.data))
</script>
