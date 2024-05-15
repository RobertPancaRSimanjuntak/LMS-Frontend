<template>
    <div class="flex flex-col sm:flex-row card m-12">
        <div class="bg-gradient-to-r from-blue-500 to-blue-700 w-full h-full flex rounded-md">
            <div class="flex flex-row justify-between text-center items-center">
                <div class="m-8">
                    <div class="my-2 text-md font-bold text-start">
                        <h1>Daftar sebagai Instruktur</h1>
                    </div>
                    <div class="my-2 font-light text-start">
                        <h2> Instruktur terbaik ada di EduNess. Kami menyediakan
                            fasilitas untuk mempermudah Anda mengajar.
                        </h2>
                    </div>
                    <div class="m-2 justify-start text-start items-center">
                        <div class="bg-white text-black  rounded-full px-2 py-2 sm:px-4 text-md sm:text-sm font-sm hover:font-medium"
                            aria-current="page">Mulai mengajar</div>
                    </div>
                </div>
                <div class="hidden md:block">
                    <img class="w-auto h-800 " src="@/assets/logo.png" alt="">
                </div>
            </div>

        </div>
        <div class="card-body p-4 w-full h-full">
            <h2 class="card-title text-lg font-bold">Your teaching & earning steps</h2>
            <div class="flex flex-col sm:flex-row pt-4">
                <div class="flex mx-4">
                    <div class=" py-2 px-4 bg-blue-100 text-gray-500 rounded-full mx-2">1</div>
                    <p class="py-2 text-gray-600 font-semibold text-sm">apply to become instructor</p>
                </div>
                <div class="flex mx-4">
                    <div class="py-2 px-4 bg-yellow-100 text-gray-500 rounded-full mx-2">2</div>
                    <p class="py-2 text-gray-600 font-semibold text-sm">apply to become instructor</p>
                </div>
            </div>
            <div class="flex flex-col sm:flex-row pt-4">
                <div class="flex mx-4">
                    <div class=" py-2 px-4 bg-red-100 text-gray-500 rounded-full mx-2">3</div>
                    <p class="py-2 text-gray-600 font-semibold text-sm">apply to become instructor</p>
                </div>
                <div class="flex mx-4">
                    <div class="py-2 px-4 bg-green-100 text-gray-500 rounded-full mx-2">4</div>
                    <p class="py-2 text-gray-600 font-semibold text-sm">apply to become instructor</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:'AboutPage',
}
</script>