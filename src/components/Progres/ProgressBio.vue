<template>
  <div class="w-full flex gap-2">
  <div class="bg-[#edebeb] relative w-full rounded-[5px]">
    <div class="progress-bar rounded-[5px] text-xs flex items-center justify-end pr-2" :style="{ width: progress + '%', backgroundColor: progress > 0 ? '#55BE24' : '#edebeb' }">   
    </div>
  </div>
  <span class="text-black ">{{ progress }}%</span>
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
