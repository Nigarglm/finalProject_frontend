import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditUser = () => {
  const navigate = useNavigate();
  const { _id } = useParams(); 
  const [formData, setFormData] = useState({
    photo: null,
    fullName: '',
    email: '',
    userName: '',
    password: '',
    isAdmin: '',
    isSubscribed: ''
  });

  const getUserById = async (id) => {
    const resp = await fetch(`http://localhost:8000/users/${id}`);
    const data = await resp.json();
    setFormData(data);
  };

  useEffect(() => {
    getUserById(_id);
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
      photo: file, 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let photoUrl = formData.photo; 

      if (formData.photo && typeof formData.photo === 'object') {
        photoUrl = await uploadPhotoToCloudinary(formData.photo);
      }

      const updatedData = {
        ...formData,
        photo: typeof photoUrl === 'string' ? photoUrl : formData.photo, 
      };

      const response = await fetch(`http://localhost:8000/users/${_id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error('User update failed');
      }

      await response.json();
      navigate('/users');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="my-8 mx-8">
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex flex-col gap-4">
        <input 
            type="file" 
            placeholder="Image URL" 
            value={photo} 
            onChange={handleFileChange} 
            className="border p-2" 
            required 
          />
          <input 
            type="text" 
            placeholder="fullName" 
            value={fullName} 
            onChange={handleInputChange} 
            className="border p-2" 
            required 
          />
          <input 
            type="email" 
            placeholder="E-mail" 
            value={email} 
            onChange={handleInputChange} 
            className="border p-2" 
            required 
          />
          <input 
            type="text" 
            placeholder="Username" 
            value={userName} 
            onChange={handleInputChange} 
            className="border p-2" 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={handleInputChange} 
            className="border p-2" 
            required 
          />

          <div className='flex gap-[500px]'>
          <div className='flex flex-col gap-2'>
          <label>
          <input 
            type="radio" 
            value="Admin" 
            name="isAdmin"
            onChange={handleInputChange} 
            className="border p-2" 
            required 
          />
          Admin
          </label>
          <label>
          <input 
            type="radio" 
            value="User" 
            name="isAdmin"
            onChange={handleInputChange} 
            className="border p-2" 
            required 
          />
          User
          </label>
          </div>

          <div className='flex flex-col gap-2'>
          <label>
          <input 
            type="radio" 
            value="Subscribed" 
            name="isSubscribed"
            onChange={handleInputChange} 
            className="border p-2" 
            required 
          />
          Subscribed
          </label>
          <label>
          <input 
            type="radio" 
            value="Not Subscribed" 
            name="isSubscribed"
            onChange={handleInputChange} 
            className="border p-2" 
            required 
          />
          Not Subscribed
          </label>
          </div>
          </div>

        </div>
        <button type='submit' className=" mt-4 relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-white  transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56">
      <span className="relative z-10">Update User</span>
    </button>
      </form>
    </div>
  );
};

export default EditUser;
