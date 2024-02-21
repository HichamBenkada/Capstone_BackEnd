const express =require("express");
const mongoose = require("mongoose");
const cors = require('cors')
require('dotenv').config();

//======= Server app:
const app = express();
const PORT = process.env.PORT || 5050;

/********* CORS:Cross-Origin Resource Sharing 
 * it is a security mechanizm that restrict the ability of web page to make a request to a different domain...
 * to access a server need authorization for permission
*/
app.use(cors())
// CROS to allow client requests
// app.use(
//   cors({
//     origin: 'http://localhost:5050/api/books',
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-type']
//   })) 

//======= importing Routes
const books = require ("./routes/books.js")
const users = require("./routes/users.js");
const comments = require("./routes/comments.js");
const seed = require("./routes/seed.js");


//======= parseIn Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//======= Custom Logger Middleware
app.use((req, res, next) => {
  const time = new Date();
  console.log(`-----
    ${time.toLocaleTimeString()}: A ${req.method} '${
    req.url
  }' request has been received.`);

  if (Object.keys(req.body).length > 0) {
    console.log("Containing the data:");
    console.log(`${JSON.stringify(req.body)}`);
  }
  next();
});

//======= Route redirection:
app.use("/seed", seed);
app.use("/api/books", books);
app.use("/api/users", users);
app.use("/api/comments", comments);

//DataBase seeding: http://localhost:5050/seed

//======= page not found:
app.use((req, res) => {
  res.status(404).send("Oops! Page Not Found");
});

//======= Connection to mongoDB
mongoose
  .connect(process.env.ATLAS_URI)
  .then(() => {
    console.log(`App is successfully connceted to "${mongoose.connection.name}" database`);
    //Run Server after connecting to DB
    app.listen(PORT, () =>
      console.log(`App is waiting for calls on port ${PORT}`)
    );
  })
  .catch((err) => console.error(err));
