export const submit=(name,userName)=>{
    console.log(name)
    return {
        type:"Submit",
        payload:{
            name:name,
            userName:userName,
        }
    }
}
export const edit=()=>{
    return {
        type:"Edit"
    }
}
export const deleteArr=()=>{
    return {
        type:"Delete"
    }
}