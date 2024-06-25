<template>
    <div class="m-8 flex flex-col gap-4">
        <h1 class="text-md font-bold">Web / Research / {{ $route.params.name }}</h1>
        <!-- Konten detail berdasarkan nama -->
        <div>
            <Hasil />
        </div>
    </div>
</template>

<script>
import Hasil from '../ProgramDosen/HasilStudents.vue';

export default {
    // Komponen ini akan menerima parameter `name` dari URL
    components: {
        Hasil,

    },
};
</script>