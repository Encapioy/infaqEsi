<template>
    <div class="container px-3 lg:px-11 py-4">
        <div class="grid grid-cols-1 gap-4">
            <div class="w-full h-full rounded shadow-md overflow-hidden">
                <div class="pt-5">
                    <h2 class="text-3xl lg:text-4xl uppercase font-semibold text-center">Tambah Data</h2>
                </div>
                <form class="p-5 px-10" @submit.prevent="store">

                    <!-- Judul -->
                    <div class="my-8">
                        <div class="flex items-center">
                            <div class="w-full relative">
                                <input type="text" placeholder="Judul"
                                    class="w-full text-gray-900 border-b-2 outline-none placeholder-transparent focus:border-gray-400 duration-500 peer"
                                    v-model="form.judul">
                                <label
                                    class="absolute left-0 text-sm -top-5 text-gray-400 capitalize peer-placeholder-shown:-top-0 peer-placeholder-shown:text-base cursor-text peer-focus:text-sm peer-focus:-top-5 duration-200">Judul</label>
                            </div>
                        </div>
                    </div>

                    <!-- deskripsi -->
                    <div class="flex items-center my-8">
                        <div class="w-full relative">
                            <label class="text-gray-400 capitalize text-base cursor-text">Deskripsi</label>
                            <textarea type="email"
                                class="w-full border-2 outline-none mt-3 resize-y rounded focus:border-gray-400 duration-500"
                                v-model="form.deskripsi"></textarea>
                        </div>
                    </div>

                    <!-- bank -->
                    <div class="flex items-center my-8">
                        <div class="w-full relative">
                            <input type="text" placeholder="Bank"
                                class="w-full text-gray-900 border-b-2 outline-none placeholder-transparent focus:border-gray-400 duration-500 peer"
                                v-model="form.bank">
                            <label
                                class="absolute left-0 text-sm -top-5 text-gray-400 capitalize peer-placeholder-shown:-top-0 peer-placeholder-shown:text-base cursor-text peer-focus:text-sm peer-focus:-top-5 duration-200">bank</label>
                        </div>
                    </div>

                    <!-- rekening -->
                    <div class="flex items-center my-8">
                        <div class="w-full relative">
                            <input type="number" placeholder="Rekening"
                                class="w-full text-gray-900 border-b-2 outline-none placeholder-transparent focus:border-gray-400 duration-500 peer"
                                v-model="form.rekening">
                            <label
                                class="absolute left-0 text-sm -top-5 text-gray-400 capitalize peer-placeholder-shown:-top-0 peer-placeholder-shown:text-base cursor-text peer-focus:text-sm peer-focus:-top-5 duration-200">rekening</label>
                        </div>
                    </div>


                    <!-- target -->
                    <div class="flex items-center my-8">
                        <div class="w-full relative">
                            <input type="number" placeholder="Target"
                                class="w-full text-gray-900 border-b-2 outline-none placeholder-transparent focus:border-gray-400 duration-500 peer"
                                v-model="form.target">
                            <label
                                class="absolute left-0 text-sm -top-5 text-gray-400 capitalize peer-placeholder-shown:-top-0 peer-placeholder-shown:text-base cursor-text peer-focus:text-sm peer-focus:-top-5 duration-200">target</label>
                        </div>
                    </div>

                    <!-- gambar -->
                    <!-- <div class="flex items-center my-8">
                        <div class="w-full relative">
                            <label class="text-gray-400 capitalize text-base cursor-text">gambar</label>
                            <input type="file" class="text-gray-900 outline-none block mt-4">
                        </div>
                    </div> -->

                    <!-- submit -->
                    <button type="submit"
                        class="rounded text-white bg-blue-800 px-4 py-2 shadow shadow-gray-400 w-full mt-10 hover:shadow-lg">
                        <span class="text-center uppercase">submit</span>
                    </button>
                </form>
            </div>
        </div>
        <RouterLink to="/">
            <button 
                class="rounded text-white bg-red-500 px-4 py-2 shadow shadow-gray-400 w-40 mt-10 hover:shadow-lg">
                <span class="mdi mdi-arrow-left me-1"></span>
                <span class="uppercase">kembali</span>
            </button>
        </RouterLink>
    </div>

    <FooterComp />
</template>

<script setup>
import FooterComp from "../components/FooterComp.vue";
import { reactive, ref } from "vue";
import axios from "axios";

const url = 'http://donasi-api.test/api/infaq'

const form = reactive({
    judul: '',
    deskripsi: '',
    bank: '',
    rekening: '',
    target: ''
})

const alert = ref([])



const store = () => {

    axios.post(url, form)
        .then(response => alert('berhasil menambah kategori'))
        .catch(error => {
            console.error('Terjadi kesalahan:', error);
        });

    setTimeout(() => {
        location.reload()
    }, 1000);

};


</script>
