const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "FitMe backend is running" });
});

app.get("/api/health", (req, res) => {
  res.json({ status: "OK", service: "FitMe API" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

