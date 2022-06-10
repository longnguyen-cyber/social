import React from 'react'
import Post from './Post'
import Share from './Share'

function Feed() {
  return (
    <div className="col-span-5 border-x border-solid border-gray-300">
      <Share />
      <Post />
    </div>
  )
}

export default Feed
