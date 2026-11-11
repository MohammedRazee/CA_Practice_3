# CA Lab Practice - Set 3

**Hotel Room Bookings**

## Your task

The web page and the Express server are ready. The database part is missing. Complete it using Mongoose.

- Write your answer in **database-question.js**. The comments in it tell you what to write.
- Do not change any other file.
- The answer is in **database-answer.js**. Try on your own first.

## Steps

1. Open this project folder in VS Code and open a terminal in it.
2. Install the packages:

   ```
   npm install
   npm install mongoose
   ```

3. Make sure MongoDB is running, then add the sample data (see below).
4. Complete **database-question.js**.
5. Start the server:

   ```
   node index.js
   ```

6. Open **http://localhost:3000** in your browser.

After every change to database-question.js, stop the server with Ctrl + C and start it again.

To run the answer instead, start the server with: **node index.js answer**

## Database details

- **Database:** hotel
- **Collection:** rooms
- **Fields:** room (text), type (text), floor (number), rent (number)

## Sample data

Open mongosh, paste these commands and press Enter. Paste them only once.

```
use hotel
db.rooms.insertMany([
  { room: "101", type: "Single", floor: 1, rent: 1800 },
  { room: "102", type: "Double", floor: 1, rent: 2600 },
  { room: "103", type: "Suite", floor: 1, rent: 5200 },
  { room: "201", type: "Single", floor: 2, rent: 1900 },
  { room: "202", type: "Double", floor: 2, rent: 2800 },
  { room: "203", type: "Suite", floor: 2, rent: 5600 },
  { room: "301", type: "Single", floor: 3, rent: 2100 },
  { room: "302", type: "Double", floor: 3, rent: 3100 },
  { room: "303", type: "Suite", floor: 3, rent: 6100 },
  { room: "401", type: "Single", floor: 4, rent: 2300 },
  { room: "402", type: "Double", floor: 4, rent: 3400 },
  { room: "403", type: "Suite", floor: 4, rent: 6800 }
])
```

## Expected output

1. **Terminal.** Run node index.js.  
   Expected: Connected to MongoDB, then Server running at http://localhost:3000
2. **Show all.** Click "Show All Rooms".  
   Expected: 12 rooms.
3. **Search.** Choose Suite and click Search.  
   Expected: 4 rooms: 103, 203, 303, 403.
4. **Filter.** Type 2700 in "Rent less than" and click Filter.  
   Expected: 5 rooms: 101, 102, 201, 301, 401.
5. **3 Costliest Rooms.** Click "3 Costliest Rooms".  
   Expected: 403 (6800), 303 (6100), 203 (5600), in this order.
6. **Add Room.** Fill the form with Room: 501, Type: Suite, Floor: 5, Rent: 7200. Click "Add Room".  
   Expected: The message "Room saved" appears and the list shows 13 rooms, including 501.
