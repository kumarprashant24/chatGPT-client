import React from 'react'

export default function Action({inputRef,handleClick}) {
  return (
    <div className="p-3  d-flex  position-relative">
    <input
      type="text"
      autocomplete="off"
      class="w-100 p-2 text-white bot-chat rounded  border-0"
      id="exampleFormControlInput1"
      placeholder="Write something..."
      ref={inputRef}
    />
    <div
      className="d-flex align-items-center"
      onClick={handleClick}
    >
      <i className="fa-solid fa-paper-plane text-white position-absolute end-0 me-4"></i>
    </div>
  </div>
  )
}
