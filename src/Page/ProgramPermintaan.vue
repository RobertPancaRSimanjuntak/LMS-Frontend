<template>
    <div class="mx-12 mt-8">
        <div class="flex flex-col max-w-screen relative">
            <!-- Tombol untuk menampilkan opsi filter -->
            <div class="px-2 flex justify-between shadow-md bg-gray-50 cursor-pointer items-center text-center">
                <div class="text-sm sm:text-md m-4 text-blue-600">Burhan Kaido</div>
                <div class="flex space-x-4 items-center pr-2">
                    <!-- Tombol Terima dan Tolak hanya muncul jika belum ada keputusan -->
                    <div v-if="!decisionMade" type="button" class="text-sm text-white py-1 px-4 bg-blue-600 rounded-sm" @click="accept">Terima</div>
                    <div v-if="!decisionMade" type="button" class="text-sm text-white py-1 px-4 bg-blue-600 rounded-sm" @click="reject">Tolak</div>

                    <!-- Ikon Ceklis atau Salah -->
                    <div v-if="decisionMade === 'accepted'" class="text-green-500">
                        <!-- Ikon Ceklis -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </div>
                    <div v-if="decisionMade === 'rejected'" class="text-red-500">
                        <!-- Ikon Salah -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>

                    <div :class="{ 'rotate-180': showFilterMenu }" @click="toggleFilterMenu">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 transition-transform duration-300">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>
            </div>

            <!-- Opsi filter yang akan muncul saat tombol di klik -->
            <div class="bg-gray-50 w-full p-4 flex space-x-8 absolute top-full left-0 rounded-b-md" v-if="showFilterMenu">
                <div class="flex flex-col space-y-2">
                    <div class="text-sm text-gray-700 font-sans">Course</div>
                    <div class="text-sm text-gray-700 font-sans">Email</div>
                    <div class="text-sm text-gray-700 font-sans">No.HP </div>
                </div>
                <div class="flex flex-col space-y-2">
                    <div class="text-sm text-gray-700 font-sans"> : <span class="ml-1">UI/UX Design</span></div>
                    <div class="text-sm text-gray-700 font-sans"> : <span class="ml-1">BurhanKaido@gmail.com</span></div>
                    <div class="text-sm text-gray-700 font-sans"> : <span class="ml-1">085700010001</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showFilterMenu: false,
            decisionMade: null, // State untuk menyimpan keputusan (diterima atau ditolak)
        };
    },
    methods: {
        toggleFilterMenu() {
            this.showFilterMenu = !this.showFilterMenu;
        },
        accept() {
            this.decisionMade = 'accepted';
        },
        reject() {
            this.decisionMade = 'rejected';
        },
    },
};
</script>

<style scoped>
.rotate-180 {
    transform: rotate(180deg);
}

.transition-transform {
    transition-property: transform;
    transition-duration: 0.3s;
    /* Ubah durasi animasi sesuai kebutuhan Anda */
}
</style>
