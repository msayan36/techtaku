const express = require("express");
const techtakuRoutes = require("./routes/techtakuRoutes");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Config for express server.
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", techtakuRoutes);

app.get("/", async (req, res) =>
  res.send(`TechTaku API running successfully.`)
);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
