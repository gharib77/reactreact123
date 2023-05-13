import { useSearchParams } from "react-router-dom"

const Users = () => {
  const [searchParams,setSearchParams]=useSearchParams()
  const showActiveUsers = searchParams.get('filter')=== 'active'
  console.log(searchParams)
  return (
    <div>
      <p>Userr 1</p>
      <p>Userr 2</p>
      <p>Userr 3</p>
      <p>Userr 4</p>
      <button onClick={()=>setSearchParams({filter:'active'})}>Acive Users</button>
      <button onClick={()=>setSearchParams({})}>Reset Users</button>
      {showActiveUsers?(<p>actice userrs</p>):(<p>all users</p>)}
    </div>
  )
}

export default Users
