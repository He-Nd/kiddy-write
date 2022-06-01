import axios from "axios";

const baseURL = "http://localhost:4000";

export async function register(email, password) {
  const res = await axios.post(`${baseURL}/users/register`, {
    email,
    password,
  });
  return res;
}

export async function login(email, password) {
  const res = await axios.post(`${baseURL}/users/login`, { email, password });
  return res;
}

export async function getAllUsers() {
  const res = await axios.get(`${baseURL}/users`);
  return res;
}

export async function addScore(email, score) {
  const res = await axios.patch(`${baseURL}/users/add-score`, { email, score });
  return res;
}
