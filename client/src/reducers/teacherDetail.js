
import { TeacherDetail, Loading } from '../actions/types';
const initialState = {
    teacher:'',
    loading:false
}

export default function(state= initialState, action) {
    switch (action.type) {

      case TeacherDetail:
        return {
          ...state,
          teacher:action.payload,
          loading: false
        };
      case Loading:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }
