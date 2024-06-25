<template>
    <div class="flex space-y-12 justify-center items-center ">
      <div class="w-full max-w-lg text-center flex flex-col space-y-2">
        <video v-if="currentVideoUrl" class="max-w-screen max-h-[300px] rounded-lg shadow-lg mt-4" controls :key="videoKey">
          <source :src="currentVideoUrl" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <label for="video-upload"
          class="inline-block bg-blue-500 text-white p-2 rounded cursor-pointer hover:bg-blue-700">
          Pilih Video
        </label>
        <input id="video-upload" type="file" accept="video/*" @change="onFileChange" class="hidden" />
      </div>    
    </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  data() {
    return {
      videoUrl: null,
      defaultVideoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      videoKey: 0
    };
  },
  computed: {
    currentVideoUrl() {
      return this.videoUrl || this.defaultVideoUrl;
    }
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.videoUrl = URL.createObjectURL(file);
        this.videoKey += 1; // Memaksa Vue untuk merender ulang elemen video
      }
    }
  }
};
</script>

<style>
/* Tidak ada CSS tambahan yang diperlukan */
</style>
