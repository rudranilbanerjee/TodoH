import React,{useState,useEffect,useContext} from "react";
import { useSelector,useDispatch } from "react-redux";
import { Context } from "../context";
import uuid4 from "uuid4";
// import {submit} from "../action/index";
const PopUp=({setShowPopUp})=>{
    const myState=useSelector((state)=>state.manageArray);
    let id=uuid4();
    console.log(myState);
    const dispatch=useDispatch();
    const {name,setName,userName,setUserName,updateFlag,setUpdateFlag,editingId}=useContext(Context);
    const [buttonFlag,setButtonFlag]=useState(true);
    useEffect(()=>{
        if(name && userName){
            setButtonFlag(false);
        }
    },[name,userName])
    return <div style={{width:"100%",height:"100vh",background:"black",opacity:"0.6",position:"absolute"
    ,top:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div className="popup-box" style={{height:"max-content",width:"500px",background:"white",padding:"20px"}}>
            <h1>Add New User</h1>
            <hr/>
            <label>Name</label>
            <input value={name} onChange={(event)=>{setName(event.target.value)}} />
            <br/>
            <label>UserName</label>
            <input value={userName} onChange={(event)=>{setUserName(event.target.value)}}/>
            <br/>
            <button disabled={buttonFlag} onClick={()=>{
                setShowPopUp(false);
                setName("");
                setUserName("");
                updateFlag?dispatch({type:"Edit",payload:{id:editingId,name,userName,setUpdateFlag}}):
                dispatch({type:"Submit",payload:{name:name,userName:userName,id:id}});
            }
                }>Submit
            </button>
            <button onClick={()=>setShowPopUp(false)}>Close</button>
        </div>
    </div>
}
export default PopUp;
