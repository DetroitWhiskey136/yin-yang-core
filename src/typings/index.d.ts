import { Collection, Client } from 'discord.js';
import { BotClient } from '../client/BotClient';

/**
 * This is the primary interface for the botClient used to
 * store all that goodness you don't want on your main client
 *
 * @interface IBotClient
 */
export interface IBotClient {
  aliases: Collection<string, string>;
  client: Client;

  // TODO slash commands will be intergrated into commands with the intent to use one or the other depending of the purpose of the command.
  commands: Collection<string, null>;
  database: null;
  events: Collection<string, null>;
  logger: null;
}
