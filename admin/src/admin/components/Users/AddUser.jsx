import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const [photo, setPhoto] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleAddUser = async (e) => {
    e.preventDefault();

    // Upload photo to Cloudinary
    let photoUrl = '';
    if (photo) {
      const formData = new FormData();
      formData.append('file', photo);
      formData.append('upload_preset', 'YOUR_CLOUDINARY_UPLOAD_PRESET'); // Replace with your upload preset

      try {
        const cloudinaryResponse = await fetch('https://api.cloudinary.com/v1_1/dlp8t2hbr/image/upload', {
          method: 'POST',
          body: formData,
        });

        const cloudinaryData = await cloudinaryResponse.json();
        photoUrl = cloudinaryData.secure_url; // Get the uploaded photo URL
      } catch (error) {
        console.error('Error uploading photo:', error);
        return; // Stop further execution if upload fails
      }
    }

    const newUser = {
      photo: photoUrl,
      fullName,
      email,
      userName,
      password,
      isAdmin,
      isSubscribed,
    };

    try {
      const response = await fetch('http://localhost:8000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error creating user');
      }

      // Reset form fields
      setPhoto(null);
      setFullName('');
      setEmail('');
      setUserName('');
      setPassword('');
      setIsAdmin(false);
      setIsSubscribed(false);

      navigate("/admin/users");

    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div className="my-8 mx-8">
      <form onSubmit={handleAddUser} className="mb-8">
        <div className="flex flex-col gap-4">
          <input 
            type="file" 
            accept="image/*"
            onChange={handleFileChange} 
            className="border p-2" 
            required 
          />
          <input 
            type="text" 
            placeholder="Full Name" 
            value={fullName} 
            onChange={(e) => setFullName(e.target.value)} 
            className="border p-2" 
            required 
          />
          <input 
            type="email" 
            placeholder="E-mail" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="border p-2" 
            required 
          />
          <input 
            type="text" 
            placeholder="Username" 
            value={userName} 
            onChange={(e) => setUserName(e.target.value)} 
            className="border p-2" 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="border p-2" 
            required 
          />

          <div className='flex gap-8'>
            <div className='flex flex-col gap-2'>
              <label>
                <input 
                  type="radio" 
                  checked={isAdmin === true}
                  onChange={() => setIsAdmin(true)} 
                  className="border p-2" 
                  required 
                />
                Admin
              </label>
              <label>
                <input 
                  type="radio" 
                  checked={isAdmin === false}
                  onChange={() => setIsAdmin(false)} 
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
                  checked={isSubscribed === true}
                  onChange={() => setIsSubscribed(true)} 
                  className="border p-2" 
                  required 
                />
                Subscribed
              </label>
              <label>
                <input 
                  type="radio" 
                  checked={isSubscribed === false}
                  onChange={() => setIsSubscribed(false)} 
                  className="border p-2" 
                  required 
                />
                Not Subscribed
              </label>
            </div>
          </div>
        </div>
        <button className="mt-4 p-2 relative h-[50px] w-40 overflow-hidden border border-green-900 bg-white text-green-900 shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-green-900 before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-green-900 after:duration-500 hover:text-white hover:shadow-green-900 hover:before:h-2/4 hover:after:h-2/4">
          <span className="relative z-10">Add User</span>
        </button>
      </form>
    </div>
  );
};

export default AddUser;
