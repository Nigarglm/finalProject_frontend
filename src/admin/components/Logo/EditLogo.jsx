import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditLogo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [image, setImage] = useState(null); // Define image in state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLogoById = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/logo/${id}`);
      if (!response.ok) throw new Error('Failed to fetch logo');
      const data = await response.json();
      setImage(data.image); // Assuming the API returns an object with an image property
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogoById(id);
  }, [id]);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0])); // Update state with the new image
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object if you are uploading files
    const formData = new FormData();
    formData.append('image', image); // Assuming image is a File object

    try {
      const response = await fetch(`http://localhost:8000/logo/${id}`, {
        method: 'PATCH',
        body: formData,
      });

      if (!response.ok) throw new Error('Logo update failed');
      navigate('/logos'); // Redirect after successful update
    } catch (error) {
      console.error('Error updating logo:', error);
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
            type="file" 
            accept="image/*"
            onChange={handleImageChange}
            required 
          />
          {image && <img src={image} alt="Logo Preview" className="w-32 h-32 object-cover" />}
        </div>
        <button type="submit" className="mt-4 p-2 bg-blue-600 text-white">
          Update Logo
        </button>
      </form>
    </div>
  );
};

export default EditLogo;

