import { GetTeacher, UpdateTeacher, DeleteTeacher, AddTeacher, Loading } from "../actions/types";

const initialState = {
    teachers:[],
    loading:false,
    msg:'',
    error:''
}

export default function(state= initialState, action) {
    switch (action.type) {
      case GetTeacher:
        return {
          ...state,
          teachers: action.payload,
          loading: false
        };

      case DeleteTeacher:
        return {
          ...state,
          teachers: state.teachers.filter(teacher => teacher._id !== action.payload)
        };
      case AddTeacher:
        return {
          ...state,
          teachers:action.all!==null ? [...action.all] : [action.payload, ...state.teachers],
          msg: action.msg,
          error:action.error
        };
      case UpdateTeacher:
        return{
          ...state,
          teachers:[...action.payload],
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
