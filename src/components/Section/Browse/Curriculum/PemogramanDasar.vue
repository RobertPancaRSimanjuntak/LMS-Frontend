<template>
    <div>
        <div class="flex flex-col relative">
            <!-- Tombol untuk menampilkan opsi filter -->
            <div class="flex justify-between cursor-pointer items-center text-center p-2  bg-blue-200"
                @click="toggleFilterMenu">
                <div
                    class="mx-2 sm:mx-4 text-gray-600 text-[12px] md:text-[14px] lg:text-[16px] font-semibold font-sans">
                    Pemrograman Dasar dengan C++</div>
                <div :class="{ 'rotate-180': showFilterMenu }" class="hidden sm:block">
                    <i class="fa-solid fa-chevron-down text-gray-600 p-1 rounded-full "></i>
                </div>
            </div>

            <!-- Opsi filter yang akan muncul saat tombol di klik -->
            <div class="relative top-full left-0 border-2 p-2" v-if="showFilterMenu">
                <!-- group hover:text-blue-500 {membuat hover secara bersamaan} -->
                <div class="p-2 sm:p-4 flex flex-col gap-2">
                    <div class="flex flex-col gap-2">
                        <h2 class="text-gray-800 text-[12px] md:text-[14px] lg:text-[16px] font-semibold font-sans">
                            Description</h2>
                        <p
                            class="flex flex-col gap-2 text-gray-800 text-[10px] md:text-[12px] lg:text-[14px] font-medium font-sans">
                            Pemrograman Dasar dengan C++ adalah kelas yang akan membimbing Anda memahami dasar-dasar
                            pemrograman menggunakan bahasa pemrograman C++. Bahasa pemrograman C++ adalah bahasa
                            pemrograman yang sangat populer dan banyak digunakan dalam dunia teknologi. Bersama mentor
                            terpercaya, kita akan mempelajari pemrograman dasar dengan C++ dari dasar hingga mahir.
                            Mentor akan memberikan berbagai contoh kasus yang sering ditemui dalam dunia nyata dan
                            bagaimana cara memecahkannya dengan C++. Kelas ini sangat cocok untuk Anda yang ingin
                            memahami apa itu pemrograman dasar dengan C++ dan bagaimana cara menerapkannya dalam
                            kehidupan sehari-hari. Tidak hanya ditujukan untuk programmer, kelas ini sangat cocok untuk
                            Anda yang ingin meningkatkan kemampuan berpikir logis dan sistematis.

                            <span>Yuk segera daftar dan kami tunggu di kelas ya!</span>
                        </p>
                    </div>
                    <div class="flex flex-col gap-2">
                        <h2 class="text-gray-800 text-[12px] md:text-[14px] lg:text-[16px] font-semibold font-sans">
                            Target Audience</h2>
                        <ul
                            class="custom-list text-gray-800 text-[10px] md:text-[12px] lg:text-[14px] font-medium font-sans">
                            <li>Anda yang ingin memahami poin penting pemrograman dasar dengan C++.</li>
                            <li>Anda yang ingin latihan membangun pemrograman dasar dengan C++.</li>
                            <li>Anda yang ingin mengembangkan Startup.</li>                      
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {
    },
    data() {
        return {
            showFilterMenu: false,
            // activeFilter: null,

            isSidebarOpen: true, // Atur menu sidebar terbuka secara default
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

.custom-list {
    list-style-type: disc;
    list-style: #000;
    padding-left: 20px;
    /* Menambahkan padding untuk indentasi */
}
</style>