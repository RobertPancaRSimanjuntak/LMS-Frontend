<template>
    <div class="flex h-screen bg-gray-800 bg-opacity-40 justify-center items-center">
        <div class=" max-w-xs sm:max-w p-4 rounded-lg bg-gray-200 shadow-lg">
            <div class="flex flex-col justify-center items-center">
                <div class="flex flex-col items-center justify-center">
                    <div class="text-lg sm:text-xl font-semibold mb-4">Verifikasi OTP</div>
                    <div class="text-sm font-light">Enter the verification code we just sent to your email
                        burhan1@gmail.com
                    </div>
                </div>
                <div class="text-center items-center justify-center p-4">
                    <div class="gap-2 sm:gap-4 p-4 flex text-2xl text-center items-center justify-center ">
                        <input type="angka" id="otp1" name="otp1" maxlength="1"
                            class="block w-8 h-8 shadow-sm text-lg border border-gray-300 rounded-md hover:bg-gray-300 text-center"
                            @keyup="moveToNext($event, 'otp2')">
                        <input type="angka" id="otp2" name="otp2" maxlength="1"
                            class="block w-8 h-8 shadow-sm text-lg border border-gray-300 rounded-md hover:bg-gray-300 text-center"
                            @keyup="moveToNext($event, 'otp3')">
                        <input type="angka" id="otp3" name="otp3" maxlength="1"
                            class="block w-8 h-8 shadow-sm text-lg border border-gray-300 rounded-md hover:bg-gray-300 text-center"
                            @keyup="moveToNext($event, 'otp4')">
                        <input type="angka" id="otp4" name="otp4" maxlength="1"
                            class="block w-8 h-8 shadow-sm text-lg border border-gray-300 rounded-md hover:bg-gray-300 text-center"
                            @keyup="moveToNext($event, 'otp5')">
                        <input type="angka" id="otp5" name="otp5" maxlength="1"
                            class="block w-8 h-8 shadow-sm text-lg border border-gray-300 rounded-md hover:bg-gray-300 text-center"
                            >
                    </div>
                    <div class="flex space-x-2 justify-center">
                        <div class="text-sm font-light text-gray-400 ">
                            Didnt receive code?</div>
                        <a href="/registrasi" class="font-semimedium text-sm text-indigo-600 hover:underline ">
                            Resend</a>
                    </div>
                </div>

                <div>
                    <button type="button" @click="submitVerification"
                        class=" bg-indigo-600 text-white px-4 p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Verifikasi</button>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VerifikasiCard',
    methods: {
        moveToNext(currentInput, nextInputId) {
            const nextInput = document.getElementById(nextInputId);
            if (nextInput) {
                nextInput.focus();
            }
        },

        submitVerification() {
            // Logika untuk verifikasi
            console.log('Verifikasi berhasil');
            // Navigasi ke halaman berikutnya setelah verifikasi
            this.$router.push({ name: 'dashboard' });
        }
    }
}

</script>

<style></style>