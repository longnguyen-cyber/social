import React from 'react'
import { AiFillQuestionCircle } from 'react-icons/ai'
function Register() {
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31
  ]
  const months = [
    {
      id: 1,
      name: 'January'
    },
    {
      id: 2,
      name: 'February'
    },
    {
      id: 3,
      name: 'March'
    },
    {
      id: 4,
      name: 'April'
    },
    {
      id: 5,
      name: 'May'
    },
    {
      id: 6,
      name: 'June'
    },
    {
      id: 7,
      name: 'July'
    },
    {
      id: 8,
      name: 'August'
    },
    {
      id: 9,
      name: 'September'
    },

    {
      id: 10,
      name: 'October'
    },
    {
      id: 11,

      name: 'November'
    },
    {
      id: 12,
      name: 'December'
    }
  ]
  const years = []
  for (let index = 2022; index >= 1905; index--) {
    years.push(index)
  }
  return (
    <div className="m-24 mb-0 grid grid-cols-5">
      <div className="col-span-3 pl-48 pr-28 mt-8">
        <h1 className="text-8xl font-medium text-blue-500 mb-6">Social</h1>
        <p className="text-3xl font-normal">
          Social helps you connect and share with the people in your life.
        </p>
      </div>
      <div
        className="col-span-2 w-96 rounded-lg"
        style={{ boxShadow: '0 0 15px #666' }}
      >
        <form className="p-4 flex flex-col input border-none space-y-2">
          <div className="grid grid-cols-2 space-x-2">
            <input
              type="text"
              className="inputRegister"
              placeholder="First Name"
            />
            <input
              type="text"
              className="inputRegister"
              placeholder="Last Name"
            />
          </div>
          <input
            type="text"
            className="inputRegister"
            placeholder="Mobile number or email address"
          />
          <input
            type="text"
            className="inputRegister"
            placeholder="New password"
          />
          <div>
            <label className="flex items-center">
              Date of birth <AiFillQuestionCircle />
            </label>
            <div className="grid grid-cols-3 space-x-2">
              <select className="inputRegister" id="">
                {days.map((day) => (
                  <option value={day}>{day}</option>
                ))}
              </select>
              <select className="inputRegister" id="">
                {months.map((month) => (
                  <option value={month.id}>{month.name}</option>
                ))}
              </select>
              <select className="inputRegister" id="">
                {years.map((year) => (
                  <option value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="flex items-center">
              Gender <AiFillQuestionCircle />
            </label>
            <div className="grid grid-cols-3 space-x-2">
              <label
                htmlFor="female"
                className="flex items-center inputRegister justify-between cursor-pointer"
              >
                Female
                <input type="radio" name="radio" id="female" />
              </label>
              <label
                htmlFor="male"
                className="flex items-center inputRegister justify-between cursor-pointer"
              >
                Male
                <input type="radio" name="radio" id="male" />
              </label>
              <label
                htmlFor="custom"
                className="flex items-center inputRegister justify-between cursor-pointer"
              >
                Custom
                <input type="radio" name="radio" id="custom" />
              </label>
            </div>
          </div>
          <p className="text-xss">
            People who use our service may have uploaded your contact
            information to Facebook. <a href="/">Learn more.</a>
          </p>
          <p className="text-xss">
            By clicking Sign Up, you agree to our Terms, Data Policy and Cookie
            Policy. You may receive SMS notifications from us and can opt out at
            any time.
          </p>
          <button className="font-semibold text-white bg-blue-600 w-full py-2 text-2xl rounded-md">
            Sign Up
          </button>
        </form>
        <hr />
        <button className="flex mx-auto bg-green-500 text-white py-2 px-4 m-4 rounded-md text-center">
          Sign in
        </button>
      </div>
    </div>
  )
}

export default Register
