<template>
    <div>
        <div class="flex flex-col space-y-2 relative">
            <!-- Tombol untuk menampilkan opsi filter -->
            <div class="flex justify-between cursor-pointer items-center text-center mx-2 sm:mx-4 "
                @click="toggleFilterMenu">
                <div class=" text-indigo-600 text-[12px] md:text-[14px] lg:text-[16px] font-medium font-sans">Course Overview</div>
                <div :class="{ 'rotate-180': showFilterMenu }" class="hidden sm:block">
                    <i class="fa-solid fa-chevron-down text-white p-1 rounded-full bg-[#292929]"></i>
                </div>
            </div>

            <!-- Opsi filter yang akan muncul saat tombol di klik -->
            <div class="relative top-full left-0"
                v-if="showFilterMenu">
                <!-- group hover:text-blue-500 {membuat hover secara bersamaan} -->
                <router-link :to="{ name: 'CoursePage', params: { id: id } }"
                 class="flex justify-between items-center w-full  p-4 hover:bg-blue-200"   
                    :class="{ 'bg-blue-200': activePage === 'CoursePage'}">
                    <div class="flex space-x-2 items-center text-center ">
                        <i class="fa-regular fa-file text-gray-500 sm:text-xl text-md "></i>
                        <div class="text-gray-500 text-[12px] md:text-[14px] font-sans">Preview</div>
                    </div>
                    <div class="hidden sm:block  w-6 h-6 flex-shrink-0">
                        <ProgressBar :progress="progress2" />
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import ProgressBar from '@/components/Progres/ProgresCard';

export default {
    components: {
        ProgressBar
    },
    data() {
        return {
            showFilterMenu: false,
            // activeFilter: null,

            isSidebarOpen: true, // Atur menu sidebar terbuka secara default
            activePage: 'CoursePage',
            pageTitle: 'Preview',
            progress1: 100, progress2: 100, progress3: 20,

            items: [
                { id: 1, name: 'Item 1', category: 'webdev' },
                { id: 2, name: 'Item 2', category: 'mobapp' },
                { id: 3, name: 'Item 3', category: 'cyber' },
            ]
        };
    },
    computed: {
        filteredItems() {
            if (this.activeFilter) {
                return this.items.filter(item => item.category === this.activeFilter);
            }
            return this.items;
        }
    },
    methods: {
        toggleFilterMenu() {
            this.showFilterMenu = !this.showFilterMenu;
        },
        applyFilter(filter) {
            this.activeFilter = filter;
            this.showFilterMenu = false;
        },
        goToDashboard() {
            this.$router.push('/');
        },

        updatePageTitle(title) {
            this.pageTitle = title; // Update judul halaman
            this.$emit('page-title-updated', title);
        },
    },
    watch: {
        '$route'(to) {
            this.updatePageTitle('/course/:id');
            if (to.name ==='CoursePage' ) {
                this.activePage = 'CoursePage';
                this.updatePageTitle('course/:id/materi');
            } else if (to.name === 'MateriCard') {
                this.activePage = 'MateriCard';
                this.updatePageTitle('course/:id/doc');
            }else if (to.name === 'FileDoc') {
                this.activePage = 'FileDoc';
                this.updatePageTitle('Materi');
                this.updatePageTitle('course/:id/kuis');
            }else if (to.name === 'KuisCard') {
                this.activePage = 'KuisCard';
                this.updatePageTitle('Kuis HTML');
                this.updatePageTitle('course/:id/tes');
            }else if (to.name === 'TesCard') {
                this.activePage = 'TesCard';
                this.updatePageTitle('Tes HTML');
            }else {
                this.activePage = 'CoursePage';
            }
        }
    },
};
</script>

<style>
.rotate-180 {
    transform: rotate(180deg);
}

.transition-transform {
    transition-property: transform;
    transition-duration: 0.3s;
    /* Ubah durasi animasi sesuai kebutuhan Anda */
}
</style>