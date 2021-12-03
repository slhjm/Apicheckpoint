import React,{useEffect,useState} from "react";
import axios from "axios";
import UserCard from "./UserCard";


const UserList = () => {
  const [usersList,setUsersList] = useState ([])
  const getUsers = () => {
    axios 
    .get("https://jsonplaceholder.typicode.com/users") 
    .then((res)=> setUsersList(res.data)) 
    .catch((err) => console.log("error",err))
  }
  useEffect (() => {
    getUsers() 
  },[])

return (
  <div >
    {usersList.map((user)=> (
      <UserCard user={user} />
    ))}
  </div>
)


}
export default UserList