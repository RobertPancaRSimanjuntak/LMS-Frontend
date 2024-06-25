<template>
    <div class="flex flex-col gap-4 m-4 mt-4">
        <div>
            <CourseCard/>
        </div>
        <div class="flex flex-col sm:flex-row gap-2 max-w-screen m-8">
            <div class="w-full">
                <LinkZoom />
            </div>
            <div class="w-full">
                <KehadiranStudents />
            </div>
        </div>
    </div>
</template>

<script>
import CourseCard from '@/components/Section/Homepage/CourseCard.vue';
import LinkZoom from '@/components/Section/MyProgram/LinkZoom.vue';
import KehadiranStudents from '@/components/Section/MyProgram/KehadiranStudents.vue'

export default {
    components: {
        CourseCard,
        LinkZoom,
        KehadiranStudents,
    },
}
</script>