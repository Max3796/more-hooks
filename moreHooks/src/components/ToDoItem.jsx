import React from "react";

const ToDoItem= ({item:{data,isHidden},index,dispatch})=>{
  return(
    <div style={{
      backgroundColor:"yellow",
      width:"90vw",
      padding:"10px",
      display:"flex",
      flexDirection: "column",
      alignItems:"center",
      justifyContent:"center",
    }}>
<h3>{isHidden?"This Context is Hidden":data}</h3>
<button style={{width:"100px"}} onClick={()=>{
  dispatch({type:"Change",payload:index})
}
}>Toggle</button>
    </div>
  )
}

export default ToDoItem