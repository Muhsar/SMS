import { Typing } from "../actions/types";
const initialState={
    name:'',
    id:''
}

export default function(state=initialState,action){
    switch(action.type){
        case Typing:
            return{
                ...state,
                name:action.name,
                id:action.id
            }
            default:
        return state
    }
}