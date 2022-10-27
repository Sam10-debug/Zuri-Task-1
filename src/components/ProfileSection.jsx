import React from 'react'
import profile from '../images/Photograph.jpg'

const ProfileSection = () => {
	//profile picture with id profile__img
	//Your twitter username with an id ‘twitter’
	//Your slack name with an id ‘slack’ - but this should be hidden (available in code, but cannot be seen)
  return (
	<header className="h-[192px] w-full flex justify-center flex-col items-center relative">
		<img src={profile} id="profile__img" alt="profile-picture" className='h-24 w-24 rounded-full' />
		<h4 className='twitter-text mt-4 font-bold text-[20px]' id='twitter'>Tech Broski</h4>
		<input type="hidden" name="samuel emorinken" id='slack' />

	</header>
  )
}

export default ProfileSection