import {createContext,useEffect,useState} from "react";
export const Context=createContext();
const AppContext=({children})=>{
    const [name,setName]=useState("");
    const [userName,setUserName]=useState("");
    const [updateFlag,setUpdateFlag]=useState(false);
    return(
        <Context.Provider value={{
            name,setName,
            userName,setUserName,
            updateFlag,setUpdateFlag
        }}>
            {children}
        </Context.Provider>
    )
}
export default AppContext;