import React,{ useContext } from "react";
import { ToggleTheme } from "../App";
import NewUseState from "./NewUseState";


function UseContext(){
  const para = `He hid under the covers hoping that nobody would notice him there. It
   really didn't make much sense since it would be obvious to anyone who walked into the 
   room there was someone hiding there, but he still held out hope. He heard footsteps 
   coming down the hall and stop in front in front of the bedroom door. He heard the squeak 
   of the door hinges and someone opened the bedroom door. He held his breath waiting for whoever 
   was about to discover him, but they never did.`

  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme?"black":"grey",
    color:theme?"grey":"black",
    padding:"2rem",
    margin:"2rem"
  }

  return(
    <div style={themeStyle}>
      <NewUseState para={para}/>
    </div>
  )
}

export default UseContext;