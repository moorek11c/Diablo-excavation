import axios from "axios";

export const fileDataToString = (File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(File);
  });
};

const headers = {
  "Content-Type": "multipart/form-data",
};

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
  headers,
});
