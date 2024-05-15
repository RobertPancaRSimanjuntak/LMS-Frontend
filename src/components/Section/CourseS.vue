<template>
    <div class="justify-center items-center">
        <div class="flex flex-1 m-4 justify-between">
            <div>
                <h1>Best Courses</h1>
            </div>
            <div class="justify-end text-start items-center">
                <div class="border border-gray-200 text-gray-500  rounded-full p-2 text-sm font-light"
                    aria-current="page">All
                    Kategories</div>
            </div>
        </div>

        <div class="flex space-x-8 justify-center items-center">
        <!-- card -->
        <div class="flex space-x-4 mx-12 overflow-x-auto" style="scrollbar-width: none; -ms-overflow-style: none;">
            <div v-for="(course, index) in courses" :key="index" class="flex-shrink-0">
                <div
                    class="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white border border-gray-200 rounded-lg shadow-md">

                    <!--Card 1 -->
                    <div
                        class="h-auto max-w-2xl sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-white border border-gray-200 rounded-lg shadow-md">
                        <!-- Gambar Kartu -->
                        <div>
                            <img class="object-cover medium-image rounded-t-lg" src="@/assets/profil.png" alt="Course Image" />
                        </div>

                        <!-- Konten Kartu -->
                        <div class="flex flex-col space-y-4">
                            <div>
                                <h5 class="font-semibold text-sm tracking-tight text-gray-500 px-5 pt-5">{{
                truncate(course.deskripsi)
            }}</h5>
                            </div>
                            <div>
                                <p class="px-5 font-bold text-gray-700">{{ course.title }}</p>
                            </div>
                            
                                <hr class="border-t-2 border-gray-300">
                            
                            <div class="flex justify-between px-4 pb-4">
                                <div>
                                    <span class="text-md font-light text-gray-400 line-through">{{ course.harga
                                        }}</span>
                                    <span class="ms-2 text-md font-medium text-green-600 ">{{ course.diskon }}</span>
                                </div>
                                <p class="font-medium text-md text-blue-600">View more</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

</template>

<script>
export default {
    name: 'SectionCourse',
    data() {
        return {
            courses: [
                {
                    deskripsi: 'Reiki Level I, II and Master/Teacher Program Reiki Level I, II and Master/Teacher ProgramReiki Level I, II and Master/Teacher Program ',
                    title: 'Pemrograman Web',
                    harga: '$45',
                    diskon: '$5'
                },
                {
                    deskripsi: 'Reiki Level I, II and Master/Teacher Program Reiki Level I, II and Master/Teacher ProgramReiki Level I, II and Master/Teacher Program ',
                    title: 'Pemrograman Web',
                    harga: '$60',
                    diskon: '$30'
                },

                // Add more course objects as needed
            ]
        };
    },
    methods: {
        truncate(description) {
            if (description.length > 60) {
                return description.substring(0, 34) + '...';
            } else {
                return description;
            }
        }
    }
}
</script>

<style>
.medium-image{
    width: 250px;
    height: 250px;
}
</style>