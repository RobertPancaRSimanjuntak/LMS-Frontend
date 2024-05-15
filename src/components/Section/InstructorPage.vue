<template>
    <div class="flex flex-col">
        <div class="m-4 justify-center text-center">
            <h1 class="text-2xl font-medium ">Instruktur terbaik tahun ini</h1>
        </div>
        <div class="flex space-x-8 justify-center items-center">

            <!--Card  -->
            <div class="flex flex-col">
                <div class="flex space-x-4 mx-12 overflow-x-auto" style="scrollbar-width: none; -ms-overflow-style: none;">
                    <div v-for="(course, index) in courses" :key="index" class="flex-shrink-0">
                    <div
                        class="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white border border-gray-200 rounded-lg shadow-md">

                        <!-- Card 1 -->
                        <div
                            class="h-auto max-w-2xl sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-white border border-gray-200 rounded-lg shadow-md">

                            <!-- Gambar Kartu -->
                            <div>
                                <img class="object-cover medium-image rounded-t-lg" src="@/assets/profil.png" alt="Course Image" />
                            </div>
                            <!-- Konten Kartu -->
                            <div class="flex flex-col space-y-4">
                                <div class="justify-center text-center items-center">
                                    <div>
                                        <p class="font-semibold text-sm tracking-tight text-gray-500 px-5 pt-2">{{course.nama }}
                                        </p>
                                    </div>
                                    <p class="font-light text-gray-400">{{ course.posisi }}</p>
                                </div>
                                <hr class="border-t-2 border-gray-300">
                                <div class="flex justify-between px-4 pb-4">
                                    <div class="flex px-2">
                                        <img src="@/assets/Star.png" alt="star">
                                        <p>{{ course.star }}</p>
                                    </div>
                                    <div class="flex">
                                        <p class="text-black text-sm font-medium">{{ course.peserta }}</p>
                                        <p class="px-1 font-light text-sm text-gray-400">Students</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <!-- </div> -->
                    </div>
                </div>

                </div>
                <div class="m-4 justify-center text-center flex">
                    <p class="text-sm text-gray-400 font-light">Thousands of students waiting for a instructor. Start
                        teaching & earning now!.</p>
                    <p class="text-md text-blue-400 hover:text-blue-600">Become Instructor</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InstructorPage',
    data() {
        return {
            courses: [
                {
                    nama: 'Burhan Ahmed ',
                    posisi: 'Pemrograman Web',
                    peserta: '256',
                    star:'5',
                  
                    
                },
                {
                    nama: 'Burhan curuk ',
                    posisi: 'Android developer',
                    peserta: '500',
                    star:'1',
                   
                }
            ]
        };
    }
}
</script>

<style>
.medium-image{
    width: 250px;
    height: 250px;
}
</style>