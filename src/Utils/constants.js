export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "api.diabloexcavation.com"
    : "http://localhost:3001";

export const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Something went wrong");
  }
  return response.json();
};
