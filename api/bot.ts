import { Bot, webhookCallback } from "grammy";

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

// export default webhookCallback(bot, "std/http");
export default webhookCallback(bot, "http");
