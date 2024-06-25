<template>
    <div class="mt-2">
      <div class="sm:items-start items-center sm:justify-start justify-center sm:text-start text-center">
        <div class="mx-4 p-4 flex justify-center items-center relative rounded-full bg-[#ffffff] shadow">
          <svg class="sm:w-40 w-32 h-auto transform -rotate-90" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="white" stroke="currentColor" stroke-opacity="0.1" stroke-width="11" />
            <circle cx="50" cy="50" r="42" fill="white" :stroke="progress === 10 ? '#564FFD' : '#564FFD'"
              stroke-width="16" :stroke-dasharray="circumference" :style="progressStyle" />
          </svg>
          <span v-if="progress === 10" class="absolute text-white ">
            <i class="fas fa-check text-md"></i>
          </span>
          <span class="absolute text-gray-600">{{ progres }}/10</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      progres: {
        type: Number,
        required: true,
        validator: value => value >= 0 && value <= 10
      }
    },
    computed: {
      circumference() {
        return 2 * Math.PI * 45; // 2 * π * r
      },
      progressStyle() {
        const offset = this.circumference - (this.progres / 10) * this.circumference;
        return {
          strokeDashoffset: offset,
        };
      }
    }
  };
  </script>
  
  <style scoped>
  svg {
    transform: rotate(-90deg);
  }
  </style>