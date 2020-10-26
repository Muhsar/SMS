import React from 'react'
import io from 'socket.io-client'
import jwt_decode from 'jwt-decode'
import 'react-toastify/dist/ReactToastify.css'
export const ptfNotifications=()=>{

            const server = 'http://localhost:5000'
            // const decode = jwt_decode(localStorage.token)
            // const ID = decode.school_id
            
          const socket = io(server);
          socket.on("Output PTF", msg => {
          
        //   if(decode._id !== msg.sender_id){
        //   toast.info(<Message msg={msg}/>,{
        //     position: toast.POSITION.TOP_RIGHT,
        //     autoClose: 10000
        //   })
        //   }
          })
}