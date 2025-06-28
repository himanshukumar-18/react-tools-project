import React from 'react'
import { Counter, Context, Todo, RandomColor } from '../../Input'

const Project = () => {


  return (
    <div className="project w-full min-h-[82vh] relative">
      <div className='px-[100px] py-[50px] project-wrapper'>
        <div className='flex gap-20 deff-project'>
          <Counter />
          <Context />
          <Todo />
          <RandomColor />
        </div>
      </div>
    </div>
  )
}

export default Project