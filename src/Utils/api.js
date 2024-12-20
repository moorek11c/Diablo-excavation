import { BASE_URL } from "./constants";

const getAllImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.set("Content-Type", "application/json");
    res.json(images);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching images" });
  }
};

export { getAllImages };
