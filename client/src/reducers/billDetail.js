
import { BillDetail, ClassBill, Loading } from '../actions/types';

const initialState = {
    classBill:'',
    loading:false
}

export default function(state= initialState, action) {
    switch (action.type) {

      case BillDetail:
        return {
          ...state,
          classBill:action.payload,
          loading: false
        };
        case ClassBill:
          return {
            ...state,
            classBill:action.payload,
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
