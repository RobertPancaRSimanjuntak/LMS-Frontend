<template>
    <div class="flex flex-col gap-4  mx-8 mt-8 mb-20 pb-8 bg-[#fdfdfd] shadow">
        <div class="flex flex-col gap-2 shadow bg-white">
            <div class="flex shadow shadow-xs ">
                <div class="relative flex gap-12 p-4 items-center underline1 cursor-pointer"
                    :class="{ 'underline-active': activeTab === 'information' }" @click="navigateTo('information')">
                    <div class="flex gap-2 items-center justify-center">
                        <i class="fa-regular fa-file-lines text-md text-gray-500"></i>
                        <div class="text-xs sm:text-lg text-gray-700">Information</div>
                    </div>
                    <i class="fa-solid fa-check-double text-green-400"></i>
                </div>
                <div class="relative flex gap-2 pr-8 sm:pr-12 p-4 items-center justify-center cursor-pointer"
                    :class="{ 'underline-active': activeTab === 'curriculum' }" @click="navigateTo('curriculum')">
                    <i class="fa-regular fa-circle-play text-gray-500"></i>
                    <div class="text-xs sm:text-lg text-gray-700">Curriculum</div>
                </div>
            </div>
            <div class="flex justify-between mx-8 my-4 text-center items-center ">
                <div class="text-xs sm:text-sm md:text-md font-semibold">Course Curriculum</div>
                <div class="flex gap-2">
                    <button
                        class="p-2 px-2 bg-blue-200 text-blue-600 text-xs sm:text-sm rounded-md hover:bg-blue-300">Save</button>
                    <button class="p-2 px-2 text-blue-600 text-xs sm:text-sm border rounded-md hover:bg-blue-300">Save &
                        preview</button>
                </div>
            </div>
        </div>

        <div class="mx-8 bg-gray-100 rounded-md">
            <div class="p-4 flex flex-col gap-4">
                <div class=" p-4 flex justify-between">
                    <div class="flex space-x-4 text-center">
                        <i class="fa-solid fa-bars"></i>
                        <div for="input" class="block text-sm font-semibold  text-gray-700">Course Overview</div>
                    </div>
                    <div class="flex space-x-4">
                        <i class="fa-solid fa-plus"></i>
                        <i class="fa-regular fa-pen-to-square"></i>
                        <i class="fa-regular fa-trash-can"></i>
                    </div>
                </div>
                <div class="flex lg:flex-row lg:justify-between flex-col gap-4 p-4">
                    <div class="flex flex-col gap-1">
                        <div for="input" class="text-sm md:text-md  font-medium text-gray-700">Waktu</div>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-500 text-sm md:text-md rounded-md block max-w-screen p-2"
                            placeholder="Waktu course" required />
                    </div>
                    <div class="flex flex-col gap-1">
                        <div for="input" class="text-sm md:text-md  font-medium text-gray-700">Video</div>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-500 text-sm md:text-md rounded-md block max-w-screen p-2"
                            placeholder="Jumlah video" required />
                    </div>
                    <div class="flex flex-col gap-1">
                        <div for="input" class="text-sm md:text-md  font-medium text-gray-700">Kuis</div>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-500 text-sm md:text-md rounded-md block max-w-screen p-2"
                            placeholder="Jumlah kuis" required />
                    </div>
                    <div class="flex flex-col gap-1">
                        <div for="input" class="text-sm md:text-md  font-medium text-gray-700">Tes</div>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-500 text-sm md:text-md rounded-md block max-w-screen p-2"
                            placeholder="Jumlah test" required />
                    </div>
                </div>
                <div class="flex flex-col items-end gap-4 p-4">
                    <div class="flex flex-col gap-1 w-full">
                        <div class="text-sm md:text-md  font-semibold  text-gray-700">Course Description</div>
                        <div class="flex flex-col gap-40 bg-gray-50 border border-gray-300 rounded-md max-w-screen">
                            <input class="bg-gray-50 text-gray-500 text-sm md:text-md flex-grow outline-none p-2"
                                placeholder="Your course title" required />

                            <i class="border border-t-2 p-2 fa-solid fa-bold text-gray-500 "></i>
                        </div>
                    </div>
                    <button
                        class=" items-end justify-end text-sm lg:text-md bg-blue-600 text-white py-2 px-4 rounded-md">Save
                        &
                        Preview</button>
                </div>
            </div>
        </div>

        <!-- <FilterProgram /> -->

        <div class="flex flex-col gap-4 mx-8 p-8 rounded-md bg-gray-100">
            <div class="flex justify-between">
                <div class="flex space-x-4 text-center">
                    <div class="block text-sm font-semibold text-gray-700">Materi</div>
                </div>
                <div class="flex space-x-4">
                    <i class="fa-solid fa-plus cursor-pointer" @click="addMateri"></i>
                    <i class="fa-regular fa-trash-can cursor-pointer" @click="deleteMateri"></i>
                </div>
            </div>

            <!-- Render materi dynamically -->
            <div v-for="(materi, index) in materiList" :key="index">
                <component :is="materi.component" />
            </div>
        </div>

        <div class="flex flex-col gap-4 mx-8 p-8 rounded-md bg-gray-100">
            <div class="flex justify-between">
                <div class="flex space-x-4 text-center">
                    <div for="input" class="block text-sm font-semibold  text-gray-700">Test Akhir</div>
                </div>
                <div class="flex space-x-4">
                    <i class="fa-solid fa-plus" @click="addTest"></i>
                    <i class="fa-regular fa-trash-can" @click="deleteTest"></i>
                </div>
            </div>
            <div>
                <TEst v-for="(test, index) in tests" :key="index"/>
            </div>
        </div>

        <div class="text-xs sm:text-md mx-8 text-center text-blue-800 bg-blue-200 p-2" type="submit">
            Add section
        </div>
        <div class="flex justify-between pb-12 mx-8">

            <button @click="previous"
                class="text-center justify-end text-sm text-black hover:bg-blue-300 border border-gray rounded py-2 px-6">
                Previous </button>


            <button @click="submit"
                class="text-center justify-end text-sm text-white hover:bg-blue-600 bg-blue-500 rounded py-2 px-6">
                Submit </button>

        </div>
    </div>
</template>

<script>
import VIdeo from '@/components/Section/BuatCourse/VIdeo.vue';
import DOc from '@/components/Section/BuatCourse/DOc.vue';
import KUis from '@/components/Section/BuatCourse/KUis.vue';
import TEst from '@/components/Section/BuatCourse/TEst.vue';
import FilterProgram from '../MyClass/Filter/FilterProgram.vue';


export default {
    components: {
        VIdeo,
        DOc,
        KUis,
        TEst,
        FilterProgram,

    },
    data() {
        return {
            courseTitle: '',
            activeTab: 'curriculum',
            materiList: [
                { component: 'VIdeo' },  // Awal materi default, sesuaikan jika diperlukan
                { component: 'DOc' },
                { component: 'KUis' }
            ],
            tests: [TEst],
        };
    },
    computed: {
        activeTabLabel() {
            return this.activeTab === 'curriculum' ? 'Curriculum' : 'Information';
        }
    },

    methods: {
        previous() {
            // Logika penyimpanan Anda di sini
            this.$router.push({ name: 'InfoCourse' });
        },
        submit() {
            // Logika penyimpanan Anda di sini
            console.log("Saved and navigating to Curriculum!");
            this.$router.push({ name: 'CreateCourse', query: { courseTitle: this.courseTitle } });// Gantilah 'CurriculumPage' dengan nama rute yang sesuai
        },
        navigateTo(tab) {
            this.activeTab = tab;
            if (tab === 'information') {
                this.$router.push({ name: 'InfoCourse' });
            } else if (tab === 'curriculum') {
                this.$router.push({ name: 'CurriculumCourse' });
            }
        },
        addMateri() {
            // Logika untuk menambah materi baru
            // Contoh: tambahkan komponen Video, Doc, atau Kuis ke materiList
            // Sesuaikan ini sesuai kebutuhan Anda. Ini contoh menambah DOc secara default:
            this.materiList.push({ component: 'FilterProgram' });
        },
        deleteMateri() {
            // Logika untuk menghapus materi terakhir
            if (this.materiList.length > 0) {
                this.materiList.pop();
            }
        },
        addTest() {
            this.tests.push({});
        },
        deleteTest() {
            // Logika untuk menghapus materi terakhir
            if (this.tests.length > 0) {
                this.tests.pop();
            }
        },
    },
}
</script>

<style scoped>
.underline-active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: blue;
    transition: background-color 0.3s ease;
}

.relative {
    position: relative;
}

.underline1::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: transparent;
    transition: background-color 0.3s ease;
}

.underline1:hover::after {
    background-color: blue;
}
</style>