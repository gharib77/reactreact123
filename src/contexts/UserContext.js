import { createContext, useReducer } from "react";
import reducer, { initialState } from "../reducer";

export const UserContext = createContext()

const UserProvider = (props)=>{
  const [state,dispatch]=useReducer(reducer,initialState)
  return(
  <UserContext.Provider value ={{state,dispatch}}>
    {props.children}
  </UserContext.Provider>
  )
}
export default UserProvider