<template>
  <section class="flex flex-col mx-4 ">
    <!-- <div class="flex flex-row m-4 justify-between text-center items-center"> -->
    <div class="mb-4">
      <h1 class="text-lg">Best Courses</h1>
    </div>

    <!-- Wrapper untuk kartu-kartu -->
    <div class="flex space-x-4 overflow-x-auto" style="scrollbar-width: none; -ms-overflow-style: none;">
      <!-- Course Cards -->
      <div v-for="(course, index) in courses" :key="index" class="flex-shrink-0">
        <div
          class="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white border border-gray-200 rounded-lg shadow-md">
          <a href="#">
            <!-- Mengatur ukuran gambar -->
            <div>
              <img class="object-cover rounded-t-lg" src="@/assets/course.png" alt="Course Image" />
            </div>
          </a>
          
          <!-- text -->
          <div class="  flex flex-col space-y-4">
            <div>
              <a href="#">
                <h5 class="mx-4 mt-4 font-semibold text-sm tracking-tight text-gray-500">{{ truncate(course.deskripsi)
                  }}</h5>
              </a>
            </div>
            <div>
              <p class="mx-4 font-bold text-gray-700">{{ course.title }}</p>
            </div>
            <div>
              <hr class="border-t-2 border-gray-300">
            </div>
            <div class="flex justify-between pt-2 text-center items-center">
              <div>
                <button
                  class="rounded-md bg-blue-200 hover:bg-blue-500 hover:text-white text-[#564FFD] mx-4 mb-4 py-2 shadow-md transition-colors duration-200">
                  <p class="font-semibold text-md mx-12">Fill</p>
                </button>
              </div>
              <div>
                <p class="pr-4 font-medium text-md text-blue-600 cursor-pointer hover:underline">View more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'CourseCard',
  data() {
    return {
      courses: [
        {
          deskripsi: 'Reiki Level I, II and Master/Teacher Program Reiki Level I, II and Master/Teacher ProgramReiki Level I, II and Master/Teacher Program ',
          title: 'Pemrograman Web',
        },
        {
          deskripsi: 'Reiki Level I, II and Master/Teacher Program Reiki Level I, II and Master/Teacher ProgramReiki Level I, II and Master/Teacher Program ',
          title: 'Pemrograman Web',
        },
        {
          deskripsi: 'Reiki Level I, II and Master/Teacher Program Reiki Level I, II and Master/Teacher ProgramReiki Level I, II and Master/Teacher Program ',
          title: 'Pemrograman Web',
        },
        {
          deskripsi: 'Burhan Ahmad',
          title: 'Pemrograman Web',
        },
        // Add more course objects as needed
      ]
    };
  },
  methods: {
    truncate(description) {
      if (description.length > 60) {
        return description.substring(0, 40) + '...';
      } else {
        return description;
      }
    }
  }
}
</script>

<style scoped></style>
