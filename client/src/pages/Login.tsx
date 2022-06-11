import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const userDefault = {
  username: '',
  password: ''
}
function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleUserName = (e: {
    target: { value: React.SetStateAction<string> }
  }) => setUsername(e.target.value)
  const handlePassword = (e: {
    target: { value: React.SetStateAction<string> }
  }) => setPassword(e.target.value)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const user = {
      username,
      password
    }
    localStorage.setItem('user', JSON.stringify(user))
    navigate('/')
  }
  return (
    <div className="m-32 grid grid-cols-5">
      <div className="col-span-3 pl-48 pr-28">
        <h1 className="text-8xl font-medium text-blue-500 mb-6">Social</h1>
        <p className="text-3xl font-normal">
          Social helps you connect and share with the people in your life.
        </p>
      </div>
      <div
        className="col-span-2 w-96 rounded-lg"
        style={{ boxShadow: '0 0 15px #666' }}
      >
        <form
          className="p-4 flex flex-col inputLogin border-none space-y-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="inputLogin"
            placeholder="Email address or number phone"
            value={username}
            onChange={handleUserName}
          />
          <input
            type="text"
            className="inputLogin"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
          <button className="font-semibold text-white bg-blue-600 w-full py-2 text-2xl rounded-md">
            Log In
          </button>
        </form>
        <p className="text-blue-500 text-md text-center pb-4 tracking-wide">
          Forgotten password?
        </p>
        <hr />
        <Link to="/register">
          <button className="flex mx-auto bg-green-500 text-white py-2 px-4 m-4 rounded-md text-center">
            Create New Account
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Login
