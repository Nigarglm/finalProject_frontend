import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddFaq = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const navigate = useNavigate();
  
  const handleAddFaq = async (e) => {
    e.preventDefault();
    
    const newFaq = {
      question,
      answer
    };

    try {
      const response = await fetch('http://localhost:8000/faq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFaq),
      });

      if (!response.ok) {
        const errorData = await response.json(); // Capture error data
        throw new Error(errorData.message || 'Failed to add FAQ'); // Throw an error with the message
      }

      // Clear the input fields
      setQuestion('');
      setAnswer('');

      // Navigate after successful submission
      navigate("/admin/faq");
      
    } catch (error) {
      console.error('Error adding FAQ:', error);
      // You might want to display an error message to the user here
    }
  };

  return (
    <div className="my-8 mx-8">
      <form onSubmit={handleAddFaq} className="mb-8">
        <div className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Question" 
            value={question} 
            onChange={(e) => setQuestion(e.target.value)} 
            className="border p-2" 
            required 
          />
          <input 
            type="text" 
            placeholder="Answer" 
            value={answer} 
            onChange={(e) => setAnswer(e.target.value)} 
            className="border p-2" 
            required 
          />
        </div>
        <button className="mt-4 p-2 relative h-[50px] w-40 overflow-hidden border border-green-900 bg-white text-green-900 shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-green-900 before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-green-900 after:duration-500 hover:text-white hover:shadow-green-900 hover:before:h-2/4 hover:after:h-2/4">
          <span className="relative z-10">Add FAQ</span>
        </button>
      </form>
    </div>
  );
};

export default AddFaq;
