import app from "./app.js";
import connectDB from "./config/db.js";


connectDB()

app.listen(process.env.PORT, () => {
  //starts the server, making it listen on port 4001.
  console.log(`Server is running on ${process.env.PORT}`);
});