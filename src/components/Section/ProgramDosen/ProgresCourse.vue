<template>
    <div class="flex gap-4 justify-center">
    <div class="bg-[#edebeb] w-full  relative rounded-[5px]">
      <div class="progress-bar rounded-[5px] text-xs flex items-center justify-end pr-2" :style="{ width: proses+ '%' }">
      </div>
    </div>
    <div>
        <span class="text-[#564FFD] text-sm text-center justify-center items-center ">{{ proses }}%</span>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
        proses: {
        type: Number,
        required: true,
        default: 40
      }
    }
  }
  </script>
  
  <style scoped>
  .progress-bar {
    height: 100%;
    background-color: #55BE24;
    transition: width 0.3s ease-in-out;
    position: relative;
  }
  </style>
  