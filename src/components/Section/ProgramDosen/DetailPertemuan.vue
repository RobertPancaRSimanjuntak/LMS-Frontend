<template>
    <div class="m-8 flex flex-col gap-4">
        <h1 class="text-md font-bold">Web / Research / {{ $route.params.name }}</h1>
        <!-- Konten detail berdasarkan nama -->
        <div class="flex flex-col md:flex-row gap-4">
            <div class="flex flex-col flex-grow bg-white rounded-lg">
                <div class="text-md font-semibold m-2">Hadir</div>
                <div class="flex justify-between p-4 shadow-md cursor-pointer" @click="navigateToDetail('aris')">
                    <h2 class="text-sm">aris</h2>
                    <div class="w-40 sm:w-80">
                        <ProgresCourse class="h-auto" :proses="proses3" />
                    </div>
                </div>
                <div class="flex justify-between p-4 shadow-md cursor-pointer" @click="navigateToDetail('Kevin')">
                    <h2 class="text-sm">Kevin</h2>
                    <div class="w-40 sm:w-80">
                        <ProgresCourse class="h-auto" :proses="proses3" />
                    </div>
                </div>
            </div>
            <!-- tidak hadir -->
            <div class="flex flex-col flex-grow bg-white rounded-lg">
                <div class="text-md font-semibold m-2">Tidak Hadir</div>
                <div class="flex justify-between p-4 shadow-md cursor-pointer" @click="navigateToDetail('Burhan')">
                    <h2 class="text-sm">Burhan</h2>
                    <div class="w-40 sm:w-80">
                        <ProgresCourse class="h-auto" :proses="proses1" />
                    </div>
                </div>
                <div class="flex justify-between p-4 shadow-md cursor-pointer" @click="navigateToDetail('adrian')">
                    <h2 class="text-sm">Adrian</h2>
                    <div class="w-40 sm:w-80">
                        <ProgresCourse class="h-auto" :proses="proses2" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProgresCourse from '@/components/Section/ProgramDosen/ProgresCourse.vue';

export default {
    components: {
        ProgresCourse,
    },
    data() {
        return {
            proses1: 10, proses2: 40, proses3:90
        }
    },
    methods: {
        navigateToDetail(name) {
            this.$router.push({ name: 'DetailPage', params: { name } });
        }
    },
};
</script>
