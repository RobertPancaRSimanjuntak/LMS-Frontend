<template>
    <div class="m-12 flex flex-col gap-8">
        <div class="w-full">
            <Hasil/>
        </div>
        <div class="flex flex-col bg-white rounded-lg">
            <div class="flex justify-between p-4 shadow-md cursor-pointer" @click="navigateToDetail('Burhan')">
                <h2 class="text-md">Burhan</h2>
                <div class="w-40 sm:w-80">
                    <ProgresCourse class="h-auto" :proses="proses1" />
                </div>
            </div>
            <div class="flex justify-between p-4 shadow-md cursor-pointer text-center items-center" @click="navigateToDetail('adrian')">
                <h2 class="text-md">Adrian</h2>
                <div class="w-40 sm:w-80">
                    <ProgresCourse class="h-auto" :proses="proses2" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Hasil from '../ProgramDosen/HasilStudents.vue';
import ProgresCourse from '@/components/Section/ProgramDosen/ProgresCourse.vue'

export default {
    components: {
       Hasil,
       ProgresCourse,
    },
    data() {
        return {
            proses1: 10,
            proses2: 100,
        }
    },
    methods:{
        navigateToDetail(name){
            this.$router.push({name: 'DetailPage', params: {name}});
        }
    }
}
</script>