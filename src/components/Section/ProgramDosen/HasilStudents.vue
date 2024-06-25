<template>
    <div class="flex flex-col md:flex-row gap-8 justify-center items-center ">
            <div class="flex w-60 h-64">
                <div class="flex flex-col justify-start p-2 bg-white rounded-lg ">
                    <div class="text-sm sm:text-lg font-bold">Progres</div>
                    <ProgresCard :progress="progress" />
                </div>
            </div>
            <div class="flex w-60 h-64">
                <div class="flex flex-col justify-start p-2 bg-white rounded-lg ">
                    <div class="text-sm sm:text-lg font-bold">Completed</div>
                    <ProgresStudents :progres="progres" />
                </div>
            </div>
            
            <div class="flex w-60 h-64">
                <div class="flex flex-col gap-8 w-full py-4 px-8 bg-white rounded-lg">
                    <div class="text-sm sm:text-lg font-bold">Course Research</div>
                    <div class="flex flex-col gap-2 pb-4">
                        <div class=" flex justify-between ">
                            <h3 class="text-xs sm:text-md">Siswa</h3>
                            <h3 class="text-xs sm:text-md">10</h3>
                        </div>
                        <div class=" flex justify-between pt-2 border-t-2 border-gray-400 ">
                            <h3 class="text-xs sm:text-md">Materi</h3>
                            <h3 class="text-xs sm:text-md">2</h3>
                        </div>
                        <div class=" flex justify-between pt-2 border-t-2 border-gray-400 ">
                            <h3 class="text-xs sm:text-md">Video</h3>
                            <h3 class="text-xs sm:text-md">2</h3>
                        </div>
                        <div class=" flex justify-between pt-2 border-t-2 border-gray-400 ">
                            <h3 class="text-xs sm:text-md">Kuis</h3>
                            <h3 class="text-xs sm:text-md">1</h3>
                        </div>
                        <div class=" flex justify-between pt-2 border-t-2 border-gray-400 ">
                            <h3 class="text-xs sm:text-md">Test</h3>
                            <h3 class="text-xs sm:text-md">1</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import ProgresCard from '@/components/Section/Homepage/ProgresCard.vue';
import ProgresStudents from './ProgresStudents.vue';


export default {
    components: {
        ProgresCard,
        ProgresStudents,
    },
    data() {
        return {
            progress: 50,
            progres: 5,
            proses1: 10,
            proses2: 100,
        }
    }
}
</script>