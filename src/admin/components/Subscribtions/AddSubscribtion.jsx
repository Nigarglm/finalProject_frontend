import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddSubscribtion = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState(''); 
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();
  
  const handleAddSubscription = async (e) => {
    e.preventDefault();
    
    const newSubscription = {
      name,
      price,
      description, 
      userId
    };

    try {
      const response = await fetch('http://localhost:8000/subscribtions', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSubscription),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to add Subscription');
      }

      // Clear the input fields
      setName('');
      setPrice('');
      setDescription(''); 
      setUserId('');

      // Navigate after successful submission
      navigate("/admin/subscribtion"); 
      
    } catch (error) {
      console.error('Error adding Subscription:', error);
      // Optionally display an error message to the user
    }
  };

  return (
    <div className="my-8 mx-8">
      <form onSubmit={handleAddSubscription} className="mb-8">
        <div className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="border p-2" 
            required 
          />
          <input 
            type="number" 
            placeholder="Price" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            className="border p-2" 
            required 
          />
          <input 
            type="text" 
            placeholder="Description" // Updated to "Description"
            value={description} 
            onChange={(e) => setDescription(e.target.value)} // Use corrected variable
            className="border p-2" 
            required 
          />
          <input 
            type="text" 
            placeholder="User ID" 
            value={userId} 
            onChange={(e) => setUserId(e.target.value)} // Corrected typo: `sdetUserId`
            className="border p-2" 
            required 
          />
        </div>
        <button type="submit" className="mt-4 p-2 relative h-[50px] w-40 overflow-hidden border border-green-900 bg-white text-green-900 shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-green-900 before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-green-900 after:duration-500 hover:text-white hover:shadow-green-900 hover:before:h-2/4 hover:after:h-2/4">
          <span className="relative z-10">Add Subscription</span>
        </button>
      </form>
    </div>
  );
};

export default AddSubscribtion;
