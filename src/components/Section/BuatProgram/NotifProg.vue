<!-- NotifProg.vue -->
<template>
    <div class="overlay" @click="closeNotifProg">
        <div class="popup w-1/2" @click.stop>
            <div class="flex gap-4 justify-start items-start">
                <CourseCard
                    v-for="(course, index) in courses"
                    :key="index"
                    :course="course"
                    @click="selectCourse(course)"
                />
            </div>
        </div>
    </div>
</template>

<script>
import CourseCard from '@/components/Section/BuatProgram/CourseCard';

export default {
    components: {
        CourseCard,
    },
    props: {
        courses: {
            type: Array,
            required: true,
        },
    },
    methods: {
        closeNotifProg() {
            this.$emit('close');
        },
        selectCourse(course) {
            this.$emit('course-selected', course);
        },
    },
};
</script>

<style scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}
.popup {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
