
import {MOST_IMP_CONVERSION} from '../actions';

export default(state =[],action)=>{
  switch (action.type){
    case MOST_IMP_CONVERSION:
    return action.payload.data;
    default:
    return state;
  }

};
