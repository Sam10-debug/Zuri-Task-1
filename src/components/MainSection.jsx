import React from 'react'
import LinkSection from './LinkSection'
import ProfileSection from './ProfileSection'

const MainSection = () => {
  return (
	<section className="w-[90%]  ">
		<ProfileSection />
		<LinkSection />
	</section>
  )
}

export default MainSection