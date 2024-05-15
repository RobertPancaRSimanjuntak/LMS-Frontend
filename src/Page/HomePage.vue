<template>
    <div class="flex flex-col">
        <div>
            <IklanDash />
        </div>
        <div>
            <CourseCard/>
        </div>
    </div>
</template>

<script>
import CourseCard from '@/components/Section/Homepage/CourseCard.vue'
import IklanDash from '@/components/Section/Homepage/IklanDash.vue'

export default{
    name:'HomePage',
    components:{
        CourseCard,
        IklanDash
    }
}

</script>