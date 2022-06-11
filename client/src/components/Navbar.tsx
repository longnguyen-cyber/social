import { SearchIcon } from '@heroicons/react/solid'
import { BiMessageRoundedDetail } from 'react-icons/bi'
import { BsBell } from 'react-icons/bs'
import { IoMdArrowDropdown } from 'react-icons/io'
import { Link, Outlet } from 'react-router-dom'
function Navbar() {
  const id = 3
  return (
    <div className="grid grid-cols-3 bg-cyan-400 py-2 px-4">
      <Link to="/">
        <h3 className="text-2xl font-medium text-white">Social</h3>
      </Link>
      <form className="bg-white rounded-3xl flex items-center p-2">
        <button type="submit">
          <SearchIcon className="h-6 mx-2" />
        </button>
        <input
          type="text"
          className="outline-none"
          placeholder="search here..."
        />
      </form>
      <div className="flex items-center space-x-2 ml-auto cursor-pointer">
        <div className="flex items-center space-x-2">
          <Link to={id.toString()}>
            <img
              src="https://source.unsplash.com/random"
              alt=""
              className="h-9 w-9 rounded-full"
            />
          </Link>
          <span className="font-semibold text-sm text-white cursor-text">
            kuga
          </span>
          <div className="group relative more">
            <IoMdArrowDropdown className="text-2xl" />
            <Link
              to="/login"
              className="logout"
              onClick={() => localStorage.removeItem('user')}
            >
              logout
            </Link>
          </div>
        </div>
        <BiMessageRoundedDetail className="h-10 mx-2 text-2xl" />
        <BsBell className="h-10 mx-2 text-2xl" />
        <Outlet />
      </div>
    </div>
  )
}

export default Navbar
