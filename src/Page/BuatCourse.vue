<template>
    <div class="bg-gray-50 shadow justify-between items-end flex flex-col space-y-4 px-8 py-4 m-8 rounded-md ">
        <div @click="tambah" type="button" class="px-4 py-2 bg-indigo-600 rounded-md justify-center items-center flex gap-2">
            <i class="fa-solid fa-plus text-white text-xs"></i>
            <div class="text-white text-sm font-sans">Tambah</div>
        </div>
        <div class="flex-col justify-start items-start flex w-full">
            <div class="justify-between items-center flex border border-gray-200 w-full">
                <div class="p-4 justify-start items-center flex">
                    <div class="text-black text-base font-medium font-sansleading-tight">Nama Program</div>
                </div>
            </div>
            <div class="w-full bg-gray-200 justify-start items-center inline-flex">
                <div class="p-4 justify-start items-center gap-2.5 flex">
                    <div class="text-black text-base font-normal font-sans leading-tight">{{ courseTitle || 'No data' }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    computed: {
        courseTitle() {
            return this.$store.getters.getCourseTitle;
        },
    },
    methods: {
        save() {
            // Logika penyimpanan Anda di sini
            console.log("Saved!");
        },
        saveAndPreview() {
            // Logika penyimpanan Anda di sini
            console.log("Saved and Previewed!");
        },
        tambah() {
            // Logika penyimpanan Anda di sini
            console.log("Saved and navigating to Curriculum!");
            this.$router.push({  name:'InfoCourse' }); // Gantilah 'CurriculumPage' dengan nama rute yang sesuai
        }
    }

}

</script>

<style scoped>
/* Tambahkan gaya kustom Anda di sini */
</style>