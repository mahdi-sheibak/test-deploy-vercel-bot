import { Bot } from "grammy";

const token = process.env.TELEGRAM_BOT_TOKEN;
if (!token) throw new Error("TELEGRAM_BOT_TOKEN is unset");

const bot = new Bot(token);

// bot.command("start", (ctx) => {
//   console.log("start");
//   ctx.reply("Welcome! Up and running.");
// });

// bot.on("message", (ctx) => {
//   console.log("message");
//   ctx.reply("Got another message!");
// });

bot.on("message:text", async (ctx) => {
  console.log("Message: ", ctx.message.text);
  const response = "Hello, I'm a bot!";
  await ctx.reply(response);
});

bot.start();
