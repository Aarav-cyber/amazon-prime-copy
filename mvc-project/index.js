const express = require("express");
const connectDb = require("./Config/db");
const songRoute = require("./Routes/songRoute");

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDb();

app.use("/api/v1", songRoute);

app.get("/", (req, res) => {
  res.send("Song MVC server is running");
});

app.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});
