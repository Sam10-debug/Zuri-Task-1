
import Footer from './Footer'
import LinkSection from './LinkSection'
import ProfileSection from './ProfileSection'

const MainSection = () => {
  return (
	<section className="w-[90%]  ">
		<ProfileSection />
		<LinkSection />
		<Footer />
	</section>
  )
}

export default MainSection