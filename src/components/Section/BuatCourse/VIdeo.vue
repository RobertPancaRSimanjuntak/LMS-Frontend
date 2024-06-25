<template>
    <div class="flex flex-col space-y-8 justify-end">
        <div class="col-span-5 xl:col-span-2">
            <div class="rounded-sm border border-stroke bg-white shadow-default">
                <div class="flex justify-between items-center border-b px-4 border-stroke">
                    <div class="py-4">
                        <h3 class="text-sm sm:text-md md:text-lg font-medium text-black">Video</h3>
                    </div>
                    <div class="flex space-x-4 items-center">
                        <!-- <FilterProgram class="bg-blue-300 text-blue-800" /> -->
                        <i class="fa-regular fa-pen-to-square"></i>
                        <i class="fa-regular fa-trash-can" @click="deleteVideo"></i>
                    </div>
                </div>
                <div class="p-7">
                <form @submit.prevent="handleVideoSubmit">
                    <!-- User Video Section -->
                    <div v-if="userVideo" class="mb-4 flex items-center justify-center">
                        <!-- Embedded Video -->
                        <video :src="userVideo" controls class="max-w-screen"></video>
                    </div>
                    <!-- File Upload Section -->
                    <div v-else>
                        <div class="relative rounded border-2 border-dashed border-gray-300 bg-gray p-4 px-4 sm:py-8">
                            <div class="flex flex-col items-center w-full h-20 space-y-1">
                                <i class="fa-regular fa-file-video text-red-500 text-2xl"></i>
                                <div id="FileUpload" class="block h-4 w-full cursor-pointer appearance-none">
                                    <input type="file" accept="video/mp4"
                                        class="absolute inset-0 z-50 m-0 h-full w-full p-0 cursor-pointer opacity-0 outline-none"
                                        @change="handleFileChange" />
                                </div>
                                <div v-if="uploadedVideo" class="flex flex-col items-center justify-center">
                                    <p class="text-sm font-medium">{{ uploadedVideoName }}</p>
                                </div>
                                <div v-else class="flex flex-col items-center justify-center space-y-1">
                                    <p class="text-xs md:text-sm lg:text-md font-medium">MP4 only</p>
                                    <p class="mt-1 hidden sm:block font-medium text-xs md:text-sm lg:text-md">
                                        <span class="text-primary">Click to upload</span> or drag and drop
                                    </p>
                                </div>
                            </div>
                        </div>
                        <!-- Save and Cancel Buttons for Video Section -->
                        <div class="flex justify-end gap-4 mt-4">
                            <!-- <button
                                class="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1"
                                type="button" @click="handleVideoCancel">
                                Cancel
                            </button> -->
                            <button
                                :class="['flex justify-center rounded py-1 sm:py-2 px-4 sm:px-6 text-xs sm:text-sm text-gray', saveButtonClass]"
                                :disabled="!uploadedVideo" type="submit">
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

<script>
import { ref, computed } from 'vue';
// import FilterProgram from '@/components/Section/MyClass/Filter/FilterProgram.vue';
export default {
    components:{
        // FilterProgram,
    },
    setup() { 
        const userVideo = ref(null);
        const uploadedVideo = ref(null);
        const uploadedVideoName = ref('');

        const handleVideoSubmit = () => {
            if (uploadedVideo.value) {
                userVideo.value = uploadedVideo.value;
                uploadedVideo.value = null; // Clear the uploaded video
                uploadedVideoName.value = '';
            }
        };

        // const handleVideoCancel = () => {
        //     uploadedVideo.value = null;
        //     uploadedVideoName.value = '';
        // };

        const handleFileChange = (event) => {
            const file = event.target.files[0];
            if (file && file.type === 'video/mp4') {
                const reader = new FileReader();
                reader.onload = (e) => {
                    uploadedVideo.value = e.target.result;
                };
                reader.readAsDataURL(file);
                uploadedVideoName.value = file.name;
            } else {
                alert('Please upload an MP4 video file.');
            }
        };

        const deleteVideo = () => {
            userVideo.value = null;
            uploadedVideo.value = null;
            uploadedVideoName.value = '';
        };

        const saveButtonClass = computed(() => {
            return uploadedVideo.value ? 'bg-blue-400 hover:bg-blue-500' : 'bg-blue-200';
        });

        return {
            userVideo,
            uploadedVideo,
            uploadedVideoName,
            handleVideoSubmit,
            // handleVideoCancel,
            handleFileChange,
            deleteVideo,
            saveButtonClass,
        };
    }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
