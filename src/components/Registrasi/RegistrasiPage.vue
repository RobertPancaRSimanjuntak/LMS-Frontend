<template>
    <div class="flex h-full flex-col items-center justify-center lg:p-0">
        <div class="bg-white p-8 rounded-lg  justify-center items-center">

            <div class="flex items-center justify-center text-center pb-4">
                <img class="h-12 w-auto" src="@/assets/logo.png" alt="Logo">
                <div class="font-bold text-2xl px-4 py-2">EduNes</div>
            </div>

            <!-- NAVBAR STUDENT/INSTRUCTOR -->
            <div class="flex text-center justify-center items-center">
                <div @click="userType = 'student'"
                    :class="{ 'bg-blue-500': userType === 'student', 'hover:bg-blue-500': userType !== 'student' }"
                    class="py-2.5 px-12 shadow-sm shadow-gray-300 cursor-pointer">Students</div>
                <div @click="userType = 'instructor'"
                    :class="{ 'bg-blue-500': userType === 'instructor', 'hover:bg-blue-500': userType !== 'instructor' }"
                    class="py-2.5 px-12 shadow-sm shadow-gray-300 cursor-pointer">Instructor</div>
            </div>

            <!-- logo -->
            <div class="sm:mx-auto sm:w-full sm:max-w-sm pt-12 pb-4">
                <!-- <img class="mx-auto h-24 w-auto" src="img/logo.svg" alt="Your Company"> -->
                <div class=" text-center text-2xl font-bold tracking-tight text-gray-900"> Create and account
                </div>
            </div>


            <div class="sm:mx-auto w-full sm:max-w-sm">
                <form class="space-y-4 md:space-y-6" @submit.prevent="submitForm">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-semibold text-gray-500">Full Name</label>
                        <div class="flex space-x-2 w-full">
                            <input
                                class=" bg-gray-50  border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="First Name" required=''>
                            <input
                                class="bg-gray-50  border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="Last Name">
                        </div>
                    </div>

                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-500">Username</label>
                        <input
                            class="bg-gray-50  border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="Username" required=''>
                    </div>

                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-500">Email</label>
                        <input type="email" name="email" id="email"
                            class="bg-gray-50  border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="name@company.com" required=''>
                    </div>
                    <div class="flex flex-col">
                        <div class="flex space-x-2">
                            <div>
                                <label for="password"
                                    class="block mb-2 text-sm font-medium text-gray-500">Password</label>
                                <input type="password" v-model="password" name="password" id="password"
                                    placeholder="password" autocomplete="current-password" required=''
                                    class="bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
                            </div>
                            <div>
                                <label for="confirm-password"
                                    class="block mb-2 text-sm font-medium text-gray-500 ">Confirm password</label>
                                <input type="confirm-password" v-model="confirmpassword" name="confirm-password"
                                    id="confirm-password" placeholder="password"
                                    class="bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required=''>
                            </div>
                        </div>
                        <div v-if="confirmpassword !== '' && !passwordsMatch"
                            class=" flex flex-col text-sm text-red-500">
                            Password and confirm password must match</div>
                    </div>
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <input id="terms" aria-describedby="terms" type="checkbox"
                                class="w-4 h-4 border border-gray-300 rounded bg-blue-50 focus:ring-3 focus:ring-blue-300"
                                required=''>
                        </div>
                        <div class="text-sm">
                            <label for="terms" class=" text-gray-500 font-light">I Agree with all of your<a
                                    class="text-blue-400 hover:underline mx-2" href="#">Terms &
                                    Conditions</a></label>
                        </div>
                    </div>
                   
                    <div class="flex justify-center items-center text-center lg:py-6 py-4">
                        <button :disabled="formSubmitted && !allFieldsFilled"
                            class="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
                            type="submit">Create account
                        </button>
                    </div>
                    
                    <div class="justify-center text-center ">
                        <div class="flex items-center justify-center">
                            <div class="border-b border-gray-300 flex-grow mr-4"></div>
                            <p class="text-sm text-gray-500">Sign up with</p>
                            <div class="border-b border-gray-300 flex-grow ml-4"></div>
                        </div>

                        <button type="button"
                            class="text-black bg-white shadow  hover:bg-gray-100 hover:text-black font-medium rounded-full text-sm py-2 px-4 my-4 inline-flex items-center">
                            <img class=" h-8" src="@/assets/logo.png" alt="google">
                            Google
                        </button>

                        <div class="mt-auto text-center text-sm text-gray-500">
                            Already have an account?
                            <router-link :to="{ name: 'LoginPage' }"
                                class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 hover:underline"
                                :class="{ 'bg-blue-500': activePage === 'LoginPage' }">Login</router-link>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userType: 'student', // Default to student login
            password: '',
            confirmpassword: '',
            formSubmitted:false,
            activePage:''

        };
    },
    computed: {
        passwordsMatch() {
            return this.password === this.confirmpassword;
        },
        allFieldsFilled() {
            const inputs = document.querySelectorAll('input[required]');
            for (let i = 0; i < inputs.length; i++) {
                if (!inputs[i].value.trim()) {
                    return false;
                }
            }
            return true;
        }
    },
    methods: {
        submitForm() {
            this.formSubmitted = true;
            if (!this.allFieldsFilled) {
                alert('Please fill in all required fields.');
                return;
            }
            // If all fields are filled, navigate to VerifikasiCard
            this.$router.push({name:'VerifikasiCard'});
        }
    }
};
</script>

<style>
/* optional */
</style>