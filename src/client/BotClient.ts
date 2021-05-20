import { ClientOptions, Client as DiscordClient, Collection } from 'discord.js';
import { IBotClient } from '../typings/index'

export namespace Client {
  export interface BotClient extends IBotClient {}

  export class BotClient {
    constructor(options: ClientOptions) {
      this.client = new DiscordClient(options);
    }
  }
}
