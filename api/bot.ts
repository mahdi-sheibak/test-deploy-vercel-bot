import { Bot, webhookCallback } from "grammy";
import express from "express";

const token = process.env.TOKEN;
if (!token) throw new Error("TOKEN is unset");

const bot = new Bot(token);

bot.command("start", (ctx) => {
  console.log("start");
  ctx.reply("Welcome! Up and running.");
});

bot.on("message", (ctx) => {
  console.log("message");
  ctx.reply("Got another message!");
});

// bot
//   .start()
//   .then(() => {
//     console.log("bot started");
//   })
//   .catch((error) => {
//     console.log({ error });
//   });

const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});
app.get("/api", (req, res) => {
  res.send("/api Express on Vercel");
});
// app.get("/api/bot", (req, res) => res.send("/api Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

app.use(webhookCallback(bot, "express"));

module.exports = app;

// export default webhookCallback(bot, "std/http");
// export default webhookCallback(bot, "http");
// export default webhookCallback(bot, "express");
