import React from 'react'

function ProfileFriend() {
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
    },
    {
      id: 9,
      username: 'kuga',
      img: 'https://source.unsplash.com/random'
    }
  ]
  return (
    <div className="p-4 rounded-md shadow-2xl col-span-2">
      <div className="title flex justify-between my-4">
        <h3 className="font-semibold text-xl">
          Friends
          <p className="text-sm">{friends.length} friend's</p>
        </h3>
        <a href="/" className="no-underline text-xl">
          show all
        </a>
      </div>
      <div className="grid grid-cols-3">
        {friends.slice(0, 9).map((friend) => (
          <div className="pb-4">
            <img
              src={friend.img}
              alt=""
              key={friend.id}
              className="h-32 w-32 rounded-md cursor-pointer hover:opacity-75 p-1"
            />
            <span>{friend.username}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProfileFriend
