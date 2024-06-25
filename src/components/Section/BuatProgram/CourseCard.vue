<template>
    <div class="w-xs md:w-md bg-white rounded-lg shadow-md items-center justify-center cursor-pointer" @click="$emit('click')">
        <div>
            <img class="object-cover h-20 w-full rounded-t-lg" :src="course.image" alt="Course Image" />
        </div>
        <div class="flex flex-col py-4 mb-4">
            <div class="flex flex-col space-y-2">
                <p class="px-4 font-semibold sm:text-md text-sm text-gray-700">{{ course.title }}</p>
                <p class="px-4 text-sm text-gray-600">{{ course.harga }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        course: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>
/* Tambahkan gaya CSS di sini jika diperlukan */
</style>
