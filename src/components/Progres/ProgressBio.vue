<template>
  <div class="bg-[#edebeb] w-full  relative rounded-[5px]">
    <div class="progress-bar rounded-[5px] text-xs flex items-center justify-end pr-2" :style="{ width: progress + '%' }">
      <span class="text-white ">{{ progress }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
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
