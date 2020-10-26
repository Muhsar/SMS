import { GetChat, DeleteChat, AddChat, UpdateChat, Loading } from '../actions/types';
const initialState = {
    chats:[],
    loading:false
}
export default function(state= initialState, action) {
    switch (action.type) {
      case GetChat:
        return {
          ...state,
          chats: action.payload,
          loading: false
        };

      case DeleteChat:
        return {
          ...state,
          chats: state.chats.filter(student => student._id !== action.payload)
        };
      case AddChat:
      return {
              ...state,
              chats: state.chats.concat(action.payload)
              // chats: [action.payload, ...state.chats]
            };
      case UpdateChat:
        return{
          ...state,
          chats:[action.payload]
        }
      case Loading:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }
