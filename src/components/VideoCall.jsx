import { useRef } from "react"
// -------- creating Helper Function---------




export default function VideoCall(){
    const meetingRef = useRef(null);
    return (
        <div 
        ref={meetingRef}
        style={{width: "100vw" , height: "100vh"}}
        
        >


        </div>
    )
}