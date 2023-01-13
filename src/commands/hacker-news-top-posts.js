import { SlashCommandBuilder } from "discord.js";
import { Command } from "../models/Command.js";

const command = new SlashCommandBuilder()
  .setName("topposts")
  .setDescription("Fetches the top posts from HackerNews")
  .addIntegerOption((option) =>
    option.setName("num_posts").setDescription("Number of posts to fetch").setMinValue(1).setRequired(false)
  )
  .toJSON();

const commandHandler = (interaction) => {
  interaction.reply("Hello, World!");
};

export const hackerNewsTopPosts = new Command("topposts", command, commandHandler);
