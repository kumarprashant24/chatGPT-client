import React from 'react'

export default function Action({inputRef,handleClick}) {
  return (
    <div className='p-2'>
   <div className=" d-flex bot-chat rounded">
    <input
      type="text"
      autocomplete="off"
      class="w-100 p-2 rounded bot-chat text-dark   border-0"
      id="exampleFormControlInput1"
      placeholder="Ask something..."
      ref={inputRef}
    />
    <div
      className="d-flex align-items-center send-btn   justify-content-center p-3"
      style={{cursor:"pointer"}}
      onClick={handleClick}
    >
      <i className="fa-solid fa-paper-plane  text-white"></i>
    </div>
  </div>
    </div>
 
  )
}
