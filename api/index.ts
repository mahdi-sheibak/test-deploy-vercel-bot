// import { webhookCallback } from "grammy";
import express from "express";
// import { bot } from "./bot";

const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

// app.use(webhookCallback(bot, "express"));

app.listen(3000, () => {
  console.log("Server ready on port 3000.");
});

module.exports = app;
