import React,{ useState,useEffect,useContext } from "react";
import PopUp from "./PopUp";
import { Context } from "../context";
import { useSelector,useDispatch } from "react-redux";
const Home=()=>{
    const [showPopup,setShowPopup]=useState(false);
    const myState=useSelector((state)=>state.manageArray);
    const {setName,setUserName,setUpdateFlag}=useContext(Context);
    const dispatch=useDispatch();

    const handleEdit=(id,name,userName)=>{
        setShowPopup(true);
        setName(name);
        setUserName(userName);
        setUpdateFlag(true);
    }
    
    const handleDelete=(id)=>{
        console.log(id);
        dispatch({type:"Delete",payload:id});
    }
    useEffect(()=>{
        console.log(myState);
    })
    const style={
        border:"1px black solid",padding:"7px",
    }
  return (
    <>
       {showPopup && <PopUp setShowPopUp={setShowPopup} />}
       <div style={{textAlign:"center"}}>
            <button onClick={()=>setShowPopup(true)}>Add User</button>
            <table style={style}>
                <thead>
                    <tr>
                        <th style={style}>Name</th>
                        <th style={style}>UserName</th>
                        <th style={style}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myState.map((ele)=>{
                            return (<tr key={ele.id+"i"}>
                                <td style={style}>{ele.name}</td>
                                <td style={style}>{ele.userName}</td>
                                <td style={style}>
                                    <button onClick={()=>handleEdit(ele.id,ele.name,ele.userName)}>Edit</button>
                                    <button onClick={()=>handleDelete(ele.id)}>Delete</button>
                                </td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
       </div>
    </>
  )
}
export default Home;