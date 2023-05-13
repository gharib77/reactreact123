import { useParams } from "react-router-dom"

const UserDetail = () => {
  const {userId,admin} = useParams()
  return (
    <div>
      <p>userDetrail {userId} may name is {admin}</p>
    </div>
  )
}

export default UserDetail
