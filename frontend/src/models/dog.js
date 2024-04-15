import mongoose from "mongoose";

const DogSchema = new mongoose.Schema(
  {
    name: String,
    sizes: String,
    description: String,
    gender: String,
    imageUrl: String,
  },
  { timestamps: true }
);

const Dog = mongoose.models.Dog || mongoose.model("Dog", DogSchema);

export default Dog;
