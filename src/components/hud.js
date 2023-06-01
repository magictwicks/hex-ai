import { Fragment } from "react"

export default function Hud({ showRules }){

  return(
  <Fragment>
    <h1 class="title">HEX</h1>
    <button onClick={showRules}>How To Play</button>
    <button>Reset Board</button>
  </Fragment>
    );
}
