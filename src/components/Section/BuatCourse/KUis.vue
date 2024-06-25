<template>
    <div class="flex flex-col space-y-8 justify-end">
        <div class="col-span-5 xl:col-span-2">
            <div class="rounded-sm border border-stroke bg-white shadow-default">
                <div class="flex flex-col border-b px-4 border-stroke">
                    <div class="flex justify-between items-center py-4">
                        <h3 class="text-sm sm:text-md md:text-lg font-medium text-black">Kuis</h3>
                        <div class="flex space-x-4 items-center">
                            <!-- <FilterProgram /> -->
                            <i class="fa-regular fa-pen-to-square"></i>
                            <i class="fa-regular fa-trash-can"></i>
                        </div>
                    </div>
                    <div class="flex flex-col items-end">
                        <div class="flex justify-end items-center text-center space-x-1 sm:space-x-2 rounded-md sm:rounded-lg bg-blue-600 my-2 py-1 px-2 sm:my-4 sm:py-2 sm:px-4 max-w-max cursor-pointer"
                            @click="addQuestion">
                            <i class="fa-solid fa-plus text-white text-xs"></i>
                            <div class="text-white text-xs sm:text-sm font-sans">Tambah</div>
                        </div>
                    </div>
                </div>
                <div v-for="(question, qIndex) in questions" :key="qIndex"
                    class="flex flex-col gap-4 md:gap-8 mx-8 my-4 p-8 rounded-md bg-gray-100">
                    <div class="flex gap-3 text-center items-center">
                        <input v-model="question.text" placeholder="Masukkan pertanyaan"
                            class="block text-sm font-medium text-gray-600 w-full p-2 rounded-md border ">
                        <div class="flex space-x-4">
                            <i class="fa-solid fa-plus" @click="addOption(qIndex)"></i>
                            <i class="fa-regular fa-trash-can" @click="removeQuestion(qIndex)"></i>
                        </div>
                    </div>
                    <div class="flex flex-col gap-1">
                        <div v-for="(option, oIndex) in question.options" :key="oIndex"
                            class="flex justify-between py-2 px-4 bg-white text-center items-center">
                            <input v-model="option.text" placeholder="Masukkan jawaban"
                                class="text-xs md:text-md font-normal text-gray-600 flex-grow bg-transparent border-none outline-none">
                            <div class="flex justify-between items-center space-x-2 lg:space-x-4">
                                <i class="fa-solid fa-circle-check w-8 h-auto cursor-pointer"
                                    :class="{ 'text-green-500': option.correct, 'text-gray-400': !option.correct }"
                                    @click="toggleCorrectAnswer(qIndex, oIndex)">
                                </i>
                                <i class="fa-regular fa-trash-can text-red-600 cursor-pointer"
                                    @click="removeOption(qIndex, oIndex)"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-end gap-4 mx-8 my-4">
                    <button
                        class="flex justify-center rounded py-1 sm:py-2 px-4 sm:px-6 text-xs sm:text-sm text-gray bg-blue-200"
                        @click="saveQuiz">
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import FilterProgram from '@/components/Section/MyClass/Filter/FilterProgram.vue';

export default {
    components: {
        // FilterProgram
    },
    data() {
        return {
            questions: [
                {
                    text: 'Apa itu Internet?',
                    options: [
                        { text: 'Internet adalah jaringan komputer global.', correct: true },
                        { text: 'Internet adalah sistem operasi.', correct: false }
                    ]
                }
            ]
        };
    },
    methods: {
        addQuestion() {
            this.questions.push({
                text: '',
                options: [
                    { text: '', correct: false }
                ]
            });
        },
        removeQuestion(qIndex) {
            this.questions.splice(qIndex, 1);
        },
        addOption(qIndex) {
            this.questions[qIndex].options.push({ text: '', correct: false });
        },
        removeOption(qIndex, oIndex) {
            this.questions[qIndex].options.splice(oIndex, 1);
        },
        toggleCorrectAnswer(qIndex, oIndex) {
            // Set all options to false
            this.questions[qIndex].options.forEach(option => option.correct = false);
            // Set clicked option to true
            this.questions[qIndex].options[oIndex].correct = true;
        },
        saveQuiz() {
            // Logika penyimpanan Anda di sini
            console.log("Quiz saved:", this.questions);
            alert(" Kuis Berhasil Ditambah ")
        }
    }
}
</script>

<style scoped>
.cursor-pointer {
    cursor: pointer;
}

.bg-gray-100 {
    background-color: #f3f4f6;
}

.text-gray-400 {
    color: #9ca3af;
}
</style>
