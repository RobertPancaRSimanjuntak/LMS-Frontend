<template>
    <div class="flex h-screen w-full">
        <div class="w-1/5 h-full overflow-auto bg-gray-50">
            <SidebarCard/>
        </div>
        <div class="w-4/5 flex flex-col">
            <div class="w-full shadow-sm">
                <HeaderCard :pageTitle="pageTitle" />
            </div>
            <div class="my-4 ml-12 gap-4 flex-col inline-flex  h-full overflow-auto ">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderCard from '@/components/Header/HeaderCard.vue';
import SidebarCard from '@/components/Sidebar/SidebarCard.vue';

export default {
    components: {
        HeaderCard,
        SidebarCard,

    }
}
</script>

<style scoped>
/* Optional additional styling if needed */
</style>
