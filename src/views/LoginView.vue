<script setup>
import FooterComp from "../components/FooterComp.vue";
import BackButton from "../components/BackButton.vue";
import auth from "../api/auth.js";
import { reactive } from "vue";


const form = reactive({
    name: '',
    password: ''
})

const login = async () => {
    if (form.name && form.password) {

        await auth.auth(form)
            .then(async (res) => {
                let date = new Date();
                date.setTime(date.getTime() + 86400000)
                let expires = "expires=" + date.toUTCString();
                document.cookie = 'token=' + res.token + ';' + expires

                location.href = "/"
            })
            .catch((err) => {
                alert('username atau password salah, silahkan coba lagi')
                location.reload()
            })

    }
}


</script>

<template>
    <div class="container px-3 lg:px-11 py-4">
        <div class="grid grid-cols-1 gap-4">
            <div class="w-full h-full rounded shadow-md overflow-hidden">
                <div class="pt-5">
                    <h2 class="text-3xl lg:text-5xl uppercase font-semibold text-center">Login</h2>
                </div>
                <form class="p-5" @submit.prevent="login">

                    <!-- username  -->
                    <div class="flex items-center my-4">
                        <div>
                            <span class="mdi mdi-account text-2xl me-4"></span>
                        </div>
                        <div class="w-full relative">
                            <input type="text" placeholder="Username" v-model="form.name"
                                class="w-full text-gray-900 border-b-2 outline-none placeholder-transparent focus:border-gray-400 duration-500 peer">
                            <label
                                class="absolute left-0 text-sm -top-5 text-gray-400 capitalize peer-placeholder-shown:-top-0 peer-placeholder-shown:text-base cursor-text peer-focus:text-sm peer-focus:-top-5 duration-200">Username</label>
                        </div>
                    </div>

                    <!-- password  -->
                    <div class="flex items-center my-4">
                        <div>
                            <span class="mdi mdi-key text-2xl me-4"></span>
                        </div>
                        <div class="w-full relative">
                            <input type="password" placeholder="Password" v-model="form.password"
                                class="w-full text-gray-900 border-b-2 outline-none placeholder-transparent focus:border-gray-400 duration-500 peer">
                            <label
                                class="absolute left-0 text-sm -top-5 text-gray-400 capitalize peer-placeholder-shown:-top-0 peer-placeholder-shown:text-base cursor-text peer-focus:text-sm peer-focus:-top-5 duration-200">Password</label>
                        </div>
                    </div>

                    <!-- submit  -->
                    <button type="submit"
                        class="rounded text-white bg-blue-800 px-4 py-2 shadow shadow-gray-400 w-full mt-10 hover:shadow-lg">
                        <span class="text-center uppercase">masuk</span>
                    </button>
                </form>
            </div>
        </div>
        <BackButton />
    </div>

    <FooterComp />
</template>
