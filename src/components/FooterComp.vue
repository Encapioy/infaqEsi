<script setup>
import { ref } from "vue";

const socialMedia = ref([
    {
        link: 'https://www.google.com/maps/place/Pondok+Pesantren+Fahim+Quran+Plus/@-6.656222,106.696666,10z/data=!4m6!3m5!1s0x2e69d0413a51008d:0x4216c9d21d02a98e!8m2!3d-6.656222!4d106.696666!16s%2Fg%2F11ggwb8sdk?hl=id&entry=ttu',
        icon: 'mdi mdi-map-marker-outline',
        color: 'text-red-700',
        text: 'Lokasi'
    },
    {
        link: 'https://www.sekolahimpian.com/',
        icon: 'mdi mdi-web',
        color: 'text-blue-600',
        text: 'Website'
    },
    {
        link: 'https://www.youtube.com/@SekolahImpianTV',
        icon: 'mdi mdi-youtube',
        color: 'text-red-600',
        text: 'SekolahImpianTV'
    },
    {
        link: 'https://www.youtube.com/@SekolahImpianku/videos',
        icon: 'mdi mdi-youtube',
        color: 'text-red-600',
        text: 'SekolahImpianku'
    },
    {
        link: 'https://www.instagram.com/quadrantboardingschool/',
        icon: 'mdi mdi-instagram',
        color: 'text-red-800',
        text: 'quadrantboardingschool'
    },
    {
        link: 'https://www.instagram.com/fahimquranplus/',
        icon: 'mdi mdi-instagram',
        color: 'text-red-800',
        text: 'fahimquranplus'
    },
    {
        link: 'https://api.whatsapp.com/send?phone=6281282251136&text=Assalammualaikum',
        icon: 'mdi mdi-whatsapp',
        color: 'text-green-600',
        text: 'Whatsapp'
    },
    {
        link: '',
        icon: 'mdi mdi-tiktok',
        color: 'text-black',
        text: 'jangan lupa follow @zakirullah._'
    },
    
])

</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="position: relative; bottom: -10px; z-index: -1;">
        <path fill="#FB8C00" fill-opacity="1"
            d="M0,192L48,186.7C96,181,192,171,288,170.7C384,171,480,181,576,202.7C672,224,768,256,864,272C960,288,1056,288,1152,277.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
        </path>
    </svg>
    <div class="w-full p-5 text-white text-xl lg:text-center" style="background-color: #FB8C00;">Yuk, lebih banyak mengenal
        sekolah impian</div>
    <footer class="p-4">
        <div>
            <ul>
                <li class="mb-1" v-for="item in socialMedia" :key="item.icon">
                    <a :href="item.link" target="blank"
                        class="flex items-center">
                        <span class="me-2 text-lg" :class="item.icon , item.color"></span>
                        <span v-text="item.text"></span>
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</template>