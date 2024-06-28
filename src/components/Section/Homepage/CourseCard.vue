<template>
  <div class="flex flex-col gap-2 mx-8 mt-8">
    <div class="flex justify-between">
      <div>
        <h1 class="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold">Algorithm and Data Structure</h1>
      </div>
      <div @click="toggleShowAll" class="cursor-pointer border border-gray-200 text-gray-500 rounded-full p-2 text-xs sm:text-sm font-light text-center">
        All Kategories
      </div>
    </div>

    <!-- Wrapper untuk kartu-kartu -->
    <div :class="gridClass" class="grid gap-4 justify-center items-center">
      <!-- Course Cards -->
      <div v-for="(course, id) in displayedCourse" :key="id" class="flex-shrink-0 h-60">
        <div class="max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg bg-white rounded-lg shadow-md flex flex-col items-center">
          <!-- Mengatur ukuran gambar -->
          <div class="w-full h-36">
            <img class="object-cover rounded-t-lg w-full h-full" :src="course.image" alt="Course Image" />
          </div>
          <!-- konten -->
          <div class="flex flex-col py-4 space-y-4 w-full">
            <div class="flex flex-col space-y-2 h-8">
              <h1 class="px-4 font-semibold sm:text-md text-sm text-gray-700">{{ course.title }}</h1>
            </div>
            <div class="w-full h-auto px-4">
              <ProgressBar :progress="course.progress" />
            </div>
            <div class="border-t-2 border-gray-300 px-4 pt-4 w-full">
              <!-- Menggunakan method openCourse saat tombol diklik -->
              <button @click="openCourse(course.id)"
                class="rounded-md w-full bg-blue-200 hover:bg-blue-500 hover:text-white text-[#564FFD] py-2 px-4 shadow-md transition-colors duration-200 font-semibold text-sm">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import c from '@/assets/Program/c.png';
import strukdat from '@/assets/Program/strukdat.png';
import computation from '@/assets/Program/computation.png';
import ProgressBar from '@/components/Progres/ProgressBio';

export default {
  name: 'CourseCard',
  components: {
    ProgressBar,
  },
  data() {
    return {
      showAll: false,
      course: [
        {
          id: 1,
          image: strukdat,
          title: 'Struktur Data dan Algoritma',
          progress: 40,
        },
        {
          id: 2,
          image: computation,
          title: 'Computational Thinking',
          progress: 0,
        },
        {
          id: 3,
          image: c,
          title: 'Pemrograman Dasar dengan C++',
          progress: 0,
        },
      ]
    };
  },
  computed: {
    displayedCourse() {
      if (this.showAll) {
        return this.course;
      } else {
        const Count = 1;
        const smCount = 3;
        const mdCount = 6;
        const lgCount = 9;
        if (window.innerWidth >= 1024) {
          return this.course.slice(0, lgCount);
        } else if (window.innerWidth >= 768) {
          return this.course.slice(0, mdCount);
        } else if(window.innerWidth >= 640){
          return this.course.slice(0, smCount);
        }else {
          return this.course.slice(0, Count);
        }
      }
    },
    gridClass() {
      return {
        'grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4': true,
        'grid-rows-2 sm:grid-rows-4 md:grid-rows-6 lg:grid-rows-10': !this.showAll
      };
    }
  },
  methods: {
    toggleShowAll() {
      this.showAll = !this.showAll;
    },
    openCourse(courseId) {
      this.$router.push({ name: 'CoursePage', params:{ id:courseId } });
    }
  },
}
</script>

<style scoped>
/* Custom CSS untuk membatasi jumlah baris berdasarkan ukuran layar */
@media (min-width: 1024px) {
  .grid {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .grid {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .grid {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }
}

/* Styling untuk gambar agar memiliki ukuran yang sama */
.small-image {
  width: 150%;
  height: 100%;
  object-fit: cover; /* Mengatur agar gambar memenuhi container tanpa memengaruhi proporsi */
  object-position: center; /* Mengatur posisi gambar di tengah container */
}
</style>
