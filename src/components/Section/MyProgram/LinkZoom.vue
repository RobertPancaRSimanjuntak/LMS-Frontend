<template>
    <div class="flex flex-col gap-2 p-4 my-4 bg-white rounded-lg">
        <div class="text-lg font-medium">Zoom </div>
        <div class="flex flex-col gap-4 p-4 bg-gray-100 rounded-sm">
            <div class="flex flex-col gap-2 ">
                <div class="flex justify-between  text-center items-center">
                    <div class="text-gray-800 font-thin text-sm md:text-md">Pertemuan 1</div>
                    <button :class="{'bg-blue-600': link1 !== '', 'bg-blue-400': link1 === ''}" class="text-sm py-1 px-2 rounded-md text-white">Masuk</button>
                </div>
                <input v-model="link1" type="text" class="w-full text-blue-500 py-1 px-2 bg-white shadow rounded-sm" placeholder="No link">
            </div>
            <div class="flex flex-col gap-2 ">
                <div class="flex justify-between  text-center items-center">
                    <div class="text-gray-800 font-thin text-sm md:text-md">Pertemuan 2</div>
                    <button :class="{'bg-blue-600': link2 !== '', 'bg-blue-400': link2 === ''}" class="text-sm py-1 px-2 rounded-md text-white">Masuk</button>
                </div>
                <input v-model="link2" type="text" class="w-full text-blue-500 py-1 px-2 bg-white shadow rounded-sm" placeholder="No link">
            </div>
            <div class="flex flex-col gap-2 ">
                <div class="flex justify-between  text-center items-center">
                    <div class="text-gray-800 font-thin text-sm md:text-md">Pertemuan 3</div>
                    <button :class="{'bg-blue-600': link2 !== '', 'bg-blue-400': link3 === ''}" class="text-sm py-1 px-2 rounded-md text-white">Masuk</button>
                </div>
                <input v-model="link2" type="text" class="w-full text-blue-500 py-1 px-2 bg-white shadow rounded-sm" placeholder="No link">
            </div>
            <div class="flex flex-col gap-2 ">
                <div class="flex justify-between  text-center items-center">
                    <div class="text-gray-800 font-thin text-sm md:text-md">Pertemuan 4</div>
                    <button :class="{'bg-blue-600': link2 !== '', 'bg-blue-400': link4 === ''}" class="text-sm py-1 px-2 rounded-md text-white">Masuk</button>
                </div>
                <input v-model="link2" type="text" class="w-full text-blue-500 py-1 px-2 bg-white shadow rounded-sm" placeholder="No link">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            link1: '', link2: '', link3:'', link4:'',
        };
    },
    
}
</script>
