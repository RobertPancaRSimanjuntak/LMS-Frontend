<template>
  <div>
    <div class="bg-white fixed top-0 w-full z-50">
      <HeaderLog />

    </div>

    <div class="mt-80 sm:mt-16">
      <!-- iklan -->
      <section id="Home">
        <SectionIklan />
      </section>

      <!-- Jenis course -->
      <section>
        <SectionKategori />
      </section>

      <!-- Course -->
      <section id="Course" class="justify-center items-center">
        <SectionCourse />
      </section>

      <!-- Iklan -->
      <section>
        <AboutPage />
      </section>

      <!-- Instruktur terbaik -->
      <section id="About" class="justify-center items-center">
        <InstructorPage />
      </section>
    </div>
  </div>
</template>

<script>
import HeaderLog from '@/components/Header/HeaderLog.vue';
import SectionIklan from '@/components/Section/IklanPage.vue';
import SectionKategori from '@/components/Section/KategoriPage.vue';
import SectionCourse from '@/components/Section/CourseS.vue';
import AboutPage from '@/components/Section/AboutPage.vue';
import InstructorPage from '@/components/Section/InstructorPage.vue';

export default {
  name: 'HomeWeb',
  components:
  {
    HeaderLog,
    SectionIklan,
    SectionKategori,
    SectionCourse,
    AboutPage,
    InstructorPage,
  },

  mounted() {
    // Memilih semua anchor links di dalam header menu
    const links = document.querySelectorAll('a[href^="#"]');

    // Menambahkan event listener untuk setiap anchor link
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        // Mengambil target dari anchor link (bagian tujuan)
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Melakukan scroll otomatis ke bagian tujuan
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  //     
}

</script>

<style>
/* Additional styling */
</style>