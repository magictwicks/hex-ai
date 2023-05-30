import { useState } from "react";
import Modal from "./modal";
import Rules from "./rules";


export default function Hud({ showRules }){

  return(
  <div>
    <h1>HEX</h1>
    <button onClick={showRules}>Click here for rules</button>
  </div>
    );
}