<template>
    <div class="flex justify-between m-4 text-center items-center">
        <div class="flex space-x-4 ">
            <div class="relative">
                <div>
                    <button type="button"
                        class="hidden sm:block relative rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                        <span class="absolute -inset-1.5"></span>
                        <span class="sr-only">Open user menu</span>
                        <img class="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="">
                    </button>
                </div>

            </div>
            <div class="hidden sm:block">
                <div class="flex flex-col text-start">
                    <div class="text-sm font-bold text-gray-300">Burhan Ahmad</div>
                    <div class="text-xs text-gray-300">Students</div>
                </div>
            </div>
        </div>
        <div class="sm:w-96 w-52">
            <ProgressBar/>
        </div>
        <div class="flex space-x-8 text-center center items-center">
            <div class="bg-blue-500 rounded-md hover:bg-blue-600">
                <p class="mx-4 my-2 text-xs sm:text-sm text-white">Edit Biography</p>
            </div>
            <div class="bg-gray-200 hover:bg-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-4 h-4 m-2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
import ProgressBar from '@/components/Progres/ProgressBio';
export default{
    components:{
        ProgressBar,
    }
}

</script>