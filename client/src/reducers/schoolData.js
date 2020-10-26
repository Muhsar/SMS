
import { DeleteSchool, Loading, OwnerDetail, UpdateSchool } from '../actions/types';

const initialState = {
    school:'',
    loading:false,
    msg:'',
    error:''
}

export default function(state= initialState, action) {
    switch (action.type) {
      case OwnerDetail:
        return {
          ...state,
          school: action.payload,
          loading: false
        };
        case UpdateSchool:
          return{
            ...state,
            school:action.payload,
            msg:action.msg,
            error:action.error
          };
          case DeleteSchool:
            return{
              ...state,
              school: action.userReturn===true ? action.payload : null,
              msg:action.msg,
              error:action.error
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
