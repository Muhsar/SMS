
import { DeleteNews, GetNews, AddNews, UpdateNews, Loading } from '../actions/types';
const initialState = {
    news:[],
    loading:false,
    msg:''
}

export default function(state= initialState, action) {
    switch (action.type) {
      case GetNews:
        return {
          ...state,
          news: action.payload,
          loading: false
        };

      case DeleteNews:
        return {
          ...state,
          news: state.news.filter(student => student._id !== action.payload)
        };
      case AddNews:
        return {
          ...state,
          news: [action.payload, ...state.news],
          msg: action.msg
        };
      case UpdateNews:
        return{
          ...state,
          news:[...action.payload]
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
