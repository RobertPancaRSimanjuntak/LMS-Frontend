<template>
  <div class="flex justify-center items-center relative">
    <svg
      class="w-7 h-7 transform -rotate-90"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="transparent"
        stroke="currentColor"
        stroke-opacity="0.2"
        stroke-width="10"
      />
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="transparent"
        stroke="green"
        stroke-width="12"
        stroke-dasharray="282.743"
        :style="progressStyle"
      />
    </svg>
    <span v-if="progress === 100" class="absolute text-white ">
      <i class="fas fa-check text-md"></i>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      required: true,
      validator: value => value >= 0 && value <= 100
    }
  },
  computed: {
    progressStyle() {
      const circumference = 2 * Math.PI * 45; // 2 * π * r
      const offset = circumference - (this.progress / 100) * circumference;
      return {
        strokeDashoffset: offset,
        fill: this.progress === 100 ? 'green' : 'transparent'
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
