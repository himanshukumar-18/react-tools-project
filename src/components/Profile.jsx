import React, { useContext } from 'react'
import { UserContext } from '../Input'

const Profile = () => {

    const { user } = useContext(UserContext)

    if (!user) {
        return (
            <div className='text-[#F4EAE6] text-xl profile-enter'>
                <p>Please Enter User!!</p>
            </div>
        )
    }

    return (
        <>
            <div className='text-[#F4EAE6] text-xl profile-enter'>
                <p>Hello {user}</p>
            </div>
        </>
    )
}

export default Profile