<template>
    <div class="p-8 flex items-center justify-center">
        <div class="form-container bg-white w-full sm:w-1/2 rounded-lg shadow-sm">
            <div class="p-12">
                <div class="flex flex-col gap-8">
                    <h1 class="text-lg font-semibold">Algorithm and Data Structure</h1>
                    <ol class="text-sm text-gray-600 custom-list">
                        <li>Bersedia mengikuti dan menjalani pemebelajaran 6 bulan dengan kehadiran minimal 80% dari keseluruhan perkuliahan</li>
                        <li>Memverifikasi kelengkapan data pengguna.</li>
                        <li>Sudah terdaftar sesuai universitas terdaftar</li>
                    </ol>
                    <div class="checkbox-container">
                        <input type="checkbox" v-model="agreement" id="agreement">
                        <label for="agreement" class="text-sm text-gray-600">Saya setuju dengan semua syarat dan ketentuan yang diberikan.</label>
                    </div>
                    <div class="flex justify-center">
                        <button :disabled="!agreement" @click="handleSubmit" class="p-1 px-12 bg-blue-500 text-white rounded-lg disabled:bg-blue-200">Submit</button>
                    </div>
                </div>
            </div>
            <PopUp v-if="showPopup" @close="showPopup = false" />
        </div>
    </div>
</template>

<script>
import PopUp from '@/components/Section/Browse/PopUp.vue';

export default {
    components: {
        PopUp,
    },

    data() {
        return {
            agreement: false,
            showPopup: false
        };
    },
    methods: {
        handleSubmit() {
            this.showPopup = true;
        }
    }
}
</script>

<style>
html, body {
    height: 100%;
}

.custom-list {
  counter-reset: item;
}

.custom-list li {
  counter-increment: item;
  list-style: none;
}

.custom-list li::before {
  content: counter(item) ". ";
  font-weight: lighter;
  color: #333;
}
</style>
