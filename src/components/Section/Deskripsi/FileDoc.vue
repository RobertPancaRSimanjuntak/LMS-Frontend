<template>
  <div class="flex flex-col space-y-8 justify-end mr-8">
    <div class="col-span-5 xl:col-span-2">
      <div class="flex justify-between items-center px-4">
        <div class="py-4">
          <h3 class="text-black text-lg font-semibold">Pengertian Algoritma</h3>
        </div>
      </div>
      <div class="rounded-sm border border-stroke bg-white shadow-default">
        <div class="p-7">
          <form @submit.prevent="handlePDFSubmit">
            <!-- User PDF Section -->
            <div v-if="userPDF" class="mb-4 flex items-center justify-center">
              <!-- Embedded PDF -->
              <embed :src="userPDF" type="application/pdf" class="w-full" />
            </div>
            <!-- File Upload Section -->
            <div v-else>
              <div class="relative rounded border-2 border-dashed border-gray-300 bg-gray py-4 px-4 sm:py-8">
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
                    <p class="text-sm font-medium">PDF only</p>
                    <p class="mt-1.5 text-sm font-medium">
                      <span class="text-primary">Click to upload</span> or drag and drop
                    </p>
                  </div>
                </div>
              </div>
              <!-- Save and Cancel Buttons for PDF Section -->
              <div class="flex justify-end gap-4 mt-4">
                <button
                  class="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1"
                  type="button" @click="handlePDFCancel">
                  Cancel
                </button>
                <button :class="['flex justify-center rounded py-2 px-6 font-medium text-gray', saveButtonClass]"
                  :disabled="!uploadedPDF" type="submit">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="flex justify-between mb-8">
      <router-link :to="{ name: 'CoursePage', params: { id: id } }">
        <div class="text-center justify-end text-md hover:bg-blue-300 bg-blue-200 text-[#564FFD] rounded py-2 px-6">
          Sebelumnya
        </div>
      </router-link>
      <router-link :to="{ name: 'KuisCard', params: { id: id } }">
        <div class="text-center justify-end text-md hover:bg-blue-300 bg-blue-200 text-[#564FFD] rounded py-2 px-6">
          Selanjutnya
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="js">
import { ref, computed } from 'vue';

const userPDF = ref('/Algoritma.pdf');
const uploadedPDF = ref(null);
const uploadedPDFName = ref('');

const handlePDFSubmit = () => {
  if (uploadedPDF.value) {
    userPDF.value = uploadedPDF.value;
    uploadedPDF.value = null; // Clear the uploaded PDF
    uploadedPDFName.value = '';
  }
};

const handlePDFCancel = () => {
  uploadedPDF.value = null;
  uploadedPDFName.value = '';
};

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

const saveButtonClass = computed(() => {
  return uploadedPDF.value ? 'bg-blue-400 hover:bg-blue-500' : 'bg-blue-200';
});
</script>

<style scoped>
/* Menjaga ukuran kotak file tetap konsisten */
#FileUpload {
  height: 150px;
  /* Anda dapat menyesuaikan nilai ini sesuai kebutuhan */
}

embed {
  height: 70vh;
}
</style>
