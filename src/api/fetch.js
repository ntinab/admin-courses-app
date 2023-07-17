import axios from "axios";

export async function fetchStats() {
  const res = await axios.get(`${process.env.REACT_APP_API_URL}/stats`);
  // const data = await res.json();
  return res.data;
}

export async function fetchCourse(id) {
  const res = await axios.get(`${process.env.REACT_APP_API_URL}/courses/${id}`);
  // const data = await res.json();
  return res.data;
}

export async function postCourse(formData) {
  const res = await axios.post(`${process.env.REACT_APP_API_URL}/courses/`, formData, {
    headers: { "Content-Type": "application/json" },
  });
  // const data = await res.json();
  return res.data;
}

export async function editCourse(formValues, id) {
  const res = await axios.put(`${process.env.REACT_APP_API_URL}/courses/${id}`, formValues, {
    headers: { "Content-Type": "application/json" },
  });
  // const data = await res.json();
  return res.data;
}

export async function deleteCourse(id) {
  const res = await axios.delete(`${process.env.REACT_APP_API_URL}/courses/${id}`);
  // const data = await res.json();
  return res.data;
}