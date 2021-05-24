import { ClientOptions, Client as DiscordClient, Collection } from 'discord.js';
import { CommandHandler } from '../index';

export namespace Client {
  /**
   * This is the primary interface for the botClient used to
   * store all that goodness you don't want on your main client
   *
   * @interface IBotClient
   */
  export interface IBotClient {
    client: DiscordClient;

    // TODO slash commands will be intergrated into commands with the intent to use one or the other depending of the purpose of the command.
    commands: Collection<string, CommandHandler.Command>;
    database: null;
    events: Collection<string, null>;
    logger: null;
  }

  export declare interface BotClient extends IBotClient {}

  /**
   * This is the class for the BotClient used to store all
   * that goodness you don't want on your main client
   * ```js
   * new Client.BotClient(options)
   * ```
   * @class BotClient
   */
  export class BotClient {
    /**
     * Creates an instance of BotClient.
     * @param {ClientOptions} options
     */
    constructor(options: ClientOptions) {
      this.client = new DiscordClient(options);
    }
  }
}
