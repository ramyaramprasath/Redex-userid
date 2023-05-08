import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Link } from "react-router-dom";
import User from "../../components/User/User";

const Users = () => {
  
  const { users,setUsers } = useContext(GlobalContext);

  const deleteUser = (id) => {
    setUsers((currUsers)=>{
      return currUsers.filter((user)=>user.id!==id)
    }) 
  }
  
  return <div className="Users">
    <h1 className="users__title"></h1>
    <div className="users__container">
      {users.length === 0 ? (
        <div className="users__empty">
          <h1>No users found. Please add some.</h1>
          <h3>
            <Link to = "/">Add Users</Link>
          </h3>
        </div>
      ) : (
        users.map((user) => (
           <User
            key={user.id}
            id={user.id}
            name={user.name}
            jobRole={user.jobRole}
            age={user.age}
            contact={user.contact}
            email={user.email}
            deleteUser={() => deleteUser(user.id)}
            />
       ))
      )}
      </div>    
  </div>;
};

export default Users;