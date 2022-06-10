import React from 'react'
import { AiOutlineBars } from 'react-icons/ai'
function Post() {
  return (
    <div className="px-6 py-4 mx-4 mt-8 bg-cyan-400 rounded-lg">
      <div className="flex justify-between">
        <div className="flex space-x-2">
          <a href="/">
            <img
              src="https://source.unsplash.com/random"
              alt=""
              className="h-12 w-12 rounded-full cursor-pointer"
            />
          </a>
          <div>
            <h5>name</h5>
            <span>time</span>
          </div>
        </div>
        <AiOutlineBars className="cursor-pointer" />
      </div>
      <div className="mt-4">
        <div className="content mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos repellat
          nam non temporibus possimus earum ab vero porro dicta ducimus. Iusto,
          soluta maxime voluptate architecto aliquid obcaecati ut inventore ea?
        </div>
        <div className="">
          <img
            src="https://source.unsplash.com/random"
            alt=""
            className="w-full object-contain max-h-fit"
          />
        </div>
      </div>
    </div>
  )
}

export default Post
