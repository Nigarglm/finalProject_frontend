import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddHero = () => {
  const [image, setImage] = useState('');
  const [text, setText] = useState('');
  const navigate = useNavigate();
  
  const handleAddHero = async (e) => {
    e.preventDefault();
    
    const newHero = {
      image,
      text
    };

    try {
      const response = await fetch('http://localhost:8000/hero', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newHero),
      });

      if (!response.ok) {
        await response.json();
      };

      setImage('');
      setText('');


      navigate("/admin/hero")
      
    } catch (error) {
      console.error('Error adding hero:', error);
    }
  };

  return (
    <div className="my-8 mx-8">
      <form onSubmit={handleAddHero} className="mb-8">
        <div className="flex flex-col gap-4">
        <input 
            type="file" 
            placeholder="Image" 
            value={image} 
            onChange={(e) => setImage(e.target.value)} 
            className="border p-2" 
            required 
          />
          <input 
            type="text" 
            placeholder="Text" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            className="border p-2" 
            required 
          />
        </div>
        <button className="mt-4 p-2  relative h-[50px] w-40 overflow-hidden border border-green-900 bg-white text-green-900 shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-green-900 before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-green-900 after:duration-500 hover:text-white hover:shadow-green-900 hover:before:h-2/4 hover:after:h-2/4">
         <span className="relative z-10">Add Text</span>
        </button>
      </form>
    </div>
  );
};

export default AddHero;
