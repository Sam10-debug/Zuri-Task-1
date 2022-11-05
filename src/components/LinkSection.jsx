import { Link } from "react-router-dom"


const LinkSection = () => {
	//this section should contain anchor tags wit links set in the href redirecting to other sites 
	// i used an unordereed list to display the list of anchor tags and styled thhem as buttons 

  return (
	<section className="">
		<ul className="w-full list-none ">
			<li className="h-[76px] flex justify-center rounded-md items-center links bg-gray-200 text-gray-900 font-semibold"><a href="https://twitter.com/Emor__Musk">Twitter Link</a></li>
			<li id='btn__zuri' className="h-[76px] flex my-4 rounded-md justify-center items-center links bg-gray-200 text-gray-900 font-semibold"><a href="https://training.zuri.team/">Zuri Team</a></li>
			<li id='books' className="h-[76px] flex my-4 rounded-md justify-center items-center links bg-gray-200 text-gray-900 font-semibold"><a href=" http://books.zuri.team">Zuri Books</a></li>
			<li id='book__python' className="h-[76px] flex my-4 rounded-md justify-center items-center links bg-gray-200 text-gray-900 font-semibold"><a href="https://books.zuri.team">Python Books</a></li>
			<li id='pitch' className="h-[76px] flex my-4 rounded-md justify-center items-center links bg-gray-200 text-gray-900 font-semibold"><a href=" https://background.zuri.team">Background Check for Coders</a></li>
			<li id='book__design' className="h-[76px] flex rounded-md my-4  justify-center items-center links bg-gray-200 text-gray-900 font-semibold"><a href="https://books.zuri.team/design-rules">Design Books</a></li>
			<Link to="/contact"><li id='contact' className="h-[76px] flex rounded-md justify-center items-center links bg-gray-200 text-gray-900 font-semibold">Contact Me</li></Link>
		</ul>
	</section>
  )
}

export default LinkSection