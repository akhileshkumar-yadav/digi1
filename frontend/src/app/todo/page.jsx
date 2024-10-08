'use client'
import React, { useState } from 'react'

const Todo = () => {
  const [todoList,setTodoList] = useState([])
  const addNewTodo = (e) => {
    if((e.code ==='Enter') && e.target.value.trim() != '') {
      setTodoList([...todoList , e.target.value])
      console.log(todoList);
      e.target.value = ''
    }
  }
  const removeTodo = (index) => {
    console.log(index);
    const temp = todoList
    temp.splice(index,1)
    setTodoList([...temp])
    
  }
  return (
    <div className='h-screen flex items-center flex-col'>
        <h1 className='text-4xl font-bold mb-8 mt-1'>My Todo List</h1>
        <div className='w-full md:w-1/2'>
          <input type="text" className='w-full border rounded-lg shadow-md p-3 mb-4  placeholder-gray-500' placeholder='add a new  task and press enter'
          onKeyDown={addNewTodo}/>
        </div>
        <div className=' w-full md:w-1/2 bg-yellow-200 shadow-lg rounded-lg p-8'>
          {(todoList.length === 0) ? (
            <p className='text-center text-xl font-semibold md:w-1/2 bg-yellow-200 text-red-400'>No Tasks yet. add your first task</p>
          ):(
            todoList.map((todo ,index ) => (
              <div key={index} className='flex justify-between items-center mb-3 p-2 rounded-lg bg-pink-300'>
                  <h5 className='text-lg font-semibold text-gray-800'>{todo}</h5>
                  <button onClick={ () =>{removeTodo(index)}} className='ml-4 text-lg text-gray-800 hover:text-red-700 py-1 px-3 rounded bg-red-500'>
                    Delete
                  </button>
              </div>
            ))
          )}
        </div>
    </div>
  )
}

export default Todo

