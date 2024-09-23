import React from "react";

const HomeVideo = () => {
  return (
    <div className="relative w-full h-[620px]">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="assets/videos/homeRing.mp4" 
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay Content */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-12 flex flex-col justify-center items-center  bg-opacity-50 text-white">
        <div className="flex flex-col p-4 pt-0">
          <button className="px-8 py-2 bg-black text-white rounded hover:bg-gray-700 transition duration-200 flex-grow">
            SHOP NOW
          </button>
        </div>
        
        <h1 className="text-4xl lg:text-4xl font-bold mb-6">Your Title Here</h1>
      </div>
    </div>
  );
};

export default HomeVideo;
