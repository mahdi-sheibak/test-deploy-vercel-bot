import { Bot } from "grammy";

const token = process.env.TOKEN ?? "";

console.log({ token });

const bot = new Bot(token);

bot.command("start", (ctx) => {
  console.log("start");
  ctx.reply("Welcome! Up and running.");
});

bot.on("message", (ctx) => {
  console.log("message");
  ctx.reply("Got another message!");
});

bot
  .start()
  .then(() => {
    console.log("bot started");
  })
  .catch((error) => {
    console.log({ error });
  });
