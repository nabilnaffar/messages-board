import {Message} from './IMessage';

export interface IAppState{
    username: string;
    selectedMessageId: number;
    messages:Message[]
}