import React from 'react'
import profile from '../images/profile__img.png'

const ProfileSection = () => {
  return (
	<header className="h-[192px] w-full flex justify-center flex-col items-center">
		<img src={profile} id="profile__img" alt="profile-picture" />
		<h4 className='twitter-text mt-4 font-bold text-[20px]'>Annete Black</h4>
	</header>
  )
}

export default ProfileSection