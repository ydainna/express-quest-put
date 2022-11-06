const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

const port = process.env.APP_PORT ?? 5000;

//------------------
//Path: routes
//------------------
//Path: movieHandlers.js
const movieHandlers = require("./routes/movieHandlers");
//Path: userHandlers.js
const userHandlers = require("./routes/userHandlers");
//Base route
const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};
app.get("/", welcome);
//------------------

//----------------
//Movie routes
//----------------
//GET all movies
app.get("/api/movies", movieHandlers.getMovies);
//GET movie by id
app.get("/api/movies/:id", movieHandlers.getMovieById);
//POST movie
app.post("/api/movies", movieHandlers.postMovie);
//PUT movie
app.put("/api/movies/:id", movieHandlers.updateMovie);
//----------------
//user routes
//----------------
//GET all users
app.get("/api/users", userHandlers.getUsers);
//get user by id
app.get("/api/users/:id", userHandlers.getUserById);
//POST user
app.post("/api/users", userHandlers.postUsers);
//PUT user
app.put("/api/users/:id", userHandlers.updateUser);
//----------------

//Listen to port
app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});