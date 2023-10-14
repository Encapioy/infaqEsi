<script setup>
import FooterComp from "../components/FooterComp.vue";
import infaq from "../api/infaq.js"
import { useToken } from "../stores/auth.js"
import { onBeforeMount, ref, inject } from "vue";

const getToken = useToken()
const dataInfaq = ref()
const salin = inject('salin')

const click = () => {
    window.scrollTo({
        top: 0,
        left: 0,
    })
}

const hapus = async (id) => {
    const res = await infaq.destroy(id)

    setTimeout(() => {
        location.reload()
    }, 1000);
}

onBeforeMount(async () => {
    dataInfaq.value = await infaq.all()
})

</script>

<template>
    <div class="container px-3 lg:px-11 py-4">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div class="w-full h-full rounded shadow-md overflow-hidden" v-for="item in dataInfaq" :key="item.id">
                <div class="h-48">
                    <img :src="storage + '/images/' + item.gambar" class="object-cover w-full h-full" />
                </div>
                <div class="p-2 divide-y divide-gray-200">
                    <div class="p-3">
                        <h5 class="text-xl text-white -mt-14 mb-5" v-text="item.judul"></h5>
                        <p class="text-sm mb-3" v-text="item.deskripsi"></p>
                        <routerLink :to="`/infaq-find/${item.id}`">
                            <button class="rounded flex text-white bg-yellow-500 px-2 py-px shadow shadow-gray-400">
                                <span class="text-xs uppercase">More Info...</span>
                            </button>
                        </routerLink>
                    </div>
                    <div class="my-4 p-3">
                        <p class="text-sm">Bank: <span class="font-bold" v-text="item.bank"></span></p>
                        <p class="text-sm mb-4">No Rekening: <span class="font-bold" v-text="item.rekening"></span></p>
                        <div class="flex justify-between">
                            <button @click="salin(item.rekening)"
                                class="rounded flex items-center text-blue-400 outline outline-1 outline-blue-400 px-3 py-px">
                                <span class="mdi mdi-content-copy me-1"></span>
                                <span class="uppercase">salin</span>
                            </button>
                            <routerLink :to="`/infaq-payment/${item.id}`"
                                class="rounded text-white bg-green-500 px-4 py-2 shadow shadow-gray-400 hover:shadow-lg">
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
                    <div class="p-3" v-if="getToken">
                        <div class="flex justify-start">
                            <routerLink :to="`/infaq-edit/${item.id}`"
                                class="rounded text-white bg-green-500 px-4 py-2 shadow shadow-gray-400 hover:shadow-lg">
                                <span class="uppercase">ubah</span>
                            </routerLink>
                            <button @click="hapus(item.id)"
                                class="rounded text-white bg-red-500 px-4 py-2 mx-4 shadow shadow-gray-400 hover:shadow-lg">
                                <span class="uppercase">hapus</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <FooterComp />

    <!-- Bottom navbar section start  -->

    <div class="fixed bottom-0 w-full h-14 bg-white overflow-hidden flex justify-center items-center z-50 shadow-inner p-3"
        v-if="getToken">
        <RouterLink to="/infaq-add" @click="click()"
            class="flex flex-col items-center justify-center grow overflow-hidden whitespace-nowrap">
            <button
                class="rounded px-4 py-2 shadow shadow-gray-400 w-full font-semibold bg-green-100 hover:bg-green-300 active:text-white active:bg-green-500 duration-300">
                <span class="uppercase me-1">Tambah Kategori</span>
                <span class="mdi mdi-plus"></span>
            </button>
        </RouterLink>
</div>
<!-- Bottom navbar section end  --></template>
