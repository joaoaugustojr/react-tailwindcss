import React from 'react'

export const Header = () => {
  return (
    <div>
      <header className="flex fixed w-full text-base bg-gray-200">
        <div className="flex items-center justify-items-center h-16 px-5">
          <div className="">
            <span>conecta dev</span>
          </div>
          <div className="">
            <button className="">Novo Post</button>
            <span>span1</span>
            <span>span2</span>
          </div>
        </div>
      </header>
    </div>
  )
}
