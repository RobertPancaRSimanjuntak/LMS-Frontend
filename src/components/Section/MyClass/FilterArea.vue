<template>
    <div class="sm:block hidden my-4">
        <div class="flex sm:justify-between justify-end">
            <div class="search flex border border-gray-300 rounded-md pr-32">
                <!-- Hanya menampilkan ikon pencarian saat ukuran layar sm -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="md:size-4 size-3 m-2"> <!-- Menampilkan hanya pada ukuran sm -->
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <!-- Input pencarian -->
                <input type="text" placeholder="Search..." class="flex-1 focus:outline-none  hidden sm:block">
            </div>
            <div class="flex space-x-4 mx-4 ">
                <div class="sm:block hidden">
                    <FilterClass />
                </div>
                <div class="sm:block hidden">
                    <FilterTeacher />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FilterClass from '@/components/Section/MyClass/Filter/FilterClass.vue';
import FilterTeacher from '@/components/Section/MyClass/Filter/FilterTeacher.vue';

export default {
    components: {
        FilterClass,
        FilterTeacher
    }
}
</script>