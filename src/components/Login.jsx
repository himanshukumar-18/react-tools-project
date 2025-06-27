import React, { useState, useContext } from 'react'
import { UserContext, GlobalInput, Button } from "../Input"


const Login = () => {

    const [username, setUsername] = useState("")

    const { setUser } = useContext(UserContext)

    const handler = (e) => {
        e.preventDefault();
        setUser(username)
    }

    return (
        <>
            <div className='flex gap-5 items-center'>
                <div>
                    <GlobalInput
                        type={"Text"}
                        value={username}
                        holder={"Enter Username..."}
                        chnage={(e) => setUsername(e.target.value)}
                        style={"outline-0 px-[20px] py-3 text-[#F4EAE6] bg-[#000] rounded-[50px] placeholder:text-[#F4EAE6] mob-user"}
                    />
                </div>

                <div>
                    <Button
                        className={"bg-[#2F5061] px-[20px] py-[10px] rounded-[50px] text-[#F4EAE6] text-[16px] hover:rounded-[0px] duration-200 active:scale-95 context-btn"}
                        title={"Submit"}
                        click={handler}
                    />
                </div>
            </div>
        </>
    )
}

export default Login