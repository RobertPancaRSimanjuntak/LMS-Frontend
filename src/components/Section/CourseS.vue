<template>
    <div class="justify-center items-center m-4">
        <div class="flex mb-4 justify-between">
            <div>
                <h1>Best Courses</h1>
            </div>
            <div @click="toggleShowAll"
                class="cursor-pointer border border-gray-200 text-gray-500 rounded-full p-2 text-sm font-light">
                All Kategories
            </div>
        </div>

        <div :class="gridClass" class="grid gap-4 justify-center items-center">
            <!-- card -->
            <div v-for="(course, id) in displayedCourse" :key="id">
                <div class="h-auto max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg bg-white rounded-lg shadow-md  items-center justify-center">
                    <div>
                        <!-- Gambar Kartu -->
                        <div>
                            <img class="object-cover small-image rounded-t-lg" :src="course.image" alt="Course Image" />
                        </div>
                        <!-- Konten Kartu -->
                        <div class="flex flex-col space-y-4">
                            <div class="flex flex-col space-y-2">
                                <h5 class="text-sm tracking-tight text-gray-400 px-5 pt-4 truncate">{{ course.deskripsi
                                    }}
                                </h5>
                                <p class="sm:text-lg text-sm tracking-tight px-5 font-medium text-gray-700">
                                    {{ course.title }}</p>
                            </div>

                            <div class="border-t-2 border-gray-300">
                                <div class="px-4 py-4 text-end">
                                    <span class="text-md font-light text-gray-400 line-through">{{ course.harga
                                        }}</span>
                                    <span class="ms-2 text-md font-medium text-green-600 ">{{ course.diskon }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<script>
import profil from '@/assets/profil.png'

export default {
    name: 'SectionCourse',
    data() {
        return {
            showAll: false,
            course: [
                {
                    image: profil,
                    deskripsi: 'ayo belajar pemograman web',
                    title: 'Pemrograman Web',
                    harga: '$45',
                    diskon: '$5'
                },
                {
                    image: profil, deskripsi: 'ayo belajar pemograman web ', title: 'Pemrograman Web', harga: '$60', diskon: '$30'
                },
                {
                    image: profil, deskripsi: 'ayo belajar pemograman web ', title: 'Pemrograman Web', harga: '$60', diskon: '$30'
                },

                {
                    image: profil, deskripsi: 'ayo belajar pemograman web ', title: 'Pemrograman Web', harga: '$60', diskon: '$30'
                },

                {
                    image: profil, deskripsi: 'ayo belajar pemograman web ayo belajar pemograman webayo belajar pemograman webayo belajar pemograman webayo belajar pemograman webayo belajar pemograman web ', title: 'Pemrograman Web', harga: '$60', diskon: '$30'
                },

                {
                    image: profil, deskripsi: 'ayo belajar pemograman web ', title: 'Pemrograman Web', harga: '$60', diskon: '$30'
                },

                {
                    image: profil, deskripsi: 'ayo belajar pemograman web ', title: 'Pemrograman Web', harga: '$60', diskon: '$30'
                },


                // Add more course objects as needed
            ]
        };
    },
    computed: {
        displayedCourse() {
            if (this.showAll) {
                return this.course;
            } else {
                // Set the number of cards to show initially for different screen sizes
                const smCount = 3;
                const mdCount = 6;
                const lgCount = 10;
                if (window.innerWidth >= 1024) {
                    return this.course.slice(0, lgCount);
                } else if (window.innerWidth >= 768) {
                    return this.course.slice(0, mdCount);
                } else {
                    return this.course.slice(0, smCount);
                }
            }
        },
        gridClass() {
            return {
                'grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5': true,
                'sm:grid-rows-3 md:grid-rows-6 lg:grid-rows-10': !this.showAll
            };
        }
    },

    methods: {
        toggleShowAll() {
            this.showAll = !this.showAll;
        }

    }
}
</script>

<style>
/* Custom CSS to limit number of rows based on screen size */
@media (min-width: 1024px) {
    .grid {
        grid-template-rows: repeat(2, minmax(0, 1fr));
    }
}

@media (min-width: 768px) and (max-width: 1023px) {
    .grid {
        grid-template-rows: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 767px) {
    .grid {
        grid-template-rows: repeat(2, minmax(0, 1fr));
    }
}
</style>