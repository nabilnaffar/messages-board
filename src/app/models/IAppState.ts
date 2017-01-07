import {Message} from './IMessage';

export interface IAppState{
    selectedMessageId: number;
    messages:Message[]
}