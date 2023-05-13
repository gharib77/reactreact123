export const initialState={
  isLoading:true,
  error:"",
  users:[],
};

const reducer = (state,action)=>{
  switch (action.type) {
    case "FETCH_SUC":
      return {isLoading:false,error:"",users:action.payload}
    case "ADD_USER":
      return {...state,users:[...state.users,action.payload]}
    case "FETCH_ERR":
      return {isLoading:false,error:action.payload,users:[]}
    default:
      return state
    
  }
}

export default reducer
