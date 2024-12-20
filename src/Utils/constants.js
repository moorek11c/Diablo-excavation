export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.diabloexcavation.com"
    : "http://localhost:3001";

export const handleResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
};
