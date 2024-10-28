import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditHero = () => {
  const navigate = useNavigate();
  const { _id } = useParams(); 
  const [formData, setFormData] = useState({
    image: null,
    text: ''
  });

  const getHeroById = async (id) => {
    const resp = await fetch(`http://localhost:8000/hero/${id}`);
    const data = await resp.json();
    setFormData(data);
  };

  useEffect(() => {
    getHeroById(_id);
  }, [_id]);

  const uploadPhotoToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'da1lrlby1'); 

    const response = await fetch('https://api.cloudinary.com/v1_1/dacsfvaap/image/upload', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();
    return data.secure_url; 
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file, 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = formData.icon; 

      if (formData.image && typeof formData.image === 'object') {
        imageUrl = await uploadPhotoToCloudinary(formData.image);
      }

      const updatedData = {
        ...formData,
        image: typeof imageUrl === 'string' ? imageUrl : formData.image, 
      };

      const response = await fetch(`http://localhost:8000/hero/${_id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error('Hero update failed');
      }

      await response.json();
      navigate('/hero');
    } catch (error) {
      console.error('Error updating hero:', error);
    }
  };

  return (
    <div className="my-8 mx-8">
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex flex-col gap-4">
        <input 
            type="file" 
            placeholder="Image Url" 
            value={image} 
            onChange={handleFileChange} 
            className="border p-2" 
            required 
          />
          <input 
            type="text" 
            placeholder="Text" 
            value={text} 
            onChange={handleInputChange} 
            className="border p-2" 
            required 
          />
        </div>
        <button type='submit' className=" mt-4 relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-white  transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56">
      <span className="relative z-10">Update Hero</span>
    </button>
      </form>
    </div>
  );
};

export default EditHero;
