import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  orderId: { type: String, unique: true },
  items: [
    {
      id: String,
      quantity: Number,
      price_total: Number,
      product: {
        name: String,
      },
    },
  ],
  shippingInfo: {
    fullName: String,
    address: String,
    city: String,
    postalCode: String,
    country: String,
  },
  currency: { type: String, required: true },
  totalAmount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  status: { type: String, enum: ["paid", "failed"], default: "paid" },
  stripeSessionId: { type: String, required: true },
});

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
