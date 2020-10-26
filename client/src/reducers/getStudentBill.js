import {
GetStudentBill,
AddStudentBill,
Loading,
UpdateStudentBill,
PaidStudent,
DeleteStudentBill
} from '../actions/types'

const initialState = {
    studentBill:[],
    loading:false,
}

export default function(state= initialState, action) {
    switch (action.type) {
      case GetStudentBill:
        return {
          ...state,
          studentBill: action.payload,
          loading: false
        };
        case PaidStudent:
          return {
            ...state,
            studentBill: action.payload,
            loading: false
          };

      case AddStudentBill:
        return {
          ...state,
          studentBill: [action.payload, ...state.studentBill]
        };
      case UpdateStudentBill:
        return{
          ...state,
          studentBill: [action.payload]
        }
      case Loading:
        return {
          ...state,
          loading: true
        };
        case DeleteStudentBill:
          return {
            ...state,
            studentBill: state.studentBill.filter(bill => bill._id !== action.payload)
          };
      default:
        return state;
    }
  }
