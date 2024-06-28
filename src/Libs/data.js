import axios from "axios";
const API_URL = process.env.VUE_APP_API_URL

// Authentication: LOGIN
export async function login(email, password) {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });
    const data = response.data.data;
    // localStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
}

// Fetching All Classes
export async function getAllClasses() {
  try {
    const response = await axios.get(`${API_URL}/class`);
    const data = response.data.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

// Fetching Class by ID
export async function getClassById(id) {
  try {
    const response = await axios.get(`${API_URL}/class/${id}`);
    const data = response.data.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

// Fetching Active Classes
export async function getMyClasses(credential) {
  try {
    const response = await axios.get(`${API_URL}/class/me`, {
      headers: {
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
        Authorization: `Bearer ${credential}`,
      },
    });
    const data = response.data.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

// Fetching Course categories
export async function getCourseCategories() {
  try {
    const response = await axios.get(`${API_URL}/course-categories`);
    const data = response.data.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

// Fetching All Course
export async function getAllCourses() {
  try {
    const response = await axios.get(`${API_URL}/courses`);
    const data = response.data.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

// Fetching Course by params
export async function getCourseByParams(params) {
  try {
    const response = await axios.get(`${API_URL}/courses?${params}`);
    const data = response.data.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

// Fetching Course by ID
export async function getCourseById(id, credential) {
  try {
    if (credential) {
      const response = await axios.get(`${API_URL}/courses/${id}`, {
        headers: {
          Authorization: `Bearer ${credential}`,
        },
      });
      const data = response.data.data;
      return data;
    } else {
      const response = await axios.get(`${API_URL}/courses/${id}`);
      const data = response.data.data;
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}

// Testing the functions
// const credential = await login("lulufaridaalfani73@gmail.com", "lulufarida");
// const classes = await getClassById("de7b89f4-a6b4-4fe2-9e4d-dd0f30f2c8d8");
// console.log(classes);
// const myClasses = await getMyClasses(credential.token);
// console.log(myClasses);
// const courseCategories = await getCourseCategories();
// console.log(courseCategories);
// const courses = await getAllCourses();
// console.log(courses);
// const coursesByCategory = await getCourseByParams("category=Cybersecurity");
// console.log(coursesByCategory);
// const course = await getCourseById("3db34c0b-ca89-4466-8409-f9a26c0df426", credential.token);
// console.log(course);