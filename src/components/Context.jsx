import React from 'react'
import { Login, Profile, UserContextProvider } from "../Input"

const UserContext = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center w-fit bg-[#ffffff32] backdrop-blur-[10px] rounded-sm px-[20px] py-[40px] context-wrapper'>
      <UserContextProvider>
        <div>
          <div>
            <Profile />
          </div>

          <div className='mt-10'>
            <Login />
          </div>
        </div>
      </UserContextProvider>
    </div>
  )
}

export default UserContext