import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <>
            <div className='w-full bg-[#4297A0] min-h-[10vh] flex items-center footer-wrapper relative'>
                <footer className='w-full px-[100px] flex items-center justify-between footer'>
                    <div>
                        <p className='text-[#F4EAE6] copy-right'>© 2025 All Rights Reserved Himanshu Kumar</p>
                    </div>

                    <div className=''>
                        <a href="https://github.com/himanshukumar-18">
                            <FontAwesomeIcon className='text-[26px] text-[#F4EAE6] icon' icon={faGithub} />
                        </a>

                        <a href="https://www.linkedin.com/in/himanshu-kumar-8b5845313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                            <FontAwesomeIcon className='text-[26px] text-[#F4EAE6] ml-5 icon' icon={faLinkedin} />
                        </a>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer