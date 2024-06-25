<template>
  <div class="flex flex-col space-y-8 justify-end mr-8">
    <div class="col-span-5 xl:col-span-2">
      <div class="rounded-sm border border-stroke bg-white shadow-default">
        <div class="flex justify-between items-center border-b px-4 border-stroke">
          <div class="py-4">
            <h3 class="font-medium text-black">Your Document</h3>
          </div>
          <div>
            <span>
              <button class="text-sm font-medium p-2 rounded-lg hover:bg-gray-100" @click="deletePDF">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
              </button>
            </span>
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
      <router-link :to="{ name: 'MateriCard', params: { id: id } }">
        <div class="text-center justify-end text-md hover:bg-blue-300 bg-blue-200 text-[#564FFD] rounded py-2 px-6">
          Selanjutnya
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="js">
import { ref, computed } from 'vue';

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
/* Menjaga ukuran kotak file tetap konsisten */
#FileUpload {
  height: 150px;
  /* Anda dapat menyesuaikan nilai ini sesuai kebutuhan */
}
</style>
