<template>
    <div class="w-full h-screen flex flex-row">
      <!-- Sidebar Component -->
      <div class="flex z-50" :class=" ['main-sidebar', { 'main-sidebar-hidden': !sidebarVisible, 'sm:block': true }]">
        <MainSidebar @menu-selected="updatePageTitle" />
      </div>
  
      <!-- Main Content -->
      <div class="w-full  h-full flex flex-col flex-1 bg-gray-50">
        <MainHeader :pageTitle="pageTitle"  />
        <div class="h-full overflow-auto bg-white">
          <div class="bg-blue">
            <router-view></router-view> 
          </div>        
        </div>
  
        <!-- <CourseCard/> -->
        <!-- <CourseCard :course="selectedCourse" /> -->
      </div>
  
  
    </div>
  </template>
  
  <script>
  import MainSidebar from '@/components/Sidebar/Sidebar.vue';
  import MainHeader from '@/components/Header/Header.vue';
  // import CourseCard from '@/components/CourseCard.vue';
  
  export default {
    name: 'App',
    components: {
      MainSidebar,
      MainHeader,
    },
    // CourseCard
    data() {
      return {
        pageTitle: 'Dashboard',
        sidebarVisible:true, //State untuk mengelola visibility sidebar
      };
    },
    methods: {
      updatePageTitle(title) {
        this.pageTitle = title; // Memperbarui judul halaman
      }
    },
    mounted() {
      if(this.$route.meta && this.$route.meta.title) {
        this.updatePageTitle(this.$route.meta.title);
      } else {
        this.updatePageTitle('Dashboard');
      }
    },
  
    watch: {
      '$route'(to) {
        if (to.meta && to.meta.title) {
          this.updatePageTitle(to.meta.title);
        } else {
          this.updatePageTitle('Dashboard');
        }
      }
    }
  }
  </script>
  
  <style>
  .main-sidebar {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    transition: transform 0.3s ease;
    
  }
  
  .main-sidebar-hidden {
    transform: translateX(-100%);
  }
  
  @media (min-width: 640px) {
    .main-sidebar {
      transform: none; /* Show sidebar on larger screens */
      position: relative;
    }
  }
  
  .main-content {
    width: 100%;
    transition: margin-left 0.3s ease;
  }
  
  /* Optional: Mengubah margin kiri konten utama saat sidebar terlihat atau disembunyikan */
  .main-content-with-sidebar {
    margin-left: 250px; /* Sesuaikan dengan lebar sidebar */
  }
  </style>