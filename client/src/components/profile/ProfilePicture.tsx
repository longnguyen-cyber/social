import React from 'react'
import { AiFillCamera } from 'react-icons/ai'

function ProfilePicture() {
  const friends = [
    {
      id: 1,
      username: 'kuga',
      img: 'https://source.unsplash.com/random',
      online: true
    },
    {
      id: 2,
      username: 'kuga',
      img: 'https://source.unsplash.com/random'
    },
    {
      id: 3,
      username: 'kuga',
      img: 'https://source.unsplash.com/random',
      time: '2 hours'
    },
    {
      id: 4,
      username: 'kuga',
      img: 'https://source.unsplash.com/random'
    },
    {
      id: 5,
      username: 'kuga',
      img: 'https://source.unsplash.com/random'
    },
    {
      id: 6,
      username: 'kuga',
      img: 'https://source.unsplash.com/random'
    },
    {
      id: 7,
      username: 'kuga',
      img: 'https://source.unsplash.com/random'
    },
    {
      id: 8,
      username: 'kuga',
      img: 'https://source.unsplash.com/random'
    }
  ]
  return (
    <>
      <div className="picture">
        <form className="relative">
          <img
            src="https://source.unsplash.com/random"
            alt=""
            className="max-h-96 w-screen rounded-b-md"
          />
          <label
            htmlFor="file"
            className="flex items-center cursor-pointer space-x-1 absolute bottom-0 right-0 p-2 text-white bg-gray-800 rounded-full mb-6 mr-6"
          >
            <AiFillCamera className="w-6 h-6" />
            <span className="font-semibold">Photo or Video</span>
            <input
              type="file"
              id="file"
              accept=".png, .jpeg, .jpg"
              className="hidden"
            />
          </label>
        </form>
        <div className="-mt-8 pb-8 mb-4 border-b border-solid border-gray-300">
          <div className="user flex items-center space-x-4">
            <form className="relative ml-9">
              <img
                src="https://source.unsplash.com/random"
                alt=""
                className="h-44 w-44 rounded-full"
              />
              <label
                htmlFor="file"
                className="flex items-center cursor-pointer space-x-1 absolute bottom-0 left-32 p-2 text-white bg-gray-800 rounded-full mb-2"
              >
                <AiFillCamera className="w-6 h-6" />
                <input
                  type="file"
                  id="file"
                  accept=".png, .jpeg, .jpg"
                  className="hidden"
                />
              </label>
            </form>
            <div>
              <h3 className="text-4xl font-bold">name</h3>
              <span className="font-semibold block">
                {friends.length} friends
              </span>
              {friends.slice(0, 6).map((friend) => (
                <img
                  src={friend.img}
                  alt=""
                  key={friend.id}
                  className="h-8 w-8 rounded-full cursor-pointer inline-block -mr-2"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfilePicture
