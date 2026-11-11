// ==================================================================
// PRACTICE: write your answer in this file. Do not change any other file.
// Complete every function below. Each function must return its result.
// Stuck? Compare with database-answer.js, or run: node index.js answer
// ==================================================================


// Step 1: Import mongoose here.



// Step 2: Write your MongoDB connection URI here.
//         Database name: hotel



// Step 3: Create the schema and the model here.
//         Model name: Room   (Mongoose saves it in the "rooms" collection)
//         Fields: room (String), type (String), floor (Number), rent (Number)



// Step 4: Connect to MongoDB inside this function.
//         After connecting, print: Connected to MongoDB
export async function connectDB() {

}


// Return all the rooms in the collection.
export async function getAllRooms() {

}


// type comes from the "Search by type" box on the page, for example "Suite".
// Return the rooms whose type matches it.
export async function findRoomsByType(type) {

}


// maxRent is a number typed on the page, for example 2700.
// Return the rooms whose rent is less than maxRent.
export async function findRoomsBelowRent(maxRent) {

}


// Return the 3 rooms with the highest rent, highest first.
export async function getThreeCostliestRooms() {

}


// room comes from the "Add Room" form, for example:
//   { room: "502", type: "Double", floor: 5, rent: 3600 }
// Save it in the database and return the saved room.
export async function addRoom(room) {

}
