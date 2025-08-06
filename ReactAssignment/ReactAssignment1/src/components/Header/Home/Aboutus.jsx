import React from 'react'
import bgImage from '../../../assets/Lamodeline.jpeg'
const Aboutus = () => {
  return (
    <div>
        <div
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${bgImage})
        ` }}
      >
        <div className="text-black bg-cyan-50 text-left pl-8 py-4 max-w-3xl mx-auto rounded-lg ">
         <p>LaModeLine is where timeless elegance meets contemporary fashion.
We curate premium clothing that celebrates individuality and bold expression.
Our collections are inspired by global trends and refined with artistic detail.
From street chic to luxury glam, every piece tells a story of style.
We believe fashion should be empowering, sustainable, and unapologetically you.
Crafted with precision, our fabrics feel as good as they look.
LaModeLine isn’t just a label — it’s a lifestyle of confidence and class.
We champion creativity, comfort, and a bold point of view.
Our mission is to redefine fashion, one silhouette at a time.
Welcome to LaModeLine — where fashion finds its voice.</p>
     </div>
      </div>
    </div>
  )
}

export default Aboutus