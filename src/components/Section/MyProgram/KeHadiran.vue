<template>
    <div class="flex flex-col gap-2 p-4 my-4 bg-white rounded-lg">
        <div class="text-lg font-medium">Kehadiran</div>
        <div  class="flex flex-col gap-4 p-4 bg-gray-100 rounded-sm">
            <div class="flex flex-col gap-2" @click="navigateToDetail('Pertemuan 1')">
                <div type="text" class="w-full text-blue-500 py-1.5 px-2 bg-white shadow rounded-sm flex justify-between">
                    <div class="text-sm md:text-md">Pertemuan 1</div>
                    <div class="text-sm md:text-md">9/10</div>
                </div>
            </div>
            <div class="flex flex-col gap-2" @click="navigateToDetail('Pertemuan 2')">
                <div type="text" class="w-full text-gray-500 py-1.5 px-2 bg-white shadow rounded-sm flex justify-between">
                    <div class="text-sm md:text-md">Pertemuan 2</div>
                    <div class="text-sm md:text-md">0/10</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            link1: '',
            link2: ''
        };
    },
    methods:{
        navigateToDetail(name){
            this.$router.push({name: 'DetailPertemuan', params: {name}});
        }
    }
}
</script>
