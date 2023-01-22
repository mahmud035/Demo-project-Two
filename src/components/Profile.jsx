import React from 'react';
import profile from '../assets/images/profile.jpg';
import twitter from '../assets/images/twitter.png';
import linkedIn from '../assets/images/linkedIn.png';
import github from '../assets/images/github.png';

const Profile = () => {
  // #0072b1
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="container mx-auto px-5 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-0 p-8 sm:p-10 shadow-lg rounded-3xl bg-gray-100">
          {/* Image & Icon */}
          <div>
            <div className="w-44 h-44 mx-auto sm:w-40 sm:h-40 sm:mx-0 sm:mt-2 sm:ml-2 md:ml-6 md:mt-6 rounded-full outline outline-offset-2 outline-4 outline-blue">
              <img
                className="w-44 h-44 mx-auto sm:w-40 sm:h-40 sm:mx-0 object-cover object-center grayscale rounded-full "
                src={profile}
                alt=""
              />
            </div>
            <div className="w-40 mx-auto grid grid-cols-3 pt-8 sm:pt-9 sm:mx-0 md:ml-6">
              <img
                className="w-9 h-9 mx-auto object-cover object-center"
                src={twitter}
                alt=""
              />
              <img
                className="w-9 h-9 mx-auto object-cover object-center"
                src={linkedIn}
                alt=""
              />
              <img
                className="w-9 h-9 mx-auto object-cover object-center"
                src={github}
                alt=""
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:pt-8 sm:-ml-10 sm:mt-2 md:-ml-20 md:mt-6 lg:-ml-52">
            {/* Name & Bio */}
            <div className="text-center sm:text-left pb-6">
              <h1 className="font-extrabold text-[27px] text-blue">
                Krushna Ratnaprakhi
              </h1>
              <h3 className="font-medium text-lg text-slate-600 pt-1 pb-3">
                Venture Partner
              </h3>
              <p className="text-gray-500">Pune, Maharashtra, India</p>
            </div>

            <div className=" bg-gray-300 h-0.5" />

            {/* Bio  */}
            <div className="grid grid-cols-1 sm:grid-cols-2  py-7 text-center sm:text-left">
              <h3 className="font-medium text-lg text-slate-600 ">Bio</h3>
              <p className="text-gray-500 pt-2 sm:pt-0 sm:-ml-20 md:-ml-32 lg:-ml-64">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, ea? Aliquam deserunt sint molestias, quidem veniam
                laborum, iusto libero nisi corrupti reprehenderit quos, facere
                dolorem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
