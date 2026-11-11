// ANSWER FILE. Try database-question.js first, then compare with this.
// Run this version with: node index.js answer

// Step 1: import mongoose.
import mongoose from "mongoose";

// Step 2: the connection URI. The last part (hotel) is the database name.
const uri = "mongodb://127.0.0.1:27017/hotel";

// Step 3: the schema lists the fields and their types.
const roomSchema = new mongoose.Schema({
  room: String,
  type: String,
  floor: Number,
  rent: Number,
});

// The model "Room" is saved in the "rooms" collection.
const Room = mongoose.model("Room", roomSchema);

// Step 4: connect once when the server starts.
export async function connectDB() {
  await mongoose.connect(uri);
  console.log("Connected to MongoDB");
}

// find() with no filter returns every document.
export async function getAllRooms() {
  return await Room.find();
}

// Exact match: type must equal the value sent from the page.
export async function findRoomsByType(type) {
  return await Room.find({ type: type });
}

// $lt means "less than".
export async function findRoomsBelowRent(maxRent) {
  return await Room.find({ rent: { $lt: maxRent } });
}

// sort: -1 = highest first. limit(3) keeps the first 3.
export async function getThreeCostliestRooms() {
  return await Room.find().sort({ rent: -1 }).limit(3);
}

// create() checks the data against the schema, saves it and returns the saved document.
export async function addRoom(room) {
  return await Room.create(room);
}
