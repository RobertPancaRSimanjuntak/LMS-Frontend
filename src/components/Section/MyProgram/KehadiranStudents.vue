<template>
    <div class="flex flex-col gap-2 p-4 my-4 bg-white rounded-lg">
      <div class="text-lg font-medium">Kehadiran</div>
  
      <!-- Loop untuk setiap pertemuan -->
      <div v-for="(menu, index) in filterMenus" :key="index" class="bg-gray-100 w-full relative">
        <div class="flex flex-col">
          <!-- Tombol untuk menampilkan opsi filter -->
          <div class="px-2 flex justify-between cursor-pointer items-center text-center p-2"
            @click="toggleFilterMenu(index)">
            <div class="text-xs sm:text-sm m-1">Pertemuan {{ index + 1 }}</div>
            <div :class="{ 'rotate-180': menu.show }">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-4 h-4 transition-transform duration-300">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>
  
          <!-- Opsi filter yang akan muncul saat tombol di klik -->
          <transition name="slide-fade">
            <div v-if="menu.show" class="w-full border-t-2 border-gray-200 rounded-b-md px-2">
              <div class="flex justify-between items-center text-center">
                <div class="p-2 text-sm">Hadir</div>
                <div class="w-20 sm:w-40 items-center text-center justify-center">
                  <!-- Komponen Progres atau konten yang sesuai -->
                  <div class="w-20 sm:w-40">
                    <ProgresCourse class="h-4 rounded-full" :proses="menu.progress" />
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ProgresCourse from '@/components/Section/ProgramDosen/ProgresCourse.vue';
  
  export default {
    components: {
      ProgresCourse,
    },
    data() {
      return {
        filterMenus: [
          { show: false, progress: 80 }, // Pertemuan 1 dengan progres 10%
          { show: false, progress: 50 }, // Pertemuan 2 dengan progres 50%
          { show: false, progress: 30 }, // Pertemuan 3 dengan progres 30%
          { show: false, progress: 70 }, // Pertemuan 4 dengan progres 70%
        ],
        activeFilter: null,
      };
    },
    methods: {
      toggleFilterMenu(index) {
        // Toggle menu yang dipilih
        this.filterMenus[index].show = !this.filterMenus[index].show;
  
        // Sembunyikan semua menu kecuali yang dipilih
        this.filterMenus.forEach((menu, idx) => {
          if (idx !== index) {
            menu.show = false;
          }
        });
      },
      applyFilter(filter) {
        this.activeFilter = filter;
        // Sembunyikan semua menu saat filter diterapkan
        this.filterMenus.forEach(menu => {
          menu.show = false;
        });
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
  }
  
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: opacity 0.5s ease, max-height 0.5s ease;
  }
  
  .slide-fade-enter, .slide-fade-leave-to {
    opacity: 0;
    max-height: 0;
  }
  </style>
  