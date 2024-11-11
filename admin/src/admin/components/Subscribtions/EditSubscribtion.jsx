import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditSubscribtion = () => {
  const navigate = useNavigate();
  const { _id } = useParams(); 
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    describtion: '',
    userId: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getSubscribtionById = async (id) => {
    try {
      const resp = await fetch(`http://localhost:8000/subsribtions/${id}`);
      if (!resp.ok) throw new Error('Failed to fetch Subscribtion');
      const data = await resp.json();
      setFormData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSubscribtionById(_id);
  }, [_id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8000/subscribtions/${_id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Subscribtion update failed');
      }

      await response.json();
      navigate('/subscribtion');
    } catch (error) {
      console.error('Error updating Subscribtion:', error);
      setError(error.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="my-8 mx-8">
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex flex-col gap-4">
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            value={formData.name} // Access question from formData
            onChange={handleInputChange} 
            className="border p-2" 
            required 
          />
          <input 
            type="number" 
            name="price" 
            placeholder="Price" 
            value={formData.price} // Access answer from formData
            onChange={handleInputChange} 
            className="border p-2" 
            required 
          />
          <input 
            type="text" 
            name="describtion" 
            placeholder="Describtion" 
            value={formData.describtion} // Access answer from formData
            onChange={handleInputChange} 
            className="border p-2" 
            required 
          />
          <input 
            type="text" 
            name="userId" 
            placeholder="User ID" 
            value={formData.userId} // Access answer from formData
            onChange={handleInputChange} 
            className="border p-2" 
            required 
          />
        </div>
        <button type='submit' className="mt-4 relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56">
          <span className="relative z-10">Update Subscribtion</span>
        </button>
      </form>
    </div>
  );
};

export default EditSubscribtion;