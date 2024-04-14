import React from 'react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({email:'', subject:'',message:''})
  const handleInputChange = (e)=>{
    setFormData({...formData, [e.target.name] : e.target.value} )
   }
  
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="text__para text-center mb-8 lg:mb-16 font-light">
          Got a technical issue? Want to send feedback about a beta feature? Let
          us know.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className='form__label'>Your Email</label>
            <input type="email" id='email' name='email' value={formData.email} onChange={handleInputChange} placeholder='example@gmail.com' className='form__input mt-1' />
          </div>
          <div>
            <label htmlFor="subject" className='form__label'>Subject</label>
            <input type="text" id='subject' name='subject'  value={formData.subject}  onChange={handleInputChange}  placeholder='Let us know how we can help you' className='form__input mt-1' />
          </div>
          <div className='md:col-span-2'>
            <label htmlFor="message" className='form__label'>Your Message</label>
            <textarea id='message' rows='6' name='message'  value={formData.message}  onChange={handleInputChange}  placeholder='Leave a comment...' className='form__input mt-1' />
          </div>
          <button className="btn rounded sm:w-fit">Send message</button>
          
        </form>
      </div>
    </section>
  );
}

export default Contact
