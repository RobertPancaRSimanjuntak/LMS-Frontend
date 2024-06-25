<template>
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-4 mx-2 md:mx-8 mt-8 p-4 bg-white shadow">
        <div class="mx-8">
            <label for="input" class="block mb-2 text-sm font-medium text-gray-500">Judul</label>
            <input v-model="courseTitle" @keydown.enter.prevent class="bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-md block w-full p-2"
                placeholder="Your course title" required />
        </div>
        <div class="flex flex-col gap-4 mx-8 md:items-start items-center ">
            <div class="text-sm font-semibold">Course thumbnail</div>
            <div class="flex flex-col sm:flex-row gap-8">
                <div v-if="thumbnailUrl">
                    <img :src="thumbnailUrl" class="w-52" alt="upload" />
                </div>
                <div v-else>
                    <img src="@/assets/course.png" class="w-52" alt="upload" />
                </div>
                <div class="flex flex-col justify-center w-60">
                    <div class="text-md">
                        Upload your course Thumbnail here. Important guidelines: 1200x800 pixels or 12:8 Ratio. Supported format:
                        <span class="font-semibold">.jpg, .jpeg, or .png</span>
                    </div>
                    <input type="file" @change="handleFileUpload" accept="image/*" class="hidden" ref="fileInput" />
                    <button type="button" @click="triggerFileUpload" class="w-24 py-2 px-4 bg-blue-200 flex justify-center items-center text-blue-800 mt-4 rounded-md">
                        <div>Upload</div>
                        <!-- <i class="fa-solid fa-arrow-up-from-bracket text-md ml-4"></i> -->
                    </button>
                </div>
            </div>
        </div>
        <div class="mx-8">
            <label for="input" class="block mb-2 text-sm font-medium text-gray-500">Deskripsi</label>
            <input v-model="courseDesc" @input="storeDesc"   @keydown.enter.prevent class="bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-md block w-full p-2"
                placeholder="Your course title" required />
        </div>
        <div class="mx-8 flex flex-col gap-2">
            <div class="text-sm font-medium text-gray-500">
                Course
            </div>
            <div class="flex flex-wrap gap-4 mt-4">
                <div>
                    <CourseCard v-for="(course, index) in selectedCourses" :key="index" :course="course" />
                </div>
                <div class="p-4 w-60 h-40 bg-gray-200 flex flex-col justify-center items-center text-gray-500"
                    @click="handlePlusClick">
                    <i class="fa-class fa-plus text-xl"></i>
                    <div class="text-md">Tambah</div>
                </div>
            </div>
        </div>
        <div class="mx-8 flex justify-between lg:flex-col gap-2 max-w-screen">
            <div class="text-sm font-medium text-gray-500">
                Tambah Instructor
            </div>
            <div class=" w-auto lg:w-96">
                <div class="search flex items-center border border-gray-300 rounded-md">
                    <!-- Hanya menampilkan ikon pencarian saat ukuran layar sm -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="md:size-4 size-3 m-2 text-gray-600">
                        <!-- Menampilkan hanya pada ukuran sm -->
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <!-- Input pencarian -->
                    <input type="text" v-model="searchQuery" @input="handleSearch"
                        placeholder="Search..." class="flex-1 focus:outline-none hidden sm:block bg-gray-50">
                </div>
                <!-- Daftar hasil pencarian -->
                <div v-if="searchResults.length" class="border border-gray-300 mt-2 rounded-md max-h-40 overflow-auto">
                    <div v-for="result in searchResults" :key="result.id" class="p-2 hover:bg-gray-100 cursor-pointer"
                        @click="addInstructor(result)">
                        <div class="flex items-center gap-2">
                            <img :src="result.image" alt="" class="w-6 h-6 rounded-full">
                            <span>{{ result.name }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Daftar instruktur yang dipilih -->
        <div class="mx-8 flex flex-col sm:flex-row gap-4 max-w-screen">
            <div v-for="instructor in selectedInstructors" :key="instructor.id" class="flex justify-between sm:space-x-8 lg:space-x-12  items-center bg-gray-200 py-2 px-4 rounded-lg ">
                <div class="flex gap-2 items-center">
                    <div>
                        <img class="rounded-full w-10 " :src="instructor.image" alt="">
                    </div>
                    <div class="flex flex-col">
                        <div class="text-xs md:text-sm font-medium">{{ instructor.name }}</div>
                        <div class="text-xs font-thin text-gray-600">{{ instructor.role }}</div>
                    </div>
                </div>
                <i class="fa-solid fa-xmark text-gray-600 text-sm cursor-pointer" @click="removeInstructor(instructor)"></i>
            </div>
        </div>
        <div class="mx-8 flex flex-col gap-2">
            <div class="flex flex-col gap-2">
                <div class="text-sm font-medium text-gray-500">Kehadiran</div>
                <div class="flex justify-between border-2 px-4 border-gray-200  w-full items-center tect-center">
                    <input class="text-xs sm:text-sm py-2 text-gray-400 w-full" placeholder="Kehadiran" @keydown.enter.prevent>
                    <i class="fa-solid fa-chevron-down text-xs text-gray-400"></i>
                </div>
            </div>
            <div class="flex flex-col gap-2 w-full">
                <div class="text-sm font-medium text-gray-500">Zoom Meeting</div>
                <div class="flex justify-between border-2 px-4 border-gray-200 items-center tect-center">
                    <input class="text-xs sm:text-sm py-2 text-gray-400 w-full" placeholder="Wajib Zoom" @keydown.enter.prevent>
                    <!-- <i class="fa-solid fa-chevron-down text-xs text-gray-400"></i> -->
                </div>
            </div>
        </div>
        <div class="mx-8 flex justify-end items-end ">
            <button type="submit" class="py-2 px-4 bg-blue-600 rounded-md text-white">Submit</button>
        </div>
        <NotifProg v-if="showNotifProg" :courses="courses" @close="showNotifProg = false"
            @course-selected="addCourseToForm" />
    </form>
</template>

<script>
import NotifProg from '@/components/Section/BuatProgram/NotifProg.vue';
import CourseCard from '@/components/Section/BuatProgram/CourseCard';

export default {
    components: {
        NotifProg,
        CourseCard,
        
    },
    data() {
        return {
            showNotifProg: false,
            thumbnailUrl: null,
            courseTitle: '', // Tambahkan ini untuk data judul
            courseDesc: '',
            searchQuery: '',
            searchResults: [],
            selectedInstructors: [],
            courses: [
                {
                    id: 1,
                    image: require('@/assets/course.png'),
                    title: 'Pemrograman Web',
                    harga: '$50',
                },
            ],
            selectedCourses: [],
        };
    },
    methods: {
        handleSubmit() {
            this.$router.replace({ name: 'BuatProgram' }); // Ganti route saat ini tanpa menambah entri ke history stack
        },
        handlePlusClick() {
            // Panggil metode handleSubmit() di sini
            this.showNotifProg = true;
        },
        addCourseToForm(course) {
            if (!this.selectedCourses.some(c => c.id === course.id)) {
                this.selectedCourses.push(course);
            }
            this.showNotifProg = false;
        },
        triggerFileUpload() {
            this.$refs.fileInput.click();
        },
        handleFileUpload(event) {
            const file = event.target.files[0];
            if (file) {
                this.resizeImage(file);
            }
        },
        resizeImage(file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.src = e.target.result;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    canvas.width = 1200; // width yang diinginkan
                    canvas.height = 800; // height yang diinginkan
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    this.thumbnailUrl = canvas.toDataURL(file.type);
                    this.storeThumbnail();
                };
            };
            reader.readAsDataURL(file);
        },
        storeTitle() {
            localStorage.setItem('courseTitle', this.courseTitle);
        },
        storeDesc() {
            localStorage.setItem('courseDesc', this.courseDesc);
        },
        storeThumbnail() {
            localStorage.setItem('thumbnailUrl', this.thumbnailUrl);
        },
        storeData() {
            this.storeTitle();
            this.storeDesc();
            this.storeThumbnail();
        },
        loadStoredData() {
            const storedTitle = localStorage.getItem('courseTitle');
            if (storedTitle) {
                this.courseTitle = storedTitle;
            }
            const storedThumbnail = localStorage.getItem('thumbnailUrl');
            if (storedThumbnail) {
                this.thumbnailUrl = storedThumbnail;
            }
            const storedDesc = localStorage.getItem('courseDesc');
            if (storedDesc) {
                this.courseDesc = storedDesc;
            }
        },
        handleSearch() {
            // Simulasi hasil pencarian
            // Di dunia nyata, mungkin Anda akan menggunakan API untuk mencari instruktur
            const allInstructors = [
                { id: 1, name: 'Burhan Ahmad', image: require('@/assets/profil.png'), role: '   web developer' },
                { id: 2, name: 'Ahmad', image: require('@/assets/profil.png'), role: 'Android developer' },
                { id: 3, name: 'Burhan', image: require('@/assets/profil.png'), role: 'Machine learning' },
            ];

            if (this.searchQuery) {
                this.searchResults = allInstructors.filter(instructor =>
                    instructor.name.toLowerCase().includes(this.searchQuery.toLowerCase())
                );
            } else {
                this.searchResults = [];
            }
        },
        addInstructor(instructor) {
            if (!this.selectedInstructors.some(i => i.id === instructor.id)) {
                this.selectedInstructors.push(instructor);
            }
            this.searchQuery = '';
            this.searchResults = [];
        },
        removeInstructor(instructor) {
            this.selectedInstructors = this.selectedInstructors.filter(i => i.id !== instructor.id);
        }
    },
    mounted() {
        this.loadStoredData();
    },
};
</script>
