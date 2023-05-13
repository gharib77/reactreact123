import { UserContext } from "../contexts/UserContext"
import { useContext,useEffect } from "react"
import axios from "axios"
const Produit = () => {
  const {state,dispatch}=useContext(UserContext)
  const {users}=state
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
      dispatch({type:"FETCH_SUC",payload:response.data})
    })
    .catch(error=>{
      dispatch({type:"FETCH_ERR",payload:"erruerrr"})
    })
  },[dispatch])
  const handleAdd = ()=>{
    dispatch({type:"ADD_USER",payload:{id:14,name:"jouali",username:"gharib"}})
  }
  return (
    <>
      <p>tresbien</p>
      {state.isLoading ? "loadingg" : 
        users.map(user=>(
          <p key={user.id}>{user.username}</p>
        ))
      } 
      <button onClick={handleAdd}>AddUser</button>
    </>
  )
}

export default Produit
