<template>
    <div class="flex flex-col space-y-8 justify-end">  
        <div class="col-span-5 xl:col-span-2">
            <div class="rounded-sm border border-stroke bg-white shadow-default">
                <div class="flex justify-between items-center border-b px-4 border-stroke">
                    <div class="py-4">
                        <h3 class="text-sm sm:text-md md:text-lg font-medium text-black">File</h3>
                    </div>
                    <div class="flex space-x-4 items-center">
                        <!-- <FilterProgram/> -->
                        <i class="fa-regular fa-pen-to-square"></i>
                        <i class="fa-regular fa-trash-can" @click="deletePDF"></i>
                    </div>
                </div>
                <div class="p-7">
                    <form @submit.prevent="handlePDFSubmit">
                        <!-- User PDF Section -->
                        <div v-if="userPDF" class="mb-4 flex items-center justify-center">
                            <!-- Embedded PDF -->
                            <embed :src="userPDF" type="application/pdf" class="w-full min-h-screen" />
                        </div>
                        <!-- File Upload Section -->
                        <div v-else>
                            <div
                                class="relative rounded border-2 border-dashed border-gray-300 bg-gray py-4 px-4 sm:py-8">
                                <div class="flex flex-col items-center w-full h-20 space-y-1">
                                    <img src="@/assets/pdf1.png" alt="pdf_file" class="w-8 h-8" />
                                    <div id="FileUpload" class="block h-4 w-full cursor-pointer appearance-none">
                                        <input type="file" accept="application/pdf"
                                            class="absolute inset-0 z-50 m-0 h-full w-full p-0 cursor-pointer opacity-0 outline-none"
                                            @change="handleFileChange" />
                                    </div>
                                    <div v-if="uploadedPDF" class="flex flex-col items-center justify-center">
                                        <p class="text-sm font-medium">{{ uploadedPDFName }}</p>
                                    </div>
                                    <div v-else class="flex flex-col items-center justify-center space-y-1">
                                        <p class="font-medium text-xs md:text-sm lg:text-md">PDF only</p>
                                        <p class="mt-1.5 hidden sm:block font-medium text-xs md:text-sm lg:text-md">
                                            <span class="text-primary">Click to upload</span> or drag and drop
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <!-- Save and Cancel Buttons for PDF Section -->
                            <div class="flex justify-end gap-4 mt-4">
                                <!-- <button
                                    class="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1"
                                    type="button" @click="handlePDFCancel">
                                    Cancel
                                </button> -->
                                <button
                                    :class="['flex justify-center rounded py-1 sm:py-2 px-4 sm:px-6 text-xs sm:text-sm text-gray', saveButtonClass]"
                                    :disabled="!uploadedPDF" type="submit">
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="js">
import { ref, computed } from 'vue';
// import FilterProgram from '@/components/Section/MyClass/Filter/FilterProgram.vue';

const userPDF = ref(null);
const uploadedPDF = ref(null);
const uploadedPDFName = ref('');

const handlePDFSubmit = () => {
    if (uploadedPDF.value) {
        userPDF.value = uploadedPDF.value;
        uploadedPDF.value = null; // Clear the uploaded PDF
        uploadedPDFName.value = '';
    }
};

// const handlePDFCancel = () => {
//     uploadedPDF.value = null;
//     uploadedPDFName.value = '';
// };

const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
        const reader = new FileReader();
        reader.onload = (e) => {
            uploadedPDF.value = e.target.result;
        };
        reader.readAsDataURL(file);
        uploadedPDFName.value = file.name;
    }
};

const deletePDF = () => {
    userPDF.value = null;
    uploadedPDF.value = null;
    uploadedPDFName.value = '';
};

const saveButtonClass = computed(() => {
    return uploadedPDF.value ? 'bg-blue-400 hover:bg-blue-500' : 'bg-blue-200';
});
</script>

<style scoped>
#FileUpload {
    height: 150px;
    
}
</style>