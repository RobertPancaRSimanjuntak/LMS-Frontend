<template>
  <div class="relative">
    <!-- Video Section -->
    <video controls class="w-full h-80">
      <!-- Dynamic import for video source -->
      <source :src="videoSource" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <!-- Optional Play Button (commented out if not used) -->
    <!-- 
    <button @click="playVideo" class="absolute inset-0 flex items-center justify-center w-full h-full bg-blue-500 bg-opacity-50 text-white rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-5.008-3.004A1 1 0 0 0 8 9.003v6a1 1 0 0 0 1.744.752l5.008-3.004a1 1 0 0 0 0-1.584z"/>
      </svg>
    </button>
    -->
  </div>
</template>

<script setup lang="js">
import { ref } from 'vue';

// Dynamically import video file from assets
const videoSource = ref(require('@/assets/video.mp4'));

// Optional play function
const playVideo = () => {
  const videoElement = document.querySelector('video');
  if (videoElement.paused) {
    videoElement.play();
  } else {
    videoElement.pause();
  }
};
</script>

<style scoped>
/* Styling for the video container and button */
video {
  object-fit: cover;
  display: block;
}

button {
  background: rgba(0, 0, 0, 0.5);
  border: none;
  cursor: pointer;
}

button svg {
  width: 3rem;
  height: 3rem;
  fill: white;
}
</style>
