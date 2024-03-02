import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Nishant Chauhan, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I'm a very ambitious front-end developer looking for a role in an
              established IT company with the opportunity to work with the latest
              technologies on challenging and diverse projects.
              <br />
              I'm quiet confident, naturally curious, and perpetually working on
              improving my chops one design problem at a time.
              <br />
              If I need to define myself in one sentence that would be a confident 
            person, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
              </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;