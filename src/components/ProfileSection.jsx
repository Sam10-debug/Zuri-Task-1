import React from 'react'
import profile from '../images/Photograph.jpg'

const ProfileSection = () => {
  return (
	<header className="h-[192px] w-full flex justify-center flex-col items-center relative">
		<img src={profile} id="profile__img" alt="profile-picture" className='h-24 w-24 rounded-full' />
		<h4 className='twitter-text mt-4 font-bold text-[20px]' id='twitter'>Tech Broski</h4>
		<input type="hidden" name="samuel emorinken" id='slack' />

	</header>
  )
}

export default ProfileSection