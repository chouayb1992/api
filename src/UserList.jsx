import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
    const [listOfUser, setListOfUser] = useState([]);
    const [loadUser, setLoadUser] = useState(true);

    async function  fetchData() {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(response);
      setListOfUser(response.data);
      setLoadUser(false)
      } catch (error) {
        console.log(error);
      }
    }
    
    useEffect(()=>{
   

fetchData();
}, []);


 return(

      
        <div>
            
          {
          loadUser ? (<h1>Loading.....</h1>) :
          listOfUser.map((user) => (
            <>
            <p key={user.id}>Name : {user.name}</p>
            <p>User Name : {user.username} </p>
            </>
          ))}
        </div>
    
 )
};

export default UserList;