import { useState } from "react";

function Hero(){
    const [user, setUser] = useState()
    console.log({user})

    const handelLogin = () => {
        setUser({firstName: 'Corwin', email: 'corwin@yahoo.com', admin: true})
    }

    const handelLogOut = ()=> {
        setUser()
    }
   
    if(!user){ //if no user 
        return <button onClick={handelLogin}>Login</button>
    }
return(
    <> 
    <h1>Hello {user.firstName}!</h1>
    <button onClick={handelLogOut}> Log Out</button>
    </>
    )
}


export default Hero