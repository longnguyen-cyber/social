import React from 'react'
import { FcStackOfPhotos } from 'react-icons/fc'
import { AiFillTag } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
function Share() {
  return (
    <div className="p-6 pt-0 shadow-xl mx-4 rounded-lg">
      <div className="shareTop flex space-x-2 py-6 w-full border-b border-solid border-gray-400">
        <img
          src="https://source.unsplash.com/random"
          alt=""
          className="h-12 w-12 rounded-full"
        />
        <input
          type="text"
          placeholder="what's in your mind..."
          className="w-full outline-none"
        />
      </div>
      <div className="shareBottom flex justify-between mt-3">
        <form className="flex space-x-4 py-2">
          <label
            htmlFor="file"
            className="flex items-center cursor-pointer space-x-1"
          >
            <FcStackOfPhotos className="w-6 h-6" />
            <span className="font-semibold">Photo or Video</span>
            <input
              type="file"
              id="file"
              accept=".png, .jpeg, .jpg"
              className="hidden"
            />
          </label>
          <label className="flex items-center cursor-pointer space-x-1">
            <AiFillTag className="w-4 h-4 text-blue-500" />
            <span className="font-semibold">Tag</span>
            <input type="text" className="hidden" />
          </label>
          <label className="flex items-center cursor-pointer space-x-1">
            <GoLocation className="w-4 h-4 text-red-600" />
            <span className="font-semibold">Location</span>
            <input type="text" className="hidden" />
          </label>
        </form>
        <button className="bg-green-500 rounded-md px-4 hover:bg-green-600 font-semibold text-white">
          Share
        </button>
      </div>
    </div>
  )
}

export default Share
