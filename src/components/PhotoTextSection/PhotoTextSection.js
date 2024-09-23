import React from "react";

const PhotoTextSection = () => {
  return (
    <section className="flex flex-col lg:flex-row w-screen h-[700px] py-16">
      {/* Image Section */}
      <div className="lg:w-1/2 w-full h-full">
        <img
          src="assets/images/sectionPhoto.webp" // Replace with your image path
          alt="The Imrewħa Collection"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="lg:w-1/2 w-full h-full bg-white flex flex-col justify-center p-12">
        <div className="text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            THE IMREWĦA COLLECTION
          </h2>
          <p className="text-gray-700 mb-6">
            The Imrewħa Collection takes inspiration from traditional Maltese
            hand fans made from handmade lace (bizzilla). It is a tribute to our
            summer and festive nights, as these fans were a summer essential for
            noblewomen since the 18th century, elegantly cooling themselves with
            their intricate designs.
          </p>
          <p className="text-gray-700 mb-6">
            Our collection captures the essence of these luxurious accessories,
            blending the delicate beauty of lace with modern craftsmanship. Each
            piece, from pendants to earrings, mirrors the folding fan's graceful
            curves and detailed patterns.
          </p>
          <p className="text-gray-700 mb-8">
            This collection is made up of jewellery that's perfect to add a
            touch of elegance to any evening; it is a nod to Malta's rich
            heritage, offering a cool breeze of sophistication and history.
          </p>
          <button className="px-8 py-3 bg-black text-white font-semibold rounded hover:bg-gray-800 transition duration-300">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default PhotoTextSection;
