import React from 'react'
import useCustomTransition from './customTransition';
import headshot from '../assets/headshot.jpg'

const AboutMePage = () => {
    useCustomTransition(".aboutMeLeft", [
        "transition",
        "duration-700",
        "transform",
        "translate-y-10",
      ]);
    useCustomTransition(".aboutMeRight", [
        "transition",
        "duration-500",
        "transform",
        "translate-y-10",
      ]);

  return (
    <div className="flex text-white justify-evenly flex-wrap">
      <div className="flex flex-col items-center max-w-screen-lg mt-36 sm:mt-40 md:mt-60 aboutMeLeft">
        <h1 className="text-5xl text-secondaryPink -z-10">About Me</h1>
        <div className="p-5 md:text-2xl text-xl shadow-lg rounded-lg opacity-90 bg-primaryPurple mt-10">
          <p className='p-2'>I have always been <span className='text-secondaryPink'>fascinated</span> by the <span className='text-secondaryPink'>dynamics</span> of the internet and its profound <span className='text-secondaryPink'>impact</span> on our technological interactions. This fascination <span className='text-secondaryPink'>propelled</span>  me through my <span className='text-secondaryPink'>previous career</span> as a mortgage professional, where the most exciting part of the job was <span className='text-secondaryPink'>mastering</span> various web applications and software that are <span className='text-secondaryPink'>critical</span> to the seamless lifecycle of mortgage loans.</p>
          <br></br>
          <p className='p-2'>Having recently <span className='text-secondaryPink'>graduated</span>  from the Coding Dojo <span className='text-secondaryPink'>Full Stack Software Engineering</span> program, I am now actively seeking opportunities to <span className='text-secondaryPink'>apply and refine</span> my front-end and full-stack skills. My goal is to craft <span className='text-secondaryPink'>exceptional web experiences</span> that not only meet but <span className='text-secondaryPink'>exceed</span> user expectations.</p>
        </div>
      </div>
      <div className="flex flex-col max-w-screen-md aboutMeRight mt-20 sm:mt-40 mb-60">
        <div className="p-10 shadow-lg rounded-lg opacity-90 bg-primaryPurple">
          <img src={headshot} alt="A headshot of Anthony A. Garcia" className='rounded shadow-lg opacity-70' />
        </div>
      </div>
    </div>
  )
}

export default AboutMePage