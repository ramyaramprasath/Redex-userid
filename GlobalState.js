import React, {createContext, useState} from "react";

export const GlobalContext = createContext();

// const initialState = {
//     users: [],
// };

export const GlobalProvider = ({children})=>{
const [users, setUsers] = useState([]);

    return (
    <GlobalContext.Provider
    value={{
        users,
        setUsers,
    }}>
        {children}
    </GlobalContext.Provider>
    );
};