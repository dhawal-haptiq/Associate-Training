import React from 'react';
import bgImage from '../../../assets/Lamodeline2.jpeg';

const Aboutus = () => {
  return (
    <div>
      <div className="section">
        <div className="max-w-3xl mx-auto p-8 rounded-lg text-black text-left">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl">ABOUT US</h1>

          <p className="text-sm sm:text-base md:text-lg text-center space-y-4 mt-4">
            LaModeLine is where timeless elegance meets contemporary fashion.<br />
            We curate premium clothing that celebrates individuality and bold expression.<br />
            Our collections are inspired by global trends and refined with artistic detail.<br />
            From street chic to luxury glam, every piece tells a story of style.<br />
            We believe fashion should be empowering, sustainable, and unapologetically you.<br />
            Crafted with precision, our fabrics feel as good as they look.<br />
            LaModeLine is just a label — it is a lifestyle of confidence and class.<br />
            We champion creativity, comfort, and a bold point of view.<br />
            Our mission is to redefine fashion, one silhouette at a time.<br />
            Welcome to LaModeLine — where fashion finds its voice.
          </p>

          <h1 className="mt-6 text-center text-xl sm:text-2xl">Photo</h1>
        </div>
      </div>

      <div
        className="relative bg-cover bg-center h-screen flex items-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
      </div>
    </div>
  );
};

export default Aboutus;
