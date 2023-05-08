import React, { useContext, useEffect,useState } from "react";
import { v4 as uuid} from "uuid";
import "./Home.css";
import { GlobalContext } from "../../context/GlobalState";

const Home = () => {
    const { setUsers } = useContext(GlobalContext);
    const [userInfo, setUserInfo] = useState({
        id:"",
        name:"",
        email:"",
        contact:"",
        age:"",
        jobRole: "",
    });
    useEffect(()=> {
        setUserInfo((currInfo)=>{
            return {
                ...currInfo,
                id: uuid(),
            };
        });
    },[]);
     const handleChange =(event) =>{
        const{name,value}  = event.target;
        setUserInfo((currInfo)=>{
            return {
                ...currInfo,
                [name]: value,
            };
        });
     }; 
     const addUser = () => {
        setUsers((currUsers) => [...currUsers, userInfo]);
        setUserInfo({
            id: uuid(),
            name:"",
            email:"",
            contact:"",
            age:"",
            jobRole: "",
        });
    };
     return (
    <div className="home">
        <div className="home__container">
            <div className="home__formContainer">
                <h1 className="home__title">Add User Information</h1>
                <input title="id"placeholder="Enter user's id"
                value={userInfo.id}
                disabled
                />
                <br/>
                 <input name="name" 
                 placeholder="Enter user's name"
                 value={userInfo.name}
                 onChange={handleChange}/>
                 <br/>
                 <input type="email"
                  name="email"
                  placeholder="Enter user's email"
                  value={userInfo.email}
                  onChange={handleChange}/>
                  <br/>
                  <input type="number"
                   name="contact"
                   placeholder="Enter user's contact no"
                   value={userInfo.contact}
                   onChange={handleChange}/>
                   <br/>
                   <input type="number"
                   name="age"
                   placeholder="Enter user's age"
                   value={userInfo.age}
                   onChange={handleChange}/>
                   <br/>
                   <input name="jobRole"
                   placeholder="Enter user's role"
                   value={userInfo.jobRole}
                   onChange={handleChange}/>
                   <br/> 
                   <button onClick={addUser}>Add User</button>
            </div>
        </div>
    </div>
  );
};

export default Home;