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

const Dog = mongoose.models.Dogs || mongoose.model("Dogs", DogSchema);

export default Dog;
