import React from 'react'

function Rightbar() {
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
    <div>
      <h3 className="font-semibold text-2xl pt-4 pl-4">Friends</h3>
      <ul>
        {friends.map((friend) => (
          <li className="w-full py-4 px-6 space-x-2 relative" key={friend.id}>
            <img
              src={friend.img}
              alt=""
              className="h-9 w-9 rounded-full inline-block"
            />
            {friend.time && (
              <span className="time" style={{ marginLeft: '-1rem' }}>
                {friend.time}
              </span>
            )}
            {friend.online && <span className="online"></span>}
            <span className="font-semibold text-xl cursor-text">
              {friend.username}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Rightbar
