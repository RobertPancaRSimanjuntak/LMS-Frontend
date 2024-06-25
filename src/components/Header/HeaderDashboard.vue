<script setup>
import { defineProps, ref, onMounted } from 'vue'

const props = defineProps(['pageTitle'])
const isSidebarOpen = ref(true) // Atur menu sidebar terbuka secara default
const userPhoto = ref('@/assets/images.png')

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value // Ubah status menu sidebar saat tombol toggle diklik
  const sidebar = document.querySelector('.sidebar') // Pilih elemen menu sidebar
  if (isSidebarOpen.value) {
    sidebar.classList.remove('hidden') // Hapus kelas 'hidden' untuk menampilkan menu sidebar
  } else {
    sidebar.classList.add('hidden') // Tambahkan kelas 'hidden' untuk menyembunyikan menu sidebar
  }
}

const handleFileChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      userPhoto.value = e.target.result
      localStorage.setItem('userPhoto', e.target.result)
    }
    reader.readAsDataURL(file)
  }
}

onMounted(() => {
  const savedUserPhoto = localStorage.getItem('userPhoto')
  if (savedUserPhoto) {
    userPhoto.value = savedUserPhoto
  }
})
</script>

<template>
  <div class="main-header flex justify-between items-center text-center p-4 my-1">
    <div class="text-center justify-center items-center">
      <div class="flex flex-row space-x-12 ">
        <!-- Mengubah flex menjadi flex items-center untuk membuat semua elemen sejajar secara horizontal -->
        <div class="hidden sm:block">
          <button @click="toggleSidebar"
            class="items-center text-center justify-center block hover:text-gray-700 focus:text-gray-700 focus:outline-none relative">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              class="w-4 sm:w-8 h-8 rounded-md absolute left-0 transition-transform duration-300 transform sidebar-icon">
              <path fill-rule="evenodd"
                d="M4 6a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1z" />
            </svg>
          </button>
        </div>
        <!-- Nama Halaman (Dashboard) di Sisi Kanan -->
        <div class="text-lg sm:text-xl font-semibold mt-1">{{ props.pageTitle }}</div>
      </div>
    </div>
    <div class="flex space-x-4 justify-center items-center">
      <div class="search flex items-center border border-gray-300 rounded-md">
        <!-- Hanya menampilkan ikon pencarian saat ukuran layar sm -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="md:size-4 size-3 m-2"> <!-- Menampilkan hanya pada ukuran sm -->
          <path stroke-linecap="round" stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <!-- Input pencarian -->
        <input type="text" placeholder="Search..." class="flex-1 focus:outline-none hidden sm:block  bg-gray-50">
      </div>
      <div class="notifications flex items-center">
        <span class="icon text-xl text-gray-700 rounded-full border-2 border-gray-300 hover:border-gray-600 relative">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-4 sm:size-6 m-1">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
          <span class="absolute h-2 w-2 bg-red-500 rounded-full top-0 right-0"></span>
        </span>
      </div>
      <div class="profile ml-4">
        <img :src="userPhoto" alt="Profile"
          class="size-7 sm:size-8 rounded-full border-2 border-gray-300 hover:border-gray-600 cursor-pointer">
        <input id="profile-upload" type="file" style="display: none" accept="image/*" @change="handleFileChange">
      </div>
    </div>
  </div>
</template>


