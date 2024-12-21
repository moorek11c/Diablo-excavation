import { BASE_URL } from "../Utils/constants";
import { handleResponse } from "./constants";

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

export const register = async ({ username, email, password }) => {
  console.log(username, email, password);
  const response = await fetch(`${BASE_URL}/users/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  });
  return handleResponse(response);
};

export const authorize = async ({ username, password }) => {
  console.log(username, password);

  const response = await fetch(`${BASE_URL}/users/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
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
