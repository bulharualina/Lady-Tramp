import mongoose from "mongoose";
import Dod from "./dog";
import User from "./user";

const AdoptionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    adoptionItems: [
      {
        qty: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Dogs",
        },
      },
    ],
    shippingAddress: {
      fullName: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      country: { type: String, required: true },
      postalCode: { type: String, required: true },
    },
    paymentMethod: { type: String, required: true, default: "Stripe" },
    totalPrice: { type: Number, required: true },
    isPaid: { type: Boolean, required: true },
    paidAt: { type: Date, required: true },
    isProcessing: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const Adoption =
  mongoose.models.Adoption || mongoose.model("Adoption", AdoptionSchema);

export default Adoption;
