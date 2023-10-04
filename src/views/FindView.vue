<template>
    <div class="container px-3 lg:px-11 py-4">
        <div class="grid grid-cols-1 gap-4">
            <div class="w-full h-full rounded shadow-md overflow-hidden">
                <div class="h-48">
                    <img src="../../public/images/infaq-tanah.jpg" class="object-cover w-full h-full"
                        alt="Fissure in Sandstone" />
                </div>
                <div class="p-2 divide-y divide-gray-200">
                    <div class="p-3">
                        <h5 class="text-xl text-white -mt-14 mb-5">{{ infaq.judul }}</h5>
                        <p class="text-sm mb-3">{{ infaq.deskripsi }}</p>
                    </div>
                    <div class="my-4 p-3">
                        <p class="text-sm">Bank: <span class="font-bold">{{ infaq.bank }}</span></p>
                        <p class="text-sm mb-4">No Rekening: <span class="font-bold">{{ infaq.rekening }}</span></p>
                        <div class="flex justify-between">
                            <button
                                @click="salin(infaq.rekening)"
                                class="rounded flex items-center text-blue-400 outline outline-1 outline-blue-400 px-3 py-px">
                                <span class="mdi mdi-content-copy me-1"></span>
                                <span class="uppercase">salin</span>
                            </button>
                            <routerLink to="/infaq-payment"
                                class="rounded text-white bg-green-500 px-4 py-2 shadow shadow-gray-400 hover:shadow-lg">
                                <span class="uppercase">infaq sekarang</span>
                            </routerLink>
                        </div>
                    </div>
                    <div class="p-3">
                        <div class="mt-3 bg-orange-100 w-full h-2.5 rounded-full"></div>
                        <div class="flex justify-between">
                            <p class="text-gray-400 font-semibold">Terkumpul <br> <span
                                    class="text-black font-semibold">Rp.{{ infaq.terkumpul }}</span></p>
                            <p class="text-gray-400 font-semibold">Dibutuhkan <br> <span
                                    class="text-black font-semibold">Rp.{{ infaq.target }}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <RouterLink to="/">
            <button class="rounded text-white bg-red-500 px-4 py-2 shadow shadow-gray-400 w-40 mt-10 hover:shadow-lg">
                <span class="mdi mdi-arrow-left me-1"></span>
                <span class="uppercase">kembali</span>
            </button>
        </RouterLink>
    </div>

    <FooterComp />
</template>

<script setup>
import FooterComp from "../components/FooterComp.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

function salin(text) {
    navigator.clipboard.writeText(text)
    alert('Alhamdulillah. No Rek sudah tersalin, silahkan di Paste ke aplikasi perbankan anda.')
}

const route = useRoute();
const id = route.params.id;

console.log(id);

const infaq = ref([])
const url = 'http://donasi-api.test/api/infaq'

axios.get(url + '/' + id)
    .then(response => (infaq.value = response.data))

</script>
