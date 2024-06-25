import axios from "axios";


export async function register({ email, password, name,phone_number }) {
    try {
        // Jangan mendeklarasikan variabel data
        await axios.post(`127.0.0.1:3000/auth/register`, {
            email: email,
            password: password,
            name: name,
            phone_number,
            image:null,
        });
    } catch (error) {
        console.log(error.message);
    }
}
