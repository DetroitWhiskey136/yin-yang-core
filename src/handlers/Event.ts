import {} from 'discord.js';

export namespace EventHandler {
  export enum EventTypes {
    DISCORD,
    NODE,
    UNKNOWN,
  }

  export type EventOptions = {
    name: string,
    enabled: boolean,
    type: EventTypes,
  }

  export interface IEvent {
    options: EventOptions;
    invoked(): any;
  }

  export class Event implements IEvent {
    options = {
      name: '',
      enabled: true,
      type: EventTypes.UNKNOWN,
    }

    invoked() {
    }
  }
}
