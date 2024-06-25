<template>
    <div class="flex flex-col space-y-8 mr-8">
        <div class="flex-col justify-start items-start gap-8 inline-flex">
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
                        <div class=" text-black text-md font-normal font-sans leading-loose">1 jam</div>
                    </div>
                    <div class="flex flex-col border border-black text-center">
                        <div
                            class="w-24 sm:w-40 border-b border-black  text-black text-md font-normal font-sans leading-loose">
                            Kuis</div>
                        <div class=" text-black text-md font-normal font-sans leading-loose">1 jam</div>
                    </div>
                    <div class="flex flex-col border border-black text-center">
                        <div
                            class="w-24 sm:w-40 border-b border-black  text-black text-md font-normal font-sans leading-loose">
                            Tes</div>
                        <div class=" text-black text-md font-normal font-sans leading-loose">1 jam</div>
                    </div>
                </div>
            </div>
            <div>
                <span class="text-black text-lg font-bold font-sans leading-loose">Tentang Kelas<br /></span>
                <span class="text-black text-md font-normal font-sans leading-loose">
                    Dalam kelas online ini kamu akan belajar dasar-dasar HTML. HTML merupakan pengetahuan umum yang
                    harus
                    dimiliki oleh setiap orang yang menggeluti bidang web programming. Dalam kelas ini, kamu akan
                    belajar
                    mulai dari bagaimana konsep dasar dan cara kerja dari HTML serta bagaimana penggunaannya dalam
                    membangun
                    sebuah tampilan website.<br /><br />
                </span>
                <span class="text-black text-lg font-bold font-sans leading-loose">Tujuan Umum dan Khusus
                    Pelatihan<br /></span>
                <span class="text-black text-md font-normal font-sans leading-loose">
                    Di akhir pelatihan, peserta dapat mengenal HTML<br />
                    Dapat mengetahui dasar-dasar pemrograman<br />
                    Dapat menginstal software yang dibutuhkan dalam belajar pemrograman<br />
                    Dapat menjelaskan dasar-dasar pemrograman<br />
                </span>
                <span class="text-black text-md font-normal font-sans leading-loose"><br /></span>
                <span class="text-black text-lg font-bold font-sans leading-loose">Silabus <br /></span>
                <span class="text-black text-md font-normal font-sans leading-loose">
                    Topik 1: Perkenalan Tentang Web Development<br />
                    Topik 2: Hal Dasar yang Perlu Kamu Tahu tentang HTML<br />
                    Topik 3: Lebih Dalam dan Mengenal Semantic Syntax<br />
                    Topik 4: Tabel dan Formulir<br />
                    Jenis pekerjaan Kelas ditujukan bagi siapa saja yang ingin berkarir menjadi seorang programmer<br />
                </span>
                <span class="text-black text-lg font-bold font-sans leading-loose"><br /> Peralatan Belajar
                    Siswa<br /></span>
                <span class="text-black text-md font-normal font-sans leading-loose">
                    Siswa wajib memiliki akses internet melalui komputer yang menggunakan Windows/Mac/Linux<br />
                    Spesifikasi minimal komputer milik siswa:<br />
                    Sistem operasi : Windows, Linux, atau MacOS.<br />
                    Prosesor : Intel Dual Core (Rekomendasi Core i3 ke atas).<br />
                    RAM : 1GB (Rekomendasi 2GB).<br />
                    Resolusi layar : 1366 x 768 (Rekomendasi Full HD 1920 x 1080)<br />
                    Software:<br />
                    Browser (tidak ada preferensi khusus)<br />
                    Text editor (tidak ada preferensi khusus)
                </span>
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
/* Add any additional styling here if needed */
</style>