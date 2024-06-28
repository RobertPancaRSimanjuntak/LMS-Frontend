<template>
    <div class="flex flex-col space-y-4 mx-4 mt-4">
        <div>
            <IklanDash />
        </div>
        <div class="flex ">
            <div class="flex flex-col justify-start gap-1 m-4">
                <div class="text-md sm:text-2xl font-bold">Statistik</div>
                <div class="text-sm sm:text-md text-gray-600">Completed program</div>                 
                <ProgresCard :progress="progress" />     
            </div>      
        </div>
        <!-- <div class="bg-[#292929]">
            <EditBio />
        </div> -->
        <div class="pb-8">
            <CourseCard />
        </div>
    </div>
</template>

<script>
import CourseCard from '@/components/Section/Homepage/CourseCard.vue'
import IklanDash from '@/components/Section/Homepage/IklanDash.vue'
// import EditBio from '@/components/Section/Homepage/EditBio.vue'
import ProgresCard from '@/components/Section/Homepage/ProgresCard.vue'

export default {
    name: 'HomePage',
    components: {
        CourseCard,
        IklanDash,
        
        ProgresCard,
    },
    data() {
        return {
            progress: 50,
        }
    }
}

</script>