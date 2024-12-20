import { BASE_URL } from "../Utils/constants";
import { handleResponse } from "./constants";

export const signin = async ({ email, password }) => {
  try {
    const response = await fetch(`${BASE_URL}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await handleResponse(response);

    if (!data || !data.user || !data.token) {
      throw new Error("User data is incomplete");
    }
    return data;
  } catch (error) {
    console.error("Error logging in:", error.message);
    throw error;
  }
};

// export const register = async ({ username, email, password }) => {
//   try {
//     const response = await fetch(`${BASE_URL}/signup`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, email, password }),
//     });
//     console.log("register", response);

//     return await handleResponse(response);
//   } catch (error) {
//     console.error("Error registering user:", error);
//   }
// };

export const register = async (username, email, password) => {
  const response = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  });
  return handleResponse(response);
};

export const authorize = async (email, password) => {
  const response = await fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return handleResponse(response);
};

export const checkToken = async () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Token is not provided");

  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      method: "GET",
      headers: getAuthHeaders(),
    });

    return handleResponse(response);
  } catch (error) {
    console.error("Error checking token:", error);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getAuthHeaders = () => {
  const token = localStorage.getItem("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};
