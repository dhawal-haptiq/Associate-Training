import React from 'react';
import bgImage from '../../../assets/Lamodeline2.jpeg';

const Aboutus = () => {
  return (
    <div>
      <div className="section">
      <div className=" max-w-3xl mx-auto p-8 rounded-lg text-black  text-left">
          <h1 className='text-center text-5xl' >ABOUT US</h1>
          <p className="text-lg space-y-4 text-center">
            LaModeLine is where timeless elegance meets contemporary fashion.<br />
            We curate premium clothing that celebrates individuality and bold expression.<br />
            Our collections are inspired by global trends and refined with artistic detail.<br />
            From street chic to luxury glam, every piece tells a story of style.<br />
            We believe fashion should be empowering, sustainable, and unapologetically you.<br />
            Crafted with precision, our fabrics feel as good as they look.<br />
            LaModeLine isn’t just a label — it’s a lifestyle of confidence and class.<br />
            We champion creativity, comfort, and a bold point of view.<br />
            Our mission is to redefine fashion, one silhouette at a time.<br />
            Welcome to LaModeLine — where fashion finds its voice.
          </p>  
        </div>
        </div>
      <div
        className="relative bg-cover bg-center h-screen flex items-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* <div className="bg-white bg-opacity-90 max-w-3xl mx-auto p-8 rounded-lg shadow-lg text-black font-light leading-relaxed text-left">
          <h1 className='text-center text-5xl' >ABOUT US</h1>
          <p className="text-lg space-y-4 text-center">
            LaModeLine is where timeless elegance meets contemporary fashion.<br />
            We curate premium clothing that celebrates individuality and bold expression.<br />
            Our collections are inspired by global trends and refined with artistic detail.<br />
            From street chic to luxury glam, every piece tells a story of style.<br />
            We believe fashion should be empowering, sustainable, and unapologetically you.<br />
            Crafted with precision, our fabrics feel as good as they look.<br />
            LaModeLine isn’t just a label — it’s a lifestyle of confidence and class.<br />
            We champion creativity, comfort, and a bold point of view.<br />
            Our mission is to redefine fashion, one silhouette at a time.<br />
            Welcome to LaModeLine — where fashion finds its voice.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Aboutus;
