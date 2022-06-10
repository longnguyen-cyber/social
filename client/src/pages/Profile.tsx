import Navbar from '../components/Navbar'
import Post from '../components/Post'
import ProfileDetails from '../components/profile/ProfileDetails'
import ProfileFriend from '../components/profile/ProfileFriend'
import ProfileImage from '../components/profile/ProfileImage'
import ProfilePicture from '../components/profile/ProfilePicture'
import Share from '../components/Share'

function Profile() {
  return (
    <>
      <Navbar />
      <div className="mx-56 border-b border-gray-400 border-solid pb-10">
        <ProfilePicture />
        <div className="content grid grid-cols-6">
          <div className="col-span-2">
            <ProfileDetails />
            <ProfileImage />
            <ProfileFriend />
          </div>
          <div className="col-span-4">
            <Share />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
