<template>
  <div class="flex flex-col gap-0 items-end text-center">
    <div class="flex justify-end border-stroke w-16">
      <div class="flex space-x-4 text-center">
        <div class="flex flex-col w-full relative ">
          <!-- Tombol untuk menampilkan opsi filter -->
          <div class="px-2 flex gap-2 cursor-pointer items-center text-center bg-blue-100 text-blue-500"
            @click="toggleFilterMenu">
            <div class="text-xs sm:text-sm m-1"
              :class="{ 'class-file': activeFilter === 'file', 'class-video': activeFilter === 'video', 'class-kuis': activeFilter === 'kuis' }">
              {{ filterText }}</div>
            <div :class="{ 'rotate-180': showFilterMenu }">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-4 h-4 transition-transform duration-300">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>

          <!-- Opsi filter yang akan muncul saat tombol di klik -->
          <div class="bg-white w-full absolute top-full left-0 border border-gray-200 rounded-b-md"
            v-if="showFilterMenu">
            <div class="hover:bg-gray-200 p-2 text-xs cursor-pointer" @click="applyFilter('file')">File</div>
            <div class="hover:bg-gray-200 p-2 text-xs cursor-pointer" @click="applyFilter('video')">Video</div>
            <div class="hover:bg-gray-200 p-2 text-xs cursor-pointer" @click="applyFilter('kuis')">Kuis</div>
          </div>

        </div>
      </div>
    </div>
    <div class="mt-4 w-full">
      <!-- Tampilkan konten sesuai dengan filter yang dipilih -->
      <DOc v-if="activeFilter === 'file'" />
      <VIdeo v-if="activeFilter === 'video'" />
      <KUis v-if="activeFilter === 'kuis'" />
    </div>
  </div>
</template>

<script>
import DOc from '@/components/Section/BuatCourse/DOc.vue';
import VIdeo from '@/components/Section/BuatCourse/VIdeo.vue';
import KUis from '@/components/Section/BuatCourse/KUis.vue';

export default {
  components: {
    VIdeo,
    DOc,
    KUis,
  },
  data() {
    return {
      showFilterMenu: false,
      activeFilter: null,
    };
  },
  computed: {
    filterText() {
      switch (this.activeFilter) {
        case 'file':
          return 'File';
        case 'video':
          return 'Video';
        case 'kuis':
          return 'Kuis';
        default:
          return 'Class';
      }
    }
  },
  methods: {
    toggleFilterMenu() {
      this.showFilterMenu = !this.showFilterMenu;
    },
    applyFilter(filter) {
      this.activeFilter = filter;
      this.showFilterMenu = false; // Menyembunyikan menu filter setelah filter dipilih
    }
  },
};
</script>

<style scoped>
/* Jika diperlukan, tambahkan styling untuk class-file, class-video, dan class-kuis */
</style>
