<template>
    <div class="bg-gray-100 max-h-screen mr-8 py-4 flex flex-col gap-4">
        <div>
            <div v-if="!completed" class="flex justify-between items-center px-4">
                <div>
                    <h3 class="font-semibold text-lg text-black">Soal kuis</h3>
                </div>
            </div>
            <div v-else class="flex justify-between items-center px-4">
                <div>
                    <h3 class="font-semibold text-lg text-black">Hasil</h3>
                </div>
            </div>
        </div>
        <div class="w-auto mx-8 my-2 bg-white p-6 rounded-lg shadow-md">
            <div v-if="!completed">
                <div v-for="(question, index) in questions" :key="index" class="mb-6">
                    <h3 class="text-lg font-medium mb-2">{{ question.text }}</h3>
                    <ul>
                        <li v-for="(option, oIndex) in question.options" :key="oIndex" class="mb-2">
                            <label class="inline-flex items-center">
                                <input type="radio" :name="'question' + index" :value="option" v-model="answers[index]"
                                    :class="{ 'border-red-500': isIncorrect(index) && selectedIndex(index, oIndex), 'border-green-500': isCorrect(index) && selectedIndex(index, oIndex), 'border-blue-500': !selectedIndex(index, oIndex) }">
                                <span class="ml-2">{{ option }}</span>
                            </label>
                        </li>
                    </ul>
                </div>
                <button @click="submitKuis"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Submit
                </button>
            </div>
            <div v-else>
                <ul>
                    <li v-for="(question, index) in questions" :key="index" class="mb-4">
                        <strong class="block mb-1">{{ question.text }}</strong>
                        <div class="flex flex-col">
                            <span :class="{ 'text-red-500': isIncorrect(index), 'text-green-500': isCorrect(index) }">
                                Pilihan: {{ answers[index] }}
                            </span>
                            <span v-if="isIncorrect(index)" class="text-green-500">Jawaban benar: {{
                question.correctAnswer
                                }}</span>
                        </div>
                    </li>
                </ul>
                <!-- Tombol kembali hanya muncul saat hasil jawaban ditampilkan -->
                <div class="w-20 cursor-pointer py-2 px-4 bg-blue-400 rounded-md mt-4" @click="goBack">
                    kembali
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            questions: [
                {
                    text: "Apa itu algoritma?",
                    options: ["Urutan langkah-langkah untuk menyelesaikan masalah", "Urutan langkah-langkah untuk membuat program", "Urutan langkah-langkah untuk membuat website", "Urutan langkah-langkah untuk membuat aplikasi"],
                    correctAnswer: "Urutan langkah-langkah untuk menyelesaikan masalah"
                },
                // Tambahkan lebih banyak pertanyaan jika diperlukan
            ],
            answers: [],
            completed: false,
            score: 0,
        };
    },
    methods: {
        submitKuis() {
            if (this.answers.length === this.questions.length) {
                this.score = this.questions.reduce((total, question, index) => {
                    return total + (this.answers[index] === question.correctAnswer ? 100 : 0);
                }, 0);
                this.saveAttempt();
                this.completed = true;
            } else {
                alert('Harap jawab semua pertanyaan sebelum mengirimkan kuis.');
            }
        },
        saveAttempt() {
            const attempts = JSON.parse(localStorage.getItem('quiz_attempts')) || [];
            attempts.push({
                score: this.score,
                totalQuestions: this.questions.length,
                date: new Date().toLocaleString()
            });
            localStorage.setItem('quiz_attempts', JSON.stringify(attempts));
        },
        isCorrect(index) {
            return this.answers[index] === this.questions[index].correctAnswer;
        },
        isIncorrect(index) {
            return this.answers[index] && this.answers[index] !== this.questions[index].correctAnswer;
        },
        selectedIndex(qIndex, oIndex) {
            return this.answers[qIndex] === this.questions[qIndex].options[oIndex];
        },
        goBack() {
            // Arahkan pengguna ke rute 'KuisCard'
            this.$router.push({ name: 'KuisCard' });
        }
    }
};
</script>

<style scoped>
/* Tambahkan style tambahan di sini jika diperlukan */
</style>
