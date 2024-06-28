<template>
    <div>
        <div class="flex flex-col space-y-2 relative">
            <!-- Tombol untuk menampilkan opsi filter -->
            <div class="flex justify-between cursor-pointer items-center text-center mx-2 sm:mx-4"
                @click="toggleFilterMenu">
                <div
                    class=" text-[#292929]  text-[12px] md:text-[14px] lg:text-[16px]  font-semibold font-sans text-start w-22  sm:w-30 md:w-36 lg:w-44">
                    Pengenalan Algoritma dan Pemrograman</div>
                <div :class="{ 'rotate-180': showFilterMenu }" class="hidden sm:block">
                    <i class="fa-solid fa-chevron-down text-white p-1 text rounded-full bg-[#292929]"></i>
                </div>
            </div>

            <!-- Opsi filter yang akan muncul saat tombol di klik -->
            <div class="relative top-full left-0" v-if="showFilterMenu">
                <!-- group hover:text-blue-500 {membuat hover secara bersamaan} -->
                <router-link :to="{ name: 'FileDoc', params: { id: id } }"
                    class="flex justify-between items-center w-full  p-4 hover:bg-blue-200"
                    :class="{ 'bg-blue-200': activePage === 'FileDoc' }">
                    <div class="flex space-x-2 items-center text-center ">
                        <i class="fa-regular fa-file text-[#564FFD] sm:text-xl text-md"></i>
                        <div class="text-black text-[12px] md:text-[16px] font-sans">Pengertian Algoritma
                        </div>
                    </div>
                    <div class="hidden sm:block w-6 h-6 flex-shrink-0">
                        <ProgressBar :progress="progress2" />
                    </div>
                </router-link>
                <router-link :to="{ name: 'KuisCard', params: { id: id } }"
                    class="flex justify-between items-center w-full  p-4 hover:bg-blue-200"
                    :class="{ 'bg-blue-200': activePage === 'KuisCard' }">
                    <div class="flex space-x-2 items-center text-center">
                        <i class="fa-solid fa-award text-orange-300 sm:text-xl text-md"></i>
                        <div class="text-black text-[12px] md:text-[16px]   font-sans">Kuis
                        </div>
                    </div>
                    <div class="hidden sm:block w-6 h-6 flex-shrink-0">
                        <ProgressBar :progress="progress2" />
                    </div>
                </router-link>
                <router-link :to="{ name: 'MateriCard', params: { id: id } }"
                    class="flex justify-between items-center w-full p-4 hover:bg-blue-200"
                    :class="{ 'bg-blue-200': activePage === 'MateriCard' }">
                    <div class="flex space-x-2 items-center text-center">
                        <i class="fa-regular fa-circle-play text-[#564FFD] sm:text-xl text-md "></i>
                        <div class="text-black text-[12px] md:text-[16px]   font-sans">Sejarah Algoritma
                        </div>
                    </div>
                    <div class="hidden sm:block w-6 h-6 flex-shrink-0">
                        <ProgressBar :progress="progress2" />
                    </div>
                </router-link>
                <router-link :to="{ name: 'KuisCard1', params: { id: id } }"
                    class="flex justify-between items-center w-full  p-4 hover:bg-blue-200"
                    :class="{ 'bg-blue-200': activePage === 'KuisCard1' }">
                    <div class="flex space-x-2 items-center text-center">
                        <i class="fa-solid fa-award text-orange-300 sm:text-xl text-md"></i>
                        <div class="text-black text-[12px] md:text-[16px]   font-sans">Kuis
                        </div>
                    </div>
                    <div class="hidden sm:block w-6 h-6 flex-shrink-0">
                        <ProgressBar :progress="progress2" />
                    </div>
                </router-link>
                <router-link :to="{ name: 'FileDoc', params: { id: id } }"
                    class="flex justify-between items-center w-full  p-4 hover:bg-blue-200"
                    :class="{ 'bg-blue-200': activePage === 'FileDoc' }">
                    <div class="flex space-x-2 items-center text-center ">
                        <i class="fa-regular fa-file text-[#564FFD] sm:text-xl text-md"></i>
                        <div class="text-black text-[12px] md:text-[16px] font-sans">Flowchart
                        </div>
                    </div>
                    <div class="hidden sm:block w-6 h-6 flex-shrink-0">
                        <ProgressBar :progress="progress2" />
                    </div>
                </router-link>
                <router-link :to="{ name: 'KuisCard1', params: { id: id } }"
                    class="flex justify-between items-center w-full  p-4 hover:bg-blue-200"
                    :class="{ 'bg-blue-200': activePage === 'KuisCard1' }">
                    <div class="flex space-x-2 items-center text-center">
                        <i class="fa-solid fa-award text-orange-300 sm:text-xl text-md"></i>
                        <div class="text-black text-[12px] md:text-[16px]   font-sans">Kuis
                        </div>
                    </div>
                    <div class="hidden sm:block w-6 h-6 flex-shrink-0">
                        <ProgressBar :progress="progress2" />
                    </div>
                </router-link>
                <router-link :to="{ name: 'MateriCard', params: { id: id } }"
                    class="flex justify-between items-center w-full p-4 hover:bg-blue-200"
                    :class="{ 'bg-blue-200': activePage === 'MateriCard' }">
                    <div class="flex space-x-2 items-center text-center">
                        <i class="fa-regular fa-circle-play text-[#564FFD] sm:text-xl text-md "></i>
                        <div class="text-black text-[12px] md:text-[16px]   font-sans">Pseudocode
                        </div>
                    </div>
                    <div class="hidden sm:block w-6 h-6 flex-shrink-0">
                        <ProgressBar :progress="progress2" />
                    </div>
                </router-link>
                <router-link :to="{ name: 'KuisCard1', params: { id: id } }"
                    class="flex justify-between items-center w-full  p-4 hover:bg-blue-200"
                    :class="{ 'bg-blue-200': activePage === 'KuisCard1' }">
                    <div class="flex space-x-2 items-center text-center">
                        <i class="fa-solid fa-award text-orange-300 sm:text-xl text-md"></i>
                        <div class="text-black text-[12px] md:text-[16px]   font-sans">Kuis
                        </div>
                    </div>
                    <div class="hidden sm:block w-6 h-6 flex-shrink-0">
                        <ProgressBar :progress="progress2" />
                    </div>
                </router-link>
                <router-link :to="{ name: 'FileDoc', params: { id: id } }"
                    class="flex justify-between items-center w-full  p-4 hover:bg-blue-200"
                    :class="{ 'bg-blue-200': activePage === 'FileDoc' }">
                    <div class="flex space-x-2 items-center text-center ">
                        <i class="fa-regular fa-file text-[#564FFD] sm:text-xl text-md"></i>
                        <div class="text-black text-[12px] md:text-[16px] font-sans text-start">Pengenalan Pemrograman
                        </div>
                    </div>
                    <div class="hidden sm:block w-6 h-6 flex-shrink-0">
                        <ProgressBar :progress="progress2" />
                    </div>
                </router-link>
                <router-link :to="{ name: 'KuisCard', params: { id: id } }"
                    class="flex justify-between items-center w-full  p-4 hover:bg-blue-200"
                    :class="{ 'bg-blue-200': activePage === 'KuisCard' }">
                    <div class="flex space-x-2 items-center text-center">
                        <i class="fa-solid fa-award text-orange-300 sm:text-xl text-md"></i>
                        <div class="text-black text-[12px] md:text-[16px]   font-sans">Kuis
                        </div>
                    </div>
                    <div class="hidden sm:block w-6 h-6 flex-shrink-0">
                        <ProgressBar :progress="progress2" />
                    </div>
                </router-link>
                <router-link :to="{ name: 'TesCard', params: { id: id } }"
                    :class="{ 'bg-blue-400': activePage === 'TesCard' }"
                    class="flex justify-between items-center w-full p-4 hover:bg-blue-200">
                    <div class="flex space-x-2 items-center text-center">
                        <i class="fa-solid fa-award text-orange-300 sm:text-xl text-md"></i>
                        <div class="text-black  text-[12px] md:text-[14px]  font-sans ">Tes
                        </div>
                    </div>
                    <div class="hidden sm:block w-6 h-6 flex-shrink-0">
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
            activeFilter: null,

            isSidebarOpen: true, // Atur menu sidebar terbuka secara default
            activePage: 'CoursePage',
            progress2: 0,
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
            const pageTitle = to.meta.title || 'Preview';
            this.updatePageTitle(pageTitle);

            if (to.name === 'CoursePage') {
                this.activePage = 'CoursePage';
                this.updatePageTitle('Pengenalan Algoritma dan Pemrograman');
            } else if (to.name === 'MateriCard') {
                this.activePage = 'MateriCard';
                this.updatePageTitle('Sejarah Algoritma');
            } else if (to.name === 'FileDoc') {
                this.activePage = 'FileDoc';
                this.updatePageTitle('Flowchart');
            } else if (to.name === 'KuisCard') {
                this.activePage = 'KuisCard';
                this.updatePageTitle('Kuis HTML');
            } else if (to.name === 'KuisCard1') {
                this.activePage = 'KuisCard1';
                this.updatePageTitle('Kuis HTML');
            } else if (to.name === 'TesCard') {
                this.activePage = 'TesCard';
                this.updatePageTitle('Tes HTML');
            } else {
                this.activePage = 'CoursePage';
                this.updatePageTitle('Pengenalan Algoritma dan Pemrograman'); // Default title
            }
        }
    }
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