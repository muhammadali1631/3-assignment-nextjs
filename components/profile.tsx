import React from 'react'
import Pic from "../public/profile.jpeg";
import Image from 'next/image';

const Profile = () => {
  return (
    <div>
    <div className="flex justify-between items-center h-[80vh] text-white">
        <div><h1 className="w-fit px-20 py-6 text-6xl font-black">
          Hey,
          <br />
          My Name is <span className="text-[#433878]">Ali</span>
        </h1>
        <p className="px-20 text-3xl font-black">
        Passionate web developer with expertise in <br /> HTML, CSS, JavaScript, and TypeScript.
        </p>
        </div>
        <div className="pr-16">
          <Image className="h-96 w-96 rounded-full" src={Pic} alt="Profile"/>
        </div>
      </div>
      </div>
  )
}

export default Profile