<template>
    <div class="flex flex-col space-y-8 mr-8">
        <div class="flex-col justify-start items-start gap-8 inline-flex">
            <div class="text-lg font-semibold">
                Struktur Data dan Algoritma
            </div>
            <div class="relative w-full">
                <div class="flex flex-wrap sm:justify-start justify-center">
                    <div class="flex flex-col border border-black text-center">
                        <div
                            class="w-24 sm:w-40 border-b border-black  text-black text-md font-normal font-sans leading-loose">
                            Waktu</div>
                        <div class=" text-black text-md font-normal font-sans leading-loose">1 jam</div>
                    </div>
                    <div class="flex flex-col border border-black text-center">
                        <div
                            class=" w-24 sm:w-40 border-b border-black  text-black text-md font-normal font-sans leading-loose">
                            Video</div>
                        <div class=" text-black text-md font-normal font-sans leading-loose">2 jam</div>
                    </div>
                    <div class="flex flex-col border border-black text-center">
                        <div
                            class="w-24 sm:w-40 border-b border-black  text-black text-md font-normal font-sans leading-loose">
                            Kuis</div>
                        <div class=" text-black text-md font-normal font-sans leading-loose">4 jam</div>
                    </div>
                    <div class="flex flex-col border border-black text-center">
                        <div
                            class="w-24 sm:w-40 border-b border-black  text-black text-md font-normal font-sans leading-loose">
                            Tes</div>
                        <div class=" text-black text-md font-normal font-sans leading-loose">1 jam</div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-4">
                <div>
                    <h2 class="text-black text-lg font-bold font-sans leading-loose">Tentang Kelas<br /></h2>
                    <span class="text-black text-md font-normal font-sans leading-loose">
                        Dalam kelas ini, kamu akan diperkenalkan pada struktur data dan algoritma. Materi ini krusial
                        dalam
                        pemecahan masalah komputasional dan sangat relevan dalam pengembangan aplikasi dan pemrograman.
                        Kamu
                        akan mempelajari bagaimana menerapkan struktur data yang tepat dan algoritma yang efisien untuk
                        merancang solusi yang optimal terhadap berbagai masalah teknis.<br />
                    </span>
                </div>
                <div>
                    <h2 class="text-black text-lg font-bold font-sans leading-loose">Silabus<br /></h2>
                    <h3 class="text-black text-md font-medium font-sans leading-loose"> Topik 1: Pengenalan Algoritma
                        dan
                        Pemrograman</h3>
                    <ul class="text-black text-md font-normal font-sans leading-loose custom-list">
                        <li>Pengertian Algoritma</li>
                        <li>Sejarah Algoritma</li>
                        <li>Pseudocode</li>
                        <li>Pengenalan Algoritma</li>
                    </ul>
                    <h3 class="text-black text-md font-medium font-sans leading-loose"> Topik 2: Struktur Data</h3>
                    <ul class="text-black text-md font-normal font-sans leading-loose custom-list">
                        <li>Pengertian Data</li>
                        <li>Struktur Data</li>
                        <li>Karakter</li>
                        <li>Numerik</li>
                        <li>Boolean</li>
                        <li>Array dan Object</li>
                    </ul>
                    <h3 class="text-black text-md font-medium font-sans leading-loose"> Topik 3: Latihan Menerapkan
                        Algoritma dan Pemrograman</h3>
                    <ul class="text-black text-md font-normal font-sans leading-loose custom-list">
                        <li>Percabangan</li>
                        <li>Perulangan</li>
                        <li>Fungsi dan Prosedur</li>
                        <li>Rekursif</li>
                        <li>Stack dan Queue</li>
                    </ul>
                </div>
                <div>
                    <h2 class="text-black text-lg font-bold font-sans leading-loose"> Peralatan Belajar
                        Siswa</h2>
                    <h3 class="text-black text-md font-normal font-sans leading-loose">
                        Siswa diharapkan memiliki akses internet melalui komputer dengan sistem operasi Windows, Mac,
                        atau
                        Linux. Spesifikasi minimal komputer termasuk prosesor Intel Dual Core (disarankan Core i3 ke
                        atas),
                        RAM 1GB (disarankan 2GB), dan resolusi layar 1366 x 768 (disarankan Full HD 1920 x 1080).
                        Software
                        yang dibutuhkan termasuk browser dan text editor tanpa preferensi khusus.
                    </h3>
                </div>
            </div>
        </div>
        <div class="flex justify-end pb-12">
            <router-link :to="{ name: 'FileDoc', params: { id: id } }" class="hidden">
                <div
                    class="text-center justify-end text-md hover:bg-blue-300 bg-blue-200 text-[#564FFD] rounded py-2 px-6">
                    Sebelumnya </div>
            </router-link>
            <router-link :to="{ name: 'FileDoc', params: { id: id } }">
                <div
                    class="text-center justify-end text-md hover:bg-blue-300 bg-blue-200 text-[#564FFD] rounded py-2 px-6">
                    Selanjutnya </div>
            </router-link>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.custom-list {
    list-style-type: lower-alpha;
}
</style>