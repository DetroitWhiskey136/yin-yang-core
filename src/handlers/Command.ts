export namespace CommandHandler {

  /**
   * The Types of commands allowed in this wrapper...
   * UNKNOWN is internal
   */
  export enum CommandType {
    UNIVERSIAL,
    NORMAL,
    SLASH,
    UNKNOWN
  }

  /**
   * These are the default Categories supported to add more categories extend this enum
   */
  export enum CommandCategory {
    GENERAL,
    ADMIN,
    MODERATOR,
    MUSIC,
    FUN,
    IMAGES,
    SYSTEM,
    GIVEAWAYS,
    UTILITY,
    UNKNOWN
  }

  export type CommandOptions = {
    name: string,
    aliases?: string[],
    category?: CommandCategory,
    description: string,
    parameters?: string[],
    usage?: string,
    guildOnly?: boolean,
    ownerOn?: boolean,
    enabled?: boolean,
    type: CommandType
  }

  /**
   * sets data types for the Command class & can be expanded.
   *
   * @interface ICommand
   */
  export interface ICommand {
      options: CommandOptions;
      invoked(): unknown;
  }

  /**
   * This is the class you extend in your command allowing for ease of use.
   *
   * ```JS
   * class TestCommand extends Handler.Command {
   *   options = {
   *     name: 'test',
   *     description: 'This is a test command',
   *     type: Handler.CommandType.UNIVERSIAL
   *   }
   *
   *   invoked() {
   *     // your data here
   *   }
   * }
   * ```
   *
   * @class Command
   */
  export class Command implements ICommand {
    options = {
      name: '',
      description: '',
      type: CommandType.UNKNOWN
    };

    invoked() {
    }
  }
}
