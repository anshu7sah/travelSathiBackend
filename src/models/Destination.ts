import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema(
  {
    SN: {
      type: Number,
    },
    Place: {
      type: String,
    },
    City: {
      type: String,
    },
    District: {
      type: String,
    },
    Address: {
      type: String,
    },
    Interests: {
      type: String,
    },
    Sector: {
      type: String,
    },
    Ticket: {
      type: String,
    },
    Nearby_Places: {
      type: String,
    },
    Transportation: {
      type: String,
    },
    Description: {
      type: String,
    },
    Image: {
      type: String,
    },
    Rating: {
      type: Number,
    },
    Summary: {
      type: String,
    },
  },
  { collection: "Destinations" }
);

const Destination = mongoose.model("Destinations", destinationSchema);

export { Destination };
