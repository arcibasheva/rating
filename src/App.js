import React from "react"
import Rating from "./Rating"
const R = require("ramda")
function App() {
    return <div>{R.repeat(<Rating/>, 3)}</div>
}
export default App