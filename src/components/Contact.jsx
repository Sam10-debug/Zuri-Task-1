import React from 'react'

const Contact = () => {
  return (
	<section className="form">
		<h1 className=" font-semibold leading-[44px] text-[36px] tracking-[-0.02em] ">Contact Me</h1>
		<p className="">Hi there, contact me to ask me about anything you have in mind.</p>
		<form action="" className="">
			<div className="flex flex-col md:flex-row h-[150px] md:h-[60px] items-start">
				<div className="md:mr-4 my-2 md:my-0 w-full ">
					<label htmlFor="first_name">First Name</label>
					<input type="text" placeholder='Enter your first name' className='border-[1px] w-full border-black ' id="first_name" label="Enter your first name" />
				</div>
				<div className="md:ml-4 w-full flex-col my-2 md:my-0 ">
					<label htmlFor="last_name">Last Name</label>
					<input type="text" placeholder='Enter your first name' id="last_name" label="Enter your last name" className='border-[1px] w-full border-black' />
				</div>
			</div>
			<div className="h-[50px] flex flex-col justify-center">
				<label htmlFor="email">Email</label>
				<input type="email" className='border-[1px] border-black' name="" id='email' placeholder='yourname@email.com' />
			</div>
			<div className="flex my-4 md:my-0 flex-col justify-center">
				<label htmlFor="message">Message</label>
				<textarea name="" className='border-[1px] border-black' id="message" placeholder="send a message and i'll reply you as soon as possible..." cols="30" rows="10"></textarea>
			</div>
			<div className="">
				<input type="checkbox" className='border-[1px] border-black' name="" id="checkbox" />
				<label htmlFor="checkbox">You agree to providing your data to Samuel who may contact you</label>
			</div>
			<button className=" w-full bg-blue-600 text-white font-semibold py-2 rounded-lg my-2" id='btn__submit'>Send message</button>
		</form>
	</section>
  )
}

export default Contact