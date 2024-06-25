<template>
    <div class="flex flex-col m-4">
      <div class="flex justify-between mb-4">
        <h1>Kategori teratas</h1>
        <div @click="toggleShowAll" class="cursor-pointer border border-gray-200 text-gray-500 rounded-full p-2 text-sm font-light">
          All Kategories
        </div>
      </div>
  
      <div :class="gridClass">
        <div v-for="(card) in displayedCards" :key="card.id" class="border shadow-sm flex flex-col  rounded-lg text-center">
          <img :src="card.image" alt="icon">
          <div class="flex flex-col my-2">
            <p class="text-md font-semibold text-black">{{ card.title }}</p>
            <p class="text-gray-400 text-sm">{{ card.courses }} courses</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import courseImage from '@/assets/course.png';
 
  
  export default {
    name: 'SectionKategori',
    data() {
      return {
        showAll: false,
        cards: [
          { id: 1, image: courseImage, title: 'Desain', courses: 38 },
          { id: 2, image: courseImage, title: 'Desain', courses: 38 },
          { id: 3, image: courseImage, title: 'Desain', courses: 38 },
          { id: 4, image: courseImage, title: 'Desain', courses: 38 },
          { id: 5, image: courseImage, title: 'Desain', courses: 38 },
          { id: 6, image: courseImage, title: 'Desain', courses: 38 },
          { id: 7, image: courseImage, title: 'Desain', courses: 38 },
          { id: 8, image: courseImage, title: 'Desain', courses: 38 },
          { id: 9, image: courseImage, title: 'Desain', courses: 38 },
          { id: 10, image: courseImage, title: 'Desain', courses: 38 },
          { id: 11, image: courseImage, title: 'Desain', courses: 38 },
          { id: 12, image: courseImage, title: 'Desain', courses: 38 },
          // Tambahkan card sesuai kebutuhan
        ]
      };
    },
    computed: {
      displayedCards() {
        if (this.showAll) {
          return this.cards;
        } else {
          // Set the number of cards to show initially for different screen sizes
          const smCount = 4;
          const mdCount = 8;
          const lgCount = 12;
          if (window.innerWidth >= 1024) {
            return this.cards.slice(0, lgCount);
          } else if (window.innerWidth >= 768) {
            return this.cards.slice(0, mdCount);
          } else {
            return this.cards.slice(0, smCount);
          }
        }
      },
      gridClass() {
        return {
          'grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6': true,
          'sm:grid-rows-3 md:grid-rows-2 lg:grid-rows-4': !this.showAll
        };
      }
    },
    methods: {
      toggleShowAll() {
        this.showAll = !this.showAll;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Custom CSS to limit number of rows based on screen size */
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
      grid-template-rows: repeat(2, minmax(0, 1fr));
    }
  }
  </style>
  