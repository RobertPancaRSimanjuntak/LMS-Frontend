<template>
  <div class="flex flex-col space-y-4 justify-end m-8">

    <div class="flex flex-col space-y-4 justify-end  sm:items-start items-end">
      <div class="search flex border border-gray-300 rounded-md sm:pr-32 pr-0">
        <!-- Hanya menampilkan ikon pencarian saat ukuran layar sm -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="md:size-4 size-3 m-2">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <!-- Input pencarian -->
        <input type="text" placeholder="Search..." class="flex-1 focus:outline-none hidden sm:block">
      </div>
    </div>


  <!-- Wrapper untuk kartu-kartu -->
  <div :class="gridClass" class="grid gap-4 justify-center items-center">
    <!-- Course Cards -->
    <div v-for="(course, id) in displayedCourse" :key="id" class="flex-shrink-0">
      <div @click="openCourse(course.id)"
        class="h-auto max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg bg-white rounded-lg shadow-md items-center justify-center cursor-pointer">
        <!-- Mengatur ukuran gambar -->
        <div>
          <img class="object-cover small-image rounded-t-lg" :src="course.image" alt="Course Image" />
        </div>
        <!-- konten -->
        <div class="flex flex-col py-2 space-y-6">
          <div class="flex flex-col space-y-2">
            <p class="px-4 font-semibold text-xs sm:text-sm md:text-md text-gray-700">{{ course.title }}</p>
          </div>
          <div class="border-t-2 border-gray-300 px-4 pt-2 items-center text-center">
            <div class="flex space-x-2 text-gray-500 justify-end">
              <div :class="{ 'text-gray-300': course.diskon, 'line-through': course.diskon }"
                class="text-gray-400 font-sans">{{ course.harga }}</div>
              <div class="text-green-400">{{ course.diskon }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import courseImage from '@/assets/course.png';

export default {
  name: 'BrowseCard',
  data() {
    return {
      showAll: false,
      course: [
        {
          id: 1,
          image: courseImage,
          title: 'Pemrograman Web',
          harga: '$50',
        },
        {
          id: 2,
          image: courseImage,
          title: 'Pemrograman Web',
          harga: '$40',
          diskon: '$20',
        },
        {
          id: 3,
          image: courseImage,
          title: 'Pemrograman Web',
          diskon: 'free',
        },
        {
          id: 4,
          image: courseImage,
          title: 'Pemrograman Web',
          diskon: 'free',
        },
      ]
    };
  },
  computed: {
    displayedCourse() {
      if (this.showAll) {
        return this.course;
      } else {
        const smCount = 3;
        const mdCount = 6;
        const lgCount = 10;
        if (window.innerWidth >= 1024) {
          return this.course.slice(0, lgCount);
        } else if (window.innerWidth >= 768) {
          return this.course.slice(0, mdCount);
        } else {
          return this.course.slice(0, smCount);
        }
      }
    },
    gridClass() {
      return {
        'grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5': true,
        'sm:grid-rows-3 md:grid-rows-6 lg:grid-rows-10': !this.showAll
      };
    }
  },
  methods: {
    toggleShowAll() {
      this.showAll = !this.showAll;
    },
    openCourse(courseId) {
      console.log(`Navigating to DeskripsiBrowse with id: ${courseId}`);
      this.$router.push({ name: 'DeskripsiBrowse', params: { id: courseId } });
    }
  }
}
</script>

<style scoped>
/* Custom CSS untuk membatasi jumlah baris berdasarkan ukuran layar */
@media (min-width: 1024px) {
  .grid {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .grid {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .grid {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }
}

.line-through {
  text-decoration: line-through;
}
</style>
