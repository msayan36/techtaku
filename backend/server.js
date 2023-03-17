require("dotenv").config();

const express = require("express");
const mainRouter = require("./routes/main.route");
const cors = require("cors");
const connectDB = require("./config/db.config.js");

const app = express();
const PORT = process.env.PORT || 5000;

// Config for express server.
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", mainRouter);

app.get("/", async (req, res) =>
  res.send(`TechTaku API running successfully.`)
);

app.listen(PORT, async () => {
  console.log(`Server started at port ${PORT}`);
  await connectDB();
});
