import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Home(){
    const [userName , setUserName] = useState('');
    const navigate = useNavigate();
    const handleCreateRoom =()=>{
        if(userName.trim()){
            const roomID = Math.random().toString(36).substring(2,8).toUpperCase();
            navigate(`/room?roomID=${roomID}&userName=${userName}`);
        }
    }
    return(
        <div>
            <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} placeholder="Enter Your Name" />
            <button
            onClick={handleCreateRoom}
            disabled={!userName.trim()}
            
            >
                Create Room
            </button>
        </div>
    )
}