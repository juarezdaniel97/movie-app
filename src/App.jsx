import { useEffect } from "react"
import Home from "./pages/Home"
import { ToastContainer } from "react-toastify"


function App() {


  return (
    <>
      <div>
            <Home/>
            <ToastContainer position="bottom-right"/>
      </div>
    </>
  )
}

export default App
