<template>
    <div class="bg-gradient-to-r from-green-400 to-yellow-400">
        <div class="flex flex-1 justify-center text-center items-center">
            <div class="text-center justify-between items-start mx-8">
                <div class="my-2 font-bold text-start">
                    <h1>Belajar dengan</h1>
                    <h1>Expert Terbaik</h1>
                </div>
                <div class="my-2 font-light text-start">
                    <h2> Yuk, ikuti pembelajaran terbaik. Tingkatkan ilmu dan <p>ketrampilan kamu dengan
                            bimbingan Expert terbak disini</p>
                    </h2>
                </div>
                <div class=" text-start my-4">
                    <router-link :to="{ name: 'LoginPage' }"
                        class="bg-blue-500 text-white rounded-full px-4 py-2 text-base font-sm hover:bg-blue-600"
                        aria-current="page" :class="{ 'bg-blue-500': activePage === 'LoginPage' }">Sign-in</router-link>
                </div>
            </div>
            <div class="h-80 overflow-hidden">
                <div >
                    <img class="w-60 h-100" src="@/assets/Iklan.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:'SectionIklan',
    
}
</script>