import { BASE_URL } from "./constants";

export const uploadImage = async (file) => {
  const url = `${BASE_URL}/images/upload`;
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error("Error uploading file");
    }
    return await response.json();
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};

export const fetchImageById = async (imageId) => {
  const url = `${BASE_URL}/images/${imageId}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error fetching image");
    }
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error("Error fetching image:", error);
    throw error;
  }
};

export const deleteImageById = async (imageId) => {
  const url = `${BASE_URL}/images/${imageId}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error deleting image");
    }
  } catch (error) {
    console.error("Error deleting image:", error);
    throw error;
  }
};

export const fetchAllImages = async () => {
  const url = `${BASE_URL}/images`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error fetching images");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};

export const submitForm = async (formData) => {
  const url = `${BASE_URL}/submit-form`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error("Error submitting form");
    }
    return await response.json();
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
};
