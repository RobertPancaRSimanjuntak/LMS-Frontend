<template>
    <section class="mx-8 my-4 flex flex-col md:flex-row space-x-2">
        <!-- Sisi kiri -->
        <div class="flex flex-col space-y-8">
            <div class="flex flex-col gap-4">
                <div class="font-semibold text-lg">
                    Algorithm and Data Structure Class
                </div>
                <div class="w-full">
                    <img src="@/assets/Program/Program.png" alt="">
                </div>
            </div>
            <!-- Tentang -->
            <div class="flex flex-col space-y-4">
                <div class="flex flex-col space-y-4">
                    <h1 class="text-lg font-semibold font-serif">About Program</h1>
                    <p class="text-md sm:text-sm font-light font-poppins text-justify mt-4">Master the fundamentals of
                        algorithms and data structures to design efficient and scalable software solutions.
                    </p>
                </div>
                <!-- Target -->
                <div>
                    <h1 class="text-lg font-semibold font-serif">Curriculum</h1>
                    <div class="flex flex-col gap-2">
                        <ComputationThinking />
                        <PemogramanDasar />
                        <StrukturData />
                    </div>
                </div>
            </div>
        </div>





        <!-- Sisi kanan -->
        <div class="w-full my-8 sm:my-0 flex flex-col gap-8">
            <div class="mx-2">
                <div class="border shadow rounded-md">
                    <h3 class="flex py-4 px-5 items-start justify-start">
                        <div class="flex">
                            <span class="text-md font-medium text-gray-400 line-through">$50</span>
                            <span class="ms-2 text-md font-medium text-green-600 ">Free</span>
                        </div>
                    </h3>

                    <div class="pt-2 border p-4" id="filter-section-mobile-0">
                        <div class="flex flex-col space-y-4 my-4">

                            <div class="flex gap-16">
                                <div class="flex flex-row gap-2 justify-center items-start text-start">
                                    <i class="ml-1 fa-regular fa-calendar-days text-gray-400"></i>
                                    <p class="text-sm text-gray-400">Schedule</p>
                                </div>
                                <p class="text-sm text-gray-400 ">Monday,
                                    Wednesday,
                                    Friday
                                    (13:00 - 15:00)</p>
                            </div>
                            <div class="flex justify-between">
                                <div class="flex flex-row gap-2 justify-center items-center start">
                                    <i class="ml-1 fa-regular fa-clock text-gray-400"></i>
                                    <p class="text-sm text-gray-400">Program duration</p>
                                </div>
                                <p class="text-sm text-gray-400 ">6 month</p>
                            </div>

                            <div class="flex justify-between">
                                <div class="flex flex-row gap-3 justify-center items-center text-start">
                                    <i class="ml-1 fa-regular fa-user text-gray-400"></i>
                                    <p class="text-sm text-gray-400">Kuota Enroll</p>
                                </div>
                                <p class="text-sm text-gray-400 ">10/30</p>
                            </div>
                            <div class="flex justify-between">
                                <div class="flex flex-row gap-2 justify-center items-center text-start">
                                    <i class="ml-1 fa-regular fa-calendar-xmark text-gray-400"></i>
                                    <p class="text-sm text-gray-400">Registration Deadline</p>
                                </div>
                                <p class="text-sm text-gray-400 ">2024-08-30</p>
                            </div>
                        </div>
                    </div>


                    <div @click="openCourse" type="button"
                        class="bg-blue-500 rounded-2xl my-4 mx-12 justify-center text-center items-center hover:bg-blue-600">
                        <p class="text-md text-white font-medium py-2 px-1">Ikut Program</p>
                    </div>

                </div>
            </div>
            <div class="mx-2">
                <div class="border shadow rounded-md">
                    <h3 class="text-md py-4 px-5 items-start justify-start">
                        Instructor
                    </h3>

                    <div class="pt-2 border p-4" id="filter-section-mobile-0">
                        <div class="flex flex-col space-y-4 p-4 bg-gray-200">
                            <div class="flex gap-2 items-center">
                                <div>
                                    <img src="@/assets/profil.png" alt="Profile"
                                        class="size-6 md:size-8 rounded-full border-2">
                                </div>
                                <div class="flex flex-col">
                                    <div class="text-sm text-gray-800">Burhan</div>
                                    <div class="text-sm text-gray-800">Web development</div>
                                </div>
                            </div>
                            <div class="flex flex-col gap-1">
                                <h3 class="text-xs font-semibold text-gray-800">Deskripsi</h3>
                                <div class="flex flex-col">
                                    <h3 class="text-xs text-gray-800">Bekerja di PT arab Gila </h3>
                                    <h3 class="text-xs text-gray-800">Bekerja di PT arab Gila </h3>
                                    <h3 class="text-xs text-gray-800">Bekerja di PT arab Gila </h3>
                                </div>
                            </div>
                            <div class="flex flex-col gap-1">
                                <h3 class="text-xs font-semibold text-gray-800">Email</h3>
                                <h3 class="text-xs text-gray-800">burhan@gmail.com</h3>
                            </div>
                            <div class="flex flex-col gap-1">
                                <h3 class="text-xs font-semibold text-gray-800">Telepon</h3>
                                <h3 class="text-xs text-gray-800">+6281245678901 </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ComputationThinking from '@/components/Section/Browse/Curriculum/ComputationThinking.vue';
import PemogramanDasar from '@/components/Section/Browse/Curriculum/PemogramanDasar.vue';
import StrukturData from '@/components/Section/Browse/Curriculum/StrukturData.vue';


export default {
    components: {
        ComputationThinking,
        PemogramanDasar,
        StrukturData,

    },
    // Komponen Vue
    methods: {
        openCourse() {
            // Navigasi langsung ke halaman NotifBrowse
            this.$router.push({ name: 'NotifBrowse' });
        }
    },
}
</script>

<style scoped>
/* Gaya CSS khusus untuk komponen ini */
</style>