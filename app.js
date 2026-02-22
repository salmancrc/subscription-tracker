import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the Subscription Tracker API!");
});

app.listen(PORT, () => {
  console.log(`Subscription Tracker API is running on http://localhost:${PORT}`);
});

export default app;