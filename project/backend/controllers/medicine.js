import Medicine from "../Data/products.js";
// Get all the data
export const medicinedata = (req, res) => {
  res.json(Medicine);
};
// Get data by id
export const medicinedatabyId = (req, res) => {
  const { id } = req.params;
  const medicine = Medicine.find((a) => a._id === id);
  if (medicine) {
    return res.json(medicine);
  }
  res.statusCode = 404;
  res.json({ message: "Medicine not found" });
};
