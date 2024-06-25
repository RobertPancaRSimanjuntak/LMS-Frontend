<template>
    <div class="flex flex-col h-full overflow-auto space-y-4 mx-4 mt-4">
        <div>
            <ProgramCard/>
        </div>
        
    </div>
</template>

<script>
import ProgramCard from '@/components/Section/Homepage/ProgramCard.vue';
// import FilterArea from '@/components/Section/MyClass/FilterArea.vue';


export default {
    components: {
        ProgramCard,
        // FilterArea,
        
    }
}


</script>

<style>
/* Additional styling */
</style>