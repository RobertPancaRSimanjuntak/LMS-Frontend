<template>
    <div class="flex flex-col gap-4 mx-8 mt-8 mb-20 pb-8 bg-white shadow">
        <div class="flex flex-col gap-2 shadow bg-white">
            <div class="flex shadow shadow-xs">
                <div 
                    class="relative flex gap-12 p-4 items-center cursor-pointer"
                    :class="{ 'underline-active': activeTab === 'information' }"
                    @click="navigateTo('information')">
                    <div class="flex gap-2 items-center justify-center">
                        <i class="fa-regular fa-file-lines text-md text-gray-500"></i>
                        <div class="text-md text-gray-700">Information</div>
                    </div>
                    <div class="text-sm text-green-500">2/2</div>
                </div>
                <div 
                    class="relative flex gap-2 pr-4 sm:pr-12 p-4 items-center cursor-pointer underline1"
                    :class="{ 'underline-active': activeTab === 'curriculum' }"
                    @click="navigateTo('curriculum')">
                    <i class="fa-regular fa-circle-play text-gray-500"></i>
                    <div class="text-md text-gray-700">Curriculum</div>
                </div>
            </div>
            <div class="flex justify-between mx-8 my-4 text-center items-center">
                <div class="text-md font-semibold">{{ activeTabLabel }}</div>
                <div class="flex gap-2">
                    <button @click="save" class="py-2 px-4 bg-blue-200 text-blue-600 text-sm rounded-md hover:bg-blue-300">Save</button>
                    <button @click="saveAndPreview" class="py-2 px-4 text-blue-600 text-sm border rounded-md hover:bg-blue-300">Save & Preview</button>
                </div>
            </div>
        </div>
        
        <!-- Konten untuk Tab Aktif -->
        <div class="mx-8">
            <label for="input" class="block mb-2 text-sm font-medium text-gray-500">Judul</label>
            <input v-model="courseTitle" @input="storeTitle" class="bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-md block w-full p-2" placeholder="Your course title" required />
        </div>

        <!-- Upload foto -->
        <div class="flex flex-col gap-4 mx-8 md:items-start items-center">
            <div class="text-sm font-semibold">Course thumbnail</div>
            <div class="flex flex-col sm:flex-row gap-8">
                <div v-if="thumbnailUrl">
                    <img :src="thumbnailUrl" class="w-60" alt="upload" />
                </div>
                <div v-else>
                    <img src="@/assets/course.png" class="w-60" alt="upload" />
                </div>
                <div class="flex flex-col justify-center w-60">
                    <div class="text-md">
                        Upload your course Thumbnail here. Important guidelines: 1200x800 pixels or 12:8 Ratio. Supported format:
                        <span class="font-semibold">.jpg, .jpeg, or .png</span>
                    </div>
                    <input type="file" @change="handleFileUpload" accept="image/*" class="hidden" ref="fileInput" />
                    <button @click="triggerFileUpload" class="w-24 py-2 px-4 bg-blue-200 flex justify-center items-center text-blue-800 mt-4 rounded-md">
                        <div>Upload</div>
                        <!-- <i class="fa-solid fa-arrow-up-from-bracket text-md ml-4"></i> -->
                    </button>
                </div>
            </div>
        </div>

        <div class="flex justify-between mx-8 mt-4">
            <button @click="cancel" class="text-md bg-gray-50 border border-gray-200 py-2 px-4 text-sm rounded-md">Cancel</button>
            <button @click="saveNext" class="text-md bg-blue-600 text-white py-2 px-6 text-md rounded-md">Next</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            courseTitle: '', // Data binding untuk judul
            activeTab: 'information', // Tab yang aktif
            thumbnailUrl: null, // URL gambar thumbnail yang akan ditampilkan
        };
    },
    computed: {
        activeTabLabel() {
            return this.activeTab === 'information' ? 'Information' : 'Curriculum';
        },
    },
    methods: {
        cancel() {
            // Logika penyimpanan Anda di sini
            this.$router.push({ name: 'CreateCourse' });
        },
        save() {
            // Logika penyimpanan Anda di sini
            console.log("Saved!");
            this.storeData();
            this.$emit('update-title', this.courseTitle);
        },
        saveAndPreview() {
            // Logika penyimpanan Anda di sini
            console.log("Saved and Previewed!");
            this.storeData();
            this.$emit('update-title', this.courseTitle);
        },
        saveNext() {
            // Logika penyimpanan Anda di sini
            console.log("Saved and navigating to Curriculum!");
            this.storeData();
            this.$store.dispatch('updateCourseTitle', this.courseTitle);
            this.$router.push({ name: 'CurriculumCourse' });
        },
        navigateTo(tab) {
            this.activeTab = tab;
            if (tab === 'curriculum') {
                this.$router.push({ name: 'CurriculumCourse' });
            } else if (tab === 'information') {
                this.$router.push({ name: 'InfoCourse' });
            }
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
        storeThumbnail() {
            localStorage.setItem('thumbnailUrl', this.thumbnailUrl);
        },
        storeData() {
            this.storeTitle();
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
        },
    },
    mounted() {
        this.loadStoredData();
    }
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
