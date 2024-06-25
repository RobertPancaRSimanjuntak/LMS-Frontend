<template>
    <div>
      <div class="flex flex-col w-auto relative">
        <!-- Tombol untuk menampilkan opsi filter -->
        <div class="px-2 flex justify-between cursor-pointer items-center text-center" @click="toggleFilterMenu">
          <div class="text-xs sm:text-sm m-1">
            {{ activeFilter ? activeFilter : 'Class' }}
          </div>
          <div :class="{ 'rotate-180': showFilterMenu }">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-4 h-4 transition-transform duration-300">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
  
        <!-- Opsi filter yang akan muncul saat tombol di klik -->
        <div class="bg-white w-40 absolute top-full left-0 border border-gray-200 rounded-b-md"
          v-if="showFilterMenu">
          <div class="hover:bg-gray-200 p-2 text-xs cursor-pointer" @click="applyFilter('Benar')">Benar</div>
          <div class="hover:bg-gray-200 p-2 text-xs cursor-pointer" @click="applyFilter('Salah')">Salah</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showFilterMenu: false,
        activeFilter: null,
        items: [
          { id: 1, name: 'Item 1', category: 'Benar' },
          { id: 2, name: 'Item 2', category: 'Salah' },
        ]
      };
    },
    computed: {
      filteredItems() {
        if (this.activeFilter) {
          return this.items.filter(item => item.category === this.activeFilter);
        }
        return this.items;
      }
    },
    methods: {
      toggleFilterMenu() {
        this.showFilterMenu = !this.showFilterMenu;
      },
      applyFilter(filter) {
        this.activeFilter = filter;
        this.showFilterMenu = false;
      }
    }
  };
  </script>
  
  <style>
  .rotate-180 {
    transform: rotate(180deg);
  }
  .transition-transform {
    transition-property: transform;
    transition-duration: 0.3s; /* Ubah durasi animasi sesuai kebutuhan Anda */
  }
  </style>
  