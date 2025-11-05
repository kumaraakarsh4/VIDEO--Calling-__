import { BrowserRouter, Routes , Route } from "react-router-dom";
import Home from "./components/Home";
import VideoCall from "./components/VideoCall";

export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path = "/room" element={<VideoCall/>}/>
    </Routes>
    </BrowserRouter>
  )
}