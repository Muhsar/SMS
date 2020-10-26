
import { Creche,
  KG1,
  KG2,
  NUR1,
  NUR2,
  Basic1,
  Basic2,
  Basic3,
  Basic4,
  Basic5,
  Basic6,
  Jss1,
  Jss2,
  Jss3,
  Sss1,
  Sss2,
  Sss3,
Loading } from '../actions/types';

const initialState = {
  creche:'',
  kg1:'',
  kg2:'',
  nur1:'',
  nur2:'',
  basic1:'',
  basic2:'',
  basic3:'',
  basic4:'',
  basic5:'',
  basic6:'',
  jss1:'',
  jss2:'',
  jss3:'',
  sss1:'',
  sss2:'',
  sss3:'',
  loading:false
}

export default function(state= initialState, action) {
    switch (action.type) {
      case Creche:
        return {
          ...state,
          creche: action.payload,
          loading: false
        }
      case NUR1:
        return {
          ...state,
          nur1: action.payload,
          loading: false
        }
      case NUR2:
        return {
          ...state,
          nur2: action.payload,
          loading: false
        }
      case KG1:
        return {
          ...state,
          kg1: action.payload,
          loading: false
        }
      case KG2:
        return {
          ...state,
          kg2: action.payload,
          loading: false
        }
      case Basic1:
        return {
          ...state,
          basic1: action.payload,
          loading: false
        }
      case Basic2:
        return {
          ...state,
          basic2: action.payload,
          loading: false
        }
      case Basic3:
        return {
          ...state,
          basic3: action.payload,
          loading: false
        }
      case Basic4:
        return {
          ...state,
          basic4: action.payload,
          loading: false
        }
      case Basic5:
        return {
          ...state,
          basic5: action.payload,
          loading: false
        }
      case Basic6:
        return {
          ...state,
          basic6: action.payload,
          loading: false
        }
      case Jss1:
        return {
          ...state,
          jss1: action.payload,
          loading: false
        }
      case Jss2:
        return {
          ...state,
          jss2: action.payload,
          loading: false
        }
      case Jss3:
        return {
          ...state,
          jss3: action.payload,
          loading: false
        }
      case Sss1:
        return {
          ...state,
          sss1: action.payload,
          loading: false
        }
      case Sss2:
        return {
          ...state,
          sss2: action.payload,
          loading: false
        }
      case Sss3:
        return {
          ...state,
                  sss3: action.payload,
                  loading: false
                  };                                                                                                                                                                                                            case Loading:
  
      case Loading:
      return {
        ...state,
        loading: true
      };
      default:
        return state;
    }
  }
