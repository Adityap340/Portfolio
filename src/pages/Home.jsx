import React from 'react';
import abstractPic from '../assets/dev.png';
import './Home.css';

const Home = () => {
  return (
    <div className='gradient__bg flex flex-col md:flex-row items-center justify-center h-screen'>
      <div className='md:w-1/2 text-center md:text-left md:pr-8 px-4 md:px-32'>
        <h2 className='font-semibold text-slate-400 hii'>Hi,</h2>
        <h1 className='text-5xl md:text-8xl font-bold mb-4 text-slate-200'>I'm<br/>Aditya Patil</h1>
        <p className='text-slate-400 sub-text'>
          A Versatile Full Stack Developer passionate about crafting web experiences.
        </p>
        <button className='bg-slate-200 rounded-md px-4 py-2 mt-4 text-slate-900 hover:bg-black hover:text-white'><a href='https://drive.google.com/file/d/1_1PTRID1quvcMmmpNpqugWDaus4ZOXU0/view?usp=sharing'>View my CV</a></button>
      </div>
      <div className='hidden sm:block md:w-1/2 relative'>
        <img
          className='rounded-lg w-full md:w-3/4 h-auto animated-image'
          src={abstractPic}
          alt='Hero'
        />
      </div>
    </div>
  );
};

export default Home;
