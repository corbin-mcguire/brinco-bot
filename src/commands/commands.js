import { hackerNewsTopPosts } from "./hacker-news-top-posts.js";

export const commands = {
  [hackerNewsTopPosts.name]: hackerNewsTopPosts,
};

export const commandList = Object.values(commands).map((command) => command.getCommand());
