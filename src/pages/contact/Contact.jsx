import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_xvjq2op";
    const templateId = "template_w2dco49";
    const publicKey = "9apvWZ9wzKPfCpjeD";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Aditya',
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response.status, response.text);
        setName('');
        setEmail('');
        setMessage('');
        alert('Email sent successfully🚀');
      })
      .catch((error) => {
        console.log("Error sending email", error);
      });
  }
  // style={{ backgroundImage: `url(${Background})` }}
  return (
    <div className='gradient__bg flex flex-col md:flex-row items-center justify-center h-screen' >
      <div className='md:w-1/2 py-20 order-2 md:order-1'>
        <p className='text-slate-400'>GET IN TOUCH</p>
        <h1 className='text-6xl font-bold mb-4 text-slate-200'>Contact<br/>Me</h1>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center  py-10 w-full md:w-3/4'>
          <label className='text-l text-slate-200'>Name</label>
          <input
            className='bg-slate-400 border-2 border-gray-400 rounded-md p-2 text-white'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className='text-l text-slate-200'>Email</label>
          <input
            className='bg-slate-400 border-2 border-gray-400 rounded-md p-2 '
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className='text-l text-slate-200'>Message</label>
          <textarea
            className='bg-slate-400 border-2 border-gray-400 rounded-md p-2 '
            cols='30'
            rows='10'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className='bg-slate-700 text-slate-200 rounded-md p-2 mt-4 hover:bg-black' type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact