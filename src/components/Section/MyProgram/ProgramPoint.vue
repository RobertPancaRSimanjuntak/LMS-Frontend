<template>
    <div class="flex justify-start">
        <ProgresCard :progress="progress" />
    </div>
</template>

<script>
import ProgresCard from '@/components/Section/Homepage/ProgresCard.vue'

export default{
    name:'HomePage',
    components:{
        ProgresCard,
    },
    data(){
        return{
        progress: 50,
    }
}
}
</script>