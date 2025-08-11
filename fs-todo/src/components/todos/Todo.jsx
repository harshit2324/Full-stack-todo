import React from 'react'
import ChangeTodo from './ChangeTodo'

const Todo = ({todo}) => {
  return (
    <div className='w-10/12 mx-auto flex items-center justify-between bg-slate-900 py-4 px-20 rounded-2xl'>
      <ChangeTodo todo={todo}></ChangeTodo>
      <span className='text-center font-bold uppercase grow'>{todo.title}</span>
      <div className='flex items-center mx-2'></div>
      <div className='flex items-center'></div>
    </div>
  )
}

export default Todo