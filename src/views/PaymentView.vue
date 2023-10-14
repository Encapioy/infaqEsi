<script setup>
import FooterComp from "../components/FooterComp.vue";
import BackButton from "../components/BackButton.vue";
import infaq from "../api/infaq.js"
import { ref, reactive, onBeforeMount } from "vue"
import { useRoute } from "vue-router";

const route = useRoute()

const nominal = ref([
    {
        angka: "100.000",
        value: 100000
    },
    {
        angka: "250.000",
        value: 250000
    },
    {
        angka: "500.000",
        value: 500000
    },
    {
        angka: "1.000.000",
        value: 1000000
    },
    {
        angka: "1.500.000",
        value: 1500000
    },
    {
        angka: "2.000.000",
        value: 2000000
    },
])

const form = reactive({
    id: route.params.id,
    judul: '',
    deskripsi: '',
    gambar: '',
    nominal: '',
    nama: '',
})

function pilihNominal(value) {
    form.nominal = value
}

onBeforeMount(async () => {
    const res = await infaq.find(route.params.id)

    form.judul = res.judul
    form.deskripsi = res.deskripsi
    form.gambar = res.gambar
})
</script>

<template>
    <div class="container px-3 lg:px-11 py-4">
        <div class="grid grid-cols-1 gap-4">
            <div class="w-full h-full rounded shadow-md overflow-hidden">
                <div class="h-48">
                    <img :src="storage + '/images/' + form.gambar" class="object-cover w-full h-full"
                        alt="Fissure in Sandstone" />
                    <h5 class="text-xl text-white -mt-10 mb-5 ms-5">{{ form.judul }}</h5>
                </div>
                <div class="divide-y divide-gray-600">
                    <div class="p-5">
                        <div class="flex items-center my-4">
                            <div>
                                <span class="mdi mdi-cash-multiple text-2xl me-4"></span>
                            </div>
                            <div class="w-full relative">
                                <input type="number" placeholder="Nominal Infaq" v-model="form.nominal"
                                    class="w-full text-gray-900 border-b-2 outline-none placeholder-transparent focus:border-gray-400 duration-500 peer">
                                <label
                                    class="absolute left-0 text-sm -top-5 text-gray-400 capitalize peer-placeholder-shown:-top-0 peer-placeholder-shown:text-base cursor-text peer-focus:text-sm peer-focus:-top-5 duration-200">Nominal
                                    Infaq</label>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 my-4">
                            <button v-for="item in nominal" :key="item.value" @click="pilihNominal(item.value)"
                                class="rounded text-green-600 outline outline-1 outline-green-600 mb-2 me-2 text-center p-1 active:bg-green-300 active:text-green-600 focus:bg-green-600 focus:text-white duration-500">Rp.{{
                                    item.angka }}</button>
                        </div>
                        <div class="flex items-center my-4">
                            <div>
                                <span class="mdi mdi-account text-2xl me-4"></span>
                            </div>
                            <div class="w-full relative">
                                <input type="text" placeholder="Nama"
                                    class="w-full text-gray-900 border-b-2 outline-none placeholder-transparent focus:border-gray-400 duration-500 peer">
                                <label
                                    class="absolute left-0 text-sm -top-5 text-gray-400 capitalize peer-placeholder-shown:-top-0 peer-placeholder-shown:text-base cursor-text peer-focus:text-sm peer-focus:-top-5 duration-200">Nama</label>
                            </div>
                        </div>
                        <button type="submit"
                            class="rounded text-white bg-blue-800 px-4 py-2 shadow shadow-gray-400 w-full mt-10 hover:shadow-lg">
                            <span class="text-center uppercase">infaq sekarang</span>
                        </button>
                    </div>
                    <div class="my-4 p-5">
                        <h5 class="text-xl font-semibold mb-5" v-text="form.judul"></h5>
                        <p class="text-sm font-semibold mb-3" v-text="form.deskripsi"></p>
                    </div>
                </div>
            </div>
        </div>
        <BackButton />
    </div>

    <FooterComp />
</template>
