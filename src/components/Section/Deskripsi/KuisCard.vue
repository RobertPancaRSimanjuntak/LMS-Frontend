<template>
    <div class="mr-8">
        <div class="flex flex-col space-y-24">
            <div class="flex flex-col space-y-12 justify-center items-center">
                <!-- Tampilan kuis HTML dengan nilai tertinggi dari riwayat -->
                <div class="flex flex-col space-y-4 relative w-full">
                    <div class="text-lg font-sans font-semibold justify-start text-start">Kuis</div>
                    <div class="flex flex-col border-2 border-gray-400 rounded-lg">
                        <div
                            class="px-8 py-2 left-0 top-0 rounded-tl-lg rounded-tr-lg justify-between items-center inline-flex">
                            <div class="flex-col justify-center items-center gap-1 inline-flex">
                                <div class="text-black text-base font-normal font-sans leading-7">Tipe</div>
                                <div class="text-indigo-600 text-base font-sans leading-7">Kuis</div>
                            </div>
                            <div class="flex-col justify-center items-center gap-1 inline-flex">
                                <div class="text-black text-base font-normal font-sans leading-7">Pertanyaan</div>
                                <div class="text-indigo-600 text-base font-sans leading-7">{{
                                    highestScoreAttempt.totalQuestions }}</div>
                            </div>
                            <div class="flex-col justify-center items-center gap-1 inline-flex">
                                <div class="text-black text-base font-normal font-sans leading-7">Nilai</div>
                                <div class="text-indigo-600 text-base font-sans leading-7">{{ highestScoreAttempt.score
                                    }}</div>
                            </div>
                        </div>
                        <div
                            class="bg-blue-200 px-8 py-2 left-0 bg-indigo-600/opacity-10 rounded-bl-lg rounded-br-lg border-t-2 border-gray-400 justify-start items-center gap-96 inline-flex">
                            <div class="justify-start items-start gap-4 flex">
                                <div class="text-black text-base font-normal font-sans leading-7">Attempts:</div>
                                <div class="text-indigo-600 text-base font-sans leading-7">{{ quizAttempts.length }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button @click="takeOrRetakeQuiz" class="py-2 px-12 bg-blue-400 rounded-md">{{ buttonLabel
                        }}</button>
                </div>
            </div>
            <!-- Riwayat percobaan kuis sebelumnya -->
            <div class="flex flex-col justify-start space-y-4 relative w-full">
                <div class="text-lg font-sans font-semibold justify-start text-start">History Attempt</div>
                <div v-for="(attempt, index) in quizAttempts" :key="index"
                    class="flex flex-col border-2 border-gray-400 rounded-lg">
                    <div
                        class="px-8 py-2 left-0 top-0 rounded-tl-lg rounded-tr-lg justify-between items-center inline-flex">
                        <div class="flex-col gap-1 inline-flex">
                            <div class="text-black text-base font-normal font-sans leading-7">Attempt {{ index + 1 }}
                            </div>
                            <div class="text-gray-700 text-base font-sans">{{ attempt.date }}</div>
                        </div>
                        <div class="flex space-x-24">
                            <div class="flex-col justify-center items-center gap-1 inline-flex">
                                <div class="text-black text-base font-normal font-sans leading-7">Nilai</div>
                                <div class="text-indigo-600 text-base font-sans leading-7">{{ attempt.score }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-between mt-4">
            <router-link :to="{ name: 'FileDoc', params: { id: id } }">
                <div
                    class="text-center justify-end text-md hover:bg-blue-300 bg-blue-200 text-[#564FFD] rounded py-2 px-6">
                    Sebelumnya
                </div>
            </router-link>
            <router-link :to="{ name: 'MateriCard', params: { id: id } }">
                <div
                    class="text-center justify-end text-md hover:bg-blue-300 bg-blue-200 text-[#564FFD] rounded py-2 px-6">
                    Selanjutnya
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        quizAttempts() {
            // Mengambil data attempts dari localStorage
            return JSON.parse(localStorage.getItem('quiz_attempts')) || [];
        },
        highestScoreAttempt() {
            const attempts = this.quizAttempts;
            // Jika belum ada attempts, mengembalikan default
            if (attempts.length === 0) return { score: 0, totalQuestions: 0 };

            // Menemukan attempts dengan score tertinggi
            return attempts.reduce((prev, current) => {
                return prev.score > current.score ? prev : current;
            });
        },
        buttonLabel() {
            // Menentukan label tombol berdasarkan jumlah attempts
            return this.quizAttempts.length > 0 ? 'Retake' : 'Take';
        }
    },
    methods: {
        takeOrRetakeQuiz() {
            // Arahkan pengguna ke halaman kuis untuk memulai atau mengulangi kuis
            this.$router.push({ name: 'KuisQuestion' });
        }
    }
};
</script>