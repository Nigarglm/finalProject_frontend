import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddContact = () => {
  const [icon, setIcon] = useState('');
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const navigate = useNavigate();
  
  const handleAddContact = async (e) => {
    e.preventDefault();
    
    const newContact = {
      icon,
      name,
      link
    };

    try {
      const response = await fetch('http://localhost:8000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newContact),
      });

      if (!response.ok) {
        await response.json();
      };

      setIcon('');
      setName('');
      setLink('');


      navigate("/admin/contact")
      
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  return (
    <div className="my-8 mx-8">
      <form onSubmit={handleAddContact} className="mb-8">
        <div className="flex flex-col gap-4">
        <input 
            type="file" 
            placeholder="Icon" 
            value={icon} 
            onChange={(e) => setIcon(e.target.value)} 
            className="border p-2" 
            required 
          />
          <input 
            type="text" 
            placeholder="Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="border p-2" 
            required 
          />
          <input 
            type="text" 
            placeholder="Link" 
            value={link} 
            onChange={(e) => setLink(e.target.value)} 
            className="border p-2" 
            required 
          />
        </div>
        <button className="mt-4 p-2  relative h-[50px] w-40 overflow-hidden border border-green-900 bg-white text-green-900 shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-green-900 before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-green-900 after:duration-500 hover:text-white hover:shadow-green-900 hover:before:h-2/4 hover:after:h-2/4">
         <span className="relative z-10">Add Contact</span>
        </button>
      </form>
    </div>
  );
};

export default AddContact;
