import React from "react";
import Profile from "../assets/photo_2024-10-04_20-58-31.jpg";
const Hero: React.FC = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center pb-8 lg:mt-10">
            <img
              src={Profile}
              className="w-[350px]  border rounded-3xl border-stone-900"
              alt=""
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center mt-10 lg:items-start">
            <h2 className="pb-2 text-4xl tracking-tighter lg:tex-8xl ">
              Elham Gholizade Mahali
            </h2>
            <span className="text-3xl text-transparent bg-gradient-to-r from-stone-300 to-slate-600 bg-clip-text tracking-light">
              Junior frontend developer
            </span>
            <p className="max-w-lg py-6 my-2 text-xl leading-relaxed tracking-tighter">
              I am an enthusiastic and detail-oriented young developer with 2
              years of hands-on experience and skilled knowledge looking to use
              my technical and specialized skills to provide value to the client
              and contribute to successful projects today and in the future.
              Aiming to tackle new challenges and use coding and debugging
              skills to develop new features and improve the experience
            </p>
            <a className="p-4 mb-10 text-sm bg-white rounded-full text-stone-800">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
