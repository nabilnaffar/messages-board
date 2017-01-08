import {MessagesActions, AppActions} from '../actions';
import {IAppState} from '../models/IAppState';

export const INITIAL_STATE:IAppState = {
    username: null,
    selectedMessageId: 0,
    messages: []
}

export function rootReducer(state:IAppState = INITIAL_STATE, action:{type:string, payload: any}){
    switch (action.type) {
        case MessagesActions.ADD_MESSAGE:
            action.payload.id = state.messages.length;//ID
            let messages = [].concat(state.messages, action.payload);  
            return Object.assign({}, state, {messages: messages});

        case MessagesActions.SELECT_MESSAGE:
            let updatedMessages = [].concat(state.messages);
            updatedMessages.forEach(message => {
                if(message.id === action.payload){
                    message.isRead = true;
            }});
            return Object.assign({}, state, {selectedMessageId: action.payload, messages: updatedMessages});

        case MessagesActions.DELETE_MESSAGE:
            let filteredMessages = state.messages.filter(message => message.id !== action.payload);  
            return Object.assign({}, state, {messages: filteredMessages});
            
        default:
            return state;
    }
}