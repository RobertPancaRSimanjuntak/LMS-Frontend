<template>
        <div class="flex flex-col h-screen max-w-screen shadow">
            <div class="mx-4">
                <div class="py-8 px-4 sm:px-0 sm:justify-start justify-center">
                    <div class=" bg-blue-600 text-white text-lg p-2 w-8 h-8 flex rounded-full fa-solid fa-arrow-left"
                        @click="goToDashboard">
                    </div>
                </div>
            </div>
            <div class="h-full w-full flex flex-col space-y-8 items-start overflow-auto">

                <div class="w-full">
                    <FilterOverview />
                </div>
                <div class="w-full">
                    <FilterCard />
                </div>
            </div>
        </div>

</template>

<script>
import FilterCard from '@/components/Section/MyClass/Filter/FilterCard.vue';
import FilterOverview from '@/components/Section/MyClass/Filter/FilterOverview.vue';

export default {
    components: {
        FilterCard,
        FilterOverview,
    },
    data() {
        return {
            isSidebarOpen: true, // Atur menu sidebar terbuka secara default
            activePage: 'CoursePage',
            pageTitle: 'Preview',

        };
    },
    methods: {
        goToDashboard() {
            this.$router.go(-1);
        },

        updatePageTitle(title) {
            this.pageTitle = title; // Update judul halaman
            this.$emit('page-title-updated', title);
        }
    },

};
</script>

<style scoped>
/* CSS tambahan jika diperlukan */
</style>
