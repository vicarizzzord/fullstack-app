import mongoose from "../db";

const ClientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    cpf: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    street: {
      type: String,
    },
    number: {
      type: String,
    },
    district: {
      type: String,
    },
  },
);

const Client = mongoose.model("Client", ClientSchema);

export default Client;
