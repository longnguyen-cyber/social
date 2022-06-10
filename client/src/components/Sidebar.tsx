import React from 'react'
import { MdGroup } from 'react-icons/md'
import { FaUserFriends, FaStore } from 'react-icons/fa'
import { BiMoviePlay } from 'react-icons/bi'
import { ImClock2 } from 'react-icons/im'
import { CgChevronDownO } from 'react-icons/cg'
function Sidebar() {
  return (
    <div className="col-span-2 p-2">
      <ul className="border-b border-black border-solid pb-6">
        <li className="w-full py-2 px-6 text-xl">
          <FaUserFriends className="mr-6 inline-block" />
          Friends
        </li>
        <li className="w-full py-2 px-6 text-xl">
          <MdGroup className="mr-6 inline-block" />
          Group
        </li>
        <li className="w-full py-2 px-6 text-xl">
          <FaStore className="mr-6 inline-block" />
          Marketplace
        </li>
        <li className="w-full py-2 px-6 text-xl">
          <BiMoviePlay className="mr-6 inline-block" />
          Watch
        </li>
        <li className="w-full py-2 px-6 text-xl">
          <ImClock2 className="mr-6 inline-block" />
          Memories
        </li>
        <li className="w-full py-2 px-6 text-xl">
          <CgChevronDownO className="mr-6 inline-block" />
          More
        </li>
      </ul>
      <ul className="">
        <h3>Shortcut</h3>
        <li className="w-full py-4 px-6 space-x-2">
          <img
            src="https://source.unsplash.com/random"
            alt=""
            className="h-9 w-9 rounded-md inline-block"
          />
          <span className="font-semibold text-xl cursor-text">kuga</span>
        </li>
        <li className="w-full py-4 px-6 space-x-2">
          <img
            src="https://source.unsplash.com/random"
            alt=""
            className="h-9 w-9 rounded-md inline-block"
          />
          <span className="font-semibold text-xl cursor-text">kuga</span>
        </li>
        <li className="w-full py-4 px-6 space-x-2">
          <img
            src="https://source.unsplash.com/random"
            alt=""
            className="h-9 w-9 rounded-md inline-block"
          />
          <span className="font-semibold text-xl cursor-text">kuga</span>
        </li>
        <li className="w-full py-2 px-6 text-xl">
          <CgChevronDownO className="mr-6 inline-block" />
          More
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
