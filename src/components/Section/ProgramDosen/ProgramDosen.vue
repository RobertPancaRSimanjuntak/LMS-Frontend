<template>
    <div class="flex flex-col gap-4 m-4 mt-4">
        <div>
            <CardDosen/>
        </div>
        <div class="flex flex-col sm:flex-row gap-2 max-w-screen m-8">
            <div class="w-full">
                <LinkZoom />
            </div>
            <div class="w-full">
                <KeHadiran />
            </div>
        </div>
    </div>
</template>

<script>

import LinkZoom from '@/components/Section/MyProgram/LinkZoom.vue';
import KeHadiran from '@/components/Section/MyProgram/KeHadiran.vue'
import CardDosen from '../ProgramDosen/CardDosen.vue';

export default {
    components: {
        CardDosen,
        LinkZoom,
        KeHadiran,
    },
}
</script>