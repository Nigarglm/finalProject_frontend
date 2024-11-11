import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {
  const [poster, setPoster] = useState('');
  const [name, setName] = useState('');
  const [trailer, setTrailer] = useState('');
  const [video, setVideo] = useState('');
  const [description, setDescription] = useState('');
  const [country, setCountry] = useState('');
  const [duration, setDuration] = useState('');
  const [year, setYear] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [mainActors, setMainActors] = useState('');
  const [comments, setComments] = useState('');
  const [rating, setRating] = useState('');
  const [price, setPrice] = useState('');

  const navigate = useNavigate();
  
  const handleAddMovie = async (e) => {
    e.preventDefault();
    
    const newMovie = {
      poster,
      name,
      trailer,
      video,
      description,
      country,
      duration: Number(duration),
      year: Number(year),
      category,
      type,
      mainActors,
      comments,
      rating: Number(rating),
      price: Number(price),
    };

    try {
        const response = await fetch('http://localhost:8000/movies', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newMovie), // Ensure movieData is correctly formatted
        });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to add movie');
      }

      // Resetting states
      setPoster('');
      setName('');
      setTrailer('');
      setVideo('');
      setDescription('');
      setCountry('');
      setDuration('');
      setYear('');
      setCategory('');
      setType('');
      setMainActors('');
      setComments('');
      setRating('');
      setPrice('');

      navigate("/admin/movies");
      
    } catch (error) {
      console.error('Error adding movie:', error);
    }
  };

  const handleFileChange = (setter) => (e) => {
    const file = e.target.files[0];
    if (file) {
      setter(file);
    }
  };

  return (
    <div className="my-8 mx-8">
      <form onSubmit={handleAddMovie} encType='multipart/form-data' className="mb-8">
        <div className="flex flex-col gap-4">
          <input 
            type="file" 
            onChange={handleFileChange(setPoster)} 
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
            type="file" 
            onChange={handleFileChange(setTrailer)} 
            className="border p-2" 
            required 
          />
          <input 
            type="file" 
            onChange={handleFileChange(setVideo)} 
            className="border p-2" 
            required 
          />
          <input 
            type="text" 
            placeholder="Description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            className="border p-2" 
            required 
          />
          <input 
            type="text" 
            placeholder="Country" 
            value={country} 
            onChange={(e) => setCountry(e.target.value)} 
            className="border p-2" 
            required 
          />
          <input 
            type="number" 
            placeholder="Duration" 
            value={duration} 
            onChange={(e) => setDuration(e.target.value)} 
            className="border p-2" 
            required 
          />
          <input 
            type="number" 
            placeholder="Year" 
            value={year} 
            onChange={(e) => setYear(e.target.value)} 
            className="border p-2" 
            required 
          />
          <input 
            type="text" 
            placeholder="Category" 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
            className="border p-2" 
            required 
          />
          <input 
            type="text" 
            placeholder="Type" 
            value={type} 
            onChange={(e) => setType(e.target.value)} 
            className="border p-2" 
            required 
          />
          <input 
            type="text" 
            placeholder="Main Actors" 
            value={mainActors} 
            onChange={(e) => setMainActors(e.target.value)} 
            className="border p-2" 
            required 
          />
          <input 
            type="text" 
            placeholder="Comments" 
            value={comments} 
            onChange={(e) => setComments(e.target.value)} 
            className="border p-2" 
            required 
          />
          <input 
            type="number" 
            placeholder="Rating" 
            value={rating} 
            onChange={(e) => setRating(e.target.value)} 
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
        </div>
        <button className="mt-4 p-2 relative h-[50px] w-40 overflow-hidden border border-green-900 bg-white text-green-900 shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-green-900 before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-green-900 after:duration-500 hover:text-white hover:shadow-green-900 hover:before:h-2/4 hover:after:h-2/4"> 
          <span className="relative z-10">Add Movie</span>
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
