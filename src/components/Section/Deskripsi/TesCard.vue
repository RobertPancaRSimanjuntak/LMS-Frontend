<template>
    <div class="mr-8 mb-12">
      <div class="flex flex-col space-y-24">
        <div class="flex flex-col space-y-12 justify-center items-center">
          <!-- Tampilan tes HTML dengan nilai tertinggi -->
          <div class="flex flex-col space-y-4 relative w-full">
            <div class="text-lg font-sans font-semibold justify-start text-start">Tes HTML</div>
            <div class="flex flex-col border-2 border-gray-400 rounded-lg">
              <div class="px-8 py-2 left-0 top-0 rounded-tl-lg rounded-tr-lg justify-between items-center inline-flex">
                <div class="flex-col justify-center items-center gap-1 inline-flex">
                  <div class="text-black text-base font-normal font-sans leading-7">Tipe</div>
                  <div class="text-indigo-600 text-base font-sans leading-7">Tes</div>
                </div>
                <div class="flex-col justify-center items-center gap-1 inline-flex">
                  <div class="text-black text-base font-normal font-sans leading-7">Pertanyaan</div>
                  <div class="text-indigo-600 text-base font-sans leading-7">{{ highestScoreAttempt.totalQuestions }}</div>
                </div>
                <div class="flex-col justify-center items-center gap-1 inline-flex">
                  <div class="text-black text-base font-normal font-sans leading-7">Nilai</div>
                  <div class="text-indigo-600 text-base font-sans leading-7">{{ highestScoreAttempt.score }}</div>
                </div>
              </div>
              <div v-if="quizAttempts.length === 0" class="bg-blue-200 px-8 py-2 left-0 bg-indigo-600/opacity-10 rounded-bl-lg rounded-br-lg border-t-2 border-gray-400 justify-start items-center gap-96 inline-flex">
                <div class="justify-start items-start gap-4 flex">
                  <div class="text-black text-base font-normal font-sans leading-7">Status:</div>
                  <div class="text-indigo-600 text-base font-sans leading-7">Belum Diambil</div>
                </div>
              </div>
              <div v-else class="bg-blue-200 px-8 py-2 left-0 bg-indigo-600/opacity-10 rounded-bl-lg rounded-br-lg border-t-2 border-gray-400 justify-start items-center gap-96 inline-flex">
                <div class="justify-start items-start gap-4 flex">
                  <div class="text-black text-base font-normal font-sans leading-7">Status:</div>
                  <div class="text-indigo-600 text-base font-sans leading-7">Selesai</div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="quizAttempts.length === 0">
            <button @click="takeOrRetakeQuiz" class="py-2 px-12 bg-blue-400 rounded-md">{{ buttonLabel }}</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    computed: {
      quizAttempts() {
        // Mengambil data attempts dari localStorage
        return JSON.parse(localStorage.getItem('test_attempts')) || [];
      },
      highestScoreAttempt() {
        const attempts = this.quizAttempts;
        // Jika belum ada attempts, mengembalikan default
        if (attempts.length === 0) return { score: 0, totalQuestions: 0 };
  
        // Mengambil data attempts pertama karena hanya satu tes yang diperbolehkan
        return attempts[0];
      },
      buttonLabel() {
        // Menentukan label tombol hanya 'Take' karena tes hanya boleh diambil sekali
        return 'Take';
      }
    },
    methods: {
      takeOrRetakeQuiz() {
        // Arahkan pengguna ke halaman tes untuk memulai tes
        this.$router.push({ name: 'TesQuestion' });
      }
    }
  };
  </script>
  