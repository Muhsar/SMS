import { GetBill, UpdateBill,Loading,AddBill,DeleteBill } from "../actions/types";
const initialState = {
    bill:[],
    loading:false,
    msg:'',
    error:''
}

export default function(state= initialState, action) {
    switch (action.type) {
      case GetBill:
        return {
          ...state,
          bill: action.payload,
          loading: false
        };

      case DeleteBill:
        return {
          ...state,
          bill: state.bill.filter(bill => bill._id !== action.payload),
          msg: action.msg
        };
      case AddBill:
        return {
          ...state,
          bill: [action.payload, ...state.bill],
          msg: action.msg,
          error:action.error
        };
      case UpdateBill:
        return{
          ...state,
          bill:[...action.payload],
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
