<template>
    <div class="bg-gray-100 max-h-screen mr-8 py-4 flex flex-col gap-4">
        <div>
            <div v-if="!completed" class="flex justify-between items-center px-4">
                <div>
                    <h3 class="font-semibold text-lg text-black">Soal Test</h3>
                </div>
            </div>
            <div v-else class="flex justify-between items-center px-4">
                <div>
                    <h3 class="font-semibold text-lg text-black">Hasil</h3>
                </div>
            </div>
        </div>
        <div class="w-auto m-8 bg-white p-6 rounded-lg shadow-md">
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
                <button @click="submitTest"
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
                            <span v-if="isIncorrect(index)" class="text-green-500">
                                Jawaban benar: {{ question.correctAnswer }}
                            </span>
                        </div>
                    </li>
                </ul>
                <!-- Tampilkan nilai hasil tes -->
                <div class="text-black text-base font-normal font-sans leading-7">
                    Hasil Tes: {{ score }}
                </div>
                <!-- Tombol kembali hanya muncul saat hasil jawaban ditampilkan -->
                <div class="w-20 cursor-pointer py-2 px-4 bg-blue-400 rounded-md mt-4" @click="goBack">
                    Kembali
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
                    text: 'Apa yang dimaksud dengan algoritma dalam konteks pemrograman komputer?',
                    options: ['Sebuah program komputer','Sebuah serangkaian instruksi langkah demi langkah untuk menyelesaikan masalah'],
                    correctAnswer: 'Sebuah serangkaian instruksi langkah demi langkah untuk menyelesaikan masalah'
                },
                {
                    text: 'Algoritma pertama yang pernah didokumentasikan dalam sejarah ditemukan pada zaman yang mana?',
                    options: ['Abad ke-3 SM','Abad ke-12 Masehi'],
                    correctAnswer: 'Abad ke-3 SM'
                },
                {
                    text: 'Algoritma yang mana yang digunakan untuk mencari elemen tertentu dalam sebuah array?',
                    options: ['Binary Search','Bubble Sort'],
                    correctAnswer: 'Binary Search'
                },
                {
                    text: 'Struktur data yang cocok digunakan untuk mengantrikan elemen adalah:',
                    options: ['Stack','Linked List'],
                    correctAnswer: 'Stack'
                },
                {
                    text: 'Algoritma sorting yang memiliki kompleksitas waktu terbaik O(n log n) adalah:',
                    options: ['Bubble Sort', 'Merge Sort'],
                    correctAnswer: 'Merge Sort'
                },

                // Tambahkan lebih banyak pertanyaan jika diperlukan
            ],
            answers: [],
            completed: false,
            score: 0,
            baseScoreMultiplier: 50, // Faktor untuk mengalikan dengan jumlah jawaban benar
        };
    },
    methods: {
        submitTest() {
            if (this.answers.length === this.questions.length) {
                // Hitung jumlah jawaban yang benar
                let correctCount = this.questions.reduce((count, question, index) => {
                    return count + (this.answers[index] === question.correctAnswer ? 1 : 0);
                }, 0);

                // Tentukan skor berdasarkan jumlah jawaban yang benar
                this.score = correctCount * this.baseScoreMultiplier;

                // Simpan hasil tes jika perlu
                this.completed = true;
            } else {
                alert('Harap jawab semua pertanyaan sebelum mengirimkan tes.');
            }
        },
        goBack() {
            // Arahkan pengguna ke rute 'TestCard'
            this.$router.go(-1);
        },
        isCorrect(index) {
            return this.answers[index] === this.questions[index].correctAnswer;
        },
        isIncorrect(index) {
            return this.answers[index] && this.answers[index] !== this.questions[index].correctAnswer;
        },
        selectedIndex(qIndex, oIndex) {
            return this.answers[qIndex] === this.questions[qIndex].options[oIndex];
        }
    }
};
</script>

<style scoped>
/* Tambahkan style tambahan di sini jika diperlukan */
</style>
