import React, { useEffect, useState } from 'react'

const Home = () => {

  const [hello, setHello] = useState("")
  const [myself, setMyself] = useState("")
  const [skill, setSkill] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      setHello("Hello")
    }, 1000)

    const timer2 = setTimeout(() => {
      setMyself("My Slef Himanshu Kumar")
    }, 2000)

    const timer3 = setTimeout(() => {
      setSkill("I'am Full Stack Developer")
    }, 3000)

    return () => clearTimeout(timer, timer2, timer3)
  }, [])

  return (
    <div className='text-[#fff] w-full h-[82vh] home relative flex items-center home-wrapper'>
      <div className='w-full px-[100px] home-container'>
        <h1 className='text-[48px] text-[#F4EAE6] font-[500] duration-200'>{hello}</h1>
        <h1 className='text-[48px] text-[#F4EAE6] font-[500]'>{myself}</h1>
        <h1 className='text-[48px] text-[#F4EAE6] font-[500]'>{skill}</h1>
      </div>
    </div>
  )
}

export default Home