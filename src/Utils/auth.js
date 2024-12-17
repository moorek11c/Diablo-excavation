import { BASE_URL, handleResponse } from "../Utils/constants";

export const loginAdmin = async (username, password) => {
  const url = `${BASE_URL}/auth/login`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await handleResponse(response);
    if (!data.token) {
      throw new Error("Token not found in response");
    }
    localStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const getAuthHeaders = () => {
  const token = localStorage.getItem("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};
