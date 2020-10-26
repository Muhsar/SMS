
import { AddStudent, DeleteStudent, GetStudent, UpdateStudent, Loading } from '../actions/types';
const initialState = {
    students:[],
    loading:false,
    msg:''
}

export default function(state= initialState, action) {
    switch (action.type) {
      case GetStudent:
        return {
          ...state,
          students: action.payload,
          loading: false
        };

      case DeleteStudent:
        return {
          ...state,
          students: state.students.filter(student => student._id !== action.payload)
        };
      case AddStudent:
        return {
          ...state,
          students: [action.payload, ...state.students],
          msg: action.msg
        };
      case UpdateStudent:
        return{
          ...state,
          students:[...action.payload],
          msg:action.msg
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
