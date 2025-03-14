import axios from "axios";

// ✅ Set API Base URL
const API_BASE_URL = "http://127.0.0.1:8000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
});

// ✅ Set Auth Token
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

// ✅ Authentication Functions
export const login = async (username, password) => {
  const response = await api.post("/auth/token/", { username, password });
  localStorage.setItem("accessToken", response.data.access);
  setAuthToken(response.data.access);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("accessToken");
  setAuthToken(null);
};

export const checkAuthToken = () => {
  const token = localStorage.getItem("accessToken");
  if (token) setAuthToken(token);
};

// ✅ Generic API Functions
export const getData = (endpoint) => api.get(`/${endpoint}/`).then((res) => res.data);
export const addData = (endpoint, data) => api.post(`/${endpoint}/`, data).then((res) => res.data);
export const updateData = (endpoint, id, data) => api.put(`/${endpoint}/${id}/`, data).then((res) => res.data);
export const deleteData = (endpoint, id) => api.delete(`/${endpoint}/${id}/`).then((res) => res.data);

// ✅ Corrected Exports
export const getStudents = () => getData("students");
export const addStudent = (studentData) => addData("students", studentData);
export const updateStudent = (studentId, studentData) => updateData("students", studentId, studentData);
export const deleteStudent = (studentId) => deleteData("students", studentId);

export const getCourses = () => getData("courses");
export const addCourse = (courseData) => addData("courses", courseData);
export const updateCourse = (courseId, courseData) => updateData("courses", courseId, courseData);
export const deleteCourse = (courseId) => deleteData("courses", courseId);

export const getFaculty = () => getData("faculty");
export const addFaculty = (facultyData) => addData("faculty", facultyData);
export const updateFaculty = (facultyId, facultyData) => updateData("faculty", facultyId, facultyData);
export const deleteFaculty = (facultyId) => deleteData("faculty", facultyId);

export const getDepartments = () => getData("departments");
export const addDepartment = (departmentData) => addData("departments", departmentData);
export const updateDepartment = (departmentId, departmentData) => updateData("departments", departmentId, departmentData);
export const deleteDepartment = (departmentId) => deleteData("departments", departmentId);

export const getEnrollments = () => getData("enrollments");
export const enrollStudent = (enrollmentData) => addData("enrollments", enrollmentData);
export const removeEnrollment = (enrollmentId) => deleteData("enrollments", enrollmentId);

export const getExams = () => getData("exams");
export const scheduleExam = (examData) => addData("exams", examData);
export const deleteExam = (examId) => deleteData("exams", examId);

export const getResults = () => getData("results");
export const addResult = (resultData) => addData("results", resultData);
export const deleteResult = (resultId) => deleteData("results", resultId);

export default api;
