<template>
  <div class="mx-18">
    <div class="overlay" @click="closePopup">
      <div class="popup" @click.stop>
        <!-- Pop-up content -->
        <div>
          <ProgressBar :progress="progress1" />
        </div>
        <div class="flex-col justify-start items-center gap-8 flex mt-8">
          <div class="justify-start items-center gap-1 flex flex-col">
            <div class="text-gray-800 text-xl font-semibold font-sans leading-normal tracking-tight">
              Permintaan Gabung Program Diterima
            </div>
            <div class="text-center text-neutral-600 text-base font-normal font-sans leading-normal tracking-tight">
              Silakan tunggu konfirmasi dari kami
            </div>
          </div>
          <div @click="goToDashboard" type="button"
            class="px-10 py-2 bg-indigo-600 rounded-xl justify-between items-center inline-flex">
            <div class="text-white text-base font-semibold font-sans leading-7">Back</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from '@/components/Progres/ProgresCard';

export default {
  components: {
    ProgressBar
  },
  data() {
    return {
      progress1: 100
    };
  },
  methods: {
    goToDashboard() {
      // Mengarahkan pengguna ke halaman dashboard
      this.$router.push({ path: '/browser' });
    }
  }
}
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  /* Hitam transparan */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>