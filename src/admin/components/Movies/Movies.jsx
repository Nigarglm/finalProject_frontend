import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

const Movies = () => {

const [movies, setMovies] = useState([])

const fetchMovies = async () =>{
  try {
    console.log("object")
    const response = await fetch('http://localhost:8000/movies');
    if (!response.ok) throw new Error('Failed to fetch movies');
    const data = await response.json();
    setUsers(data);
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}

  useEffect(() => {
    fetchMovies();
  }, [])

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/movies/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
         await response.json();

      };
      
      // Remove the deleted user from the state
      setMovies(movies.filter(movies => movies._id !== id));
    } catch (error) {
      console.error('Error deleting movies:', error);
    }
  };

  return (
    <div className="my-8 mx-8 overflow-x-auto">
  <Link to="./AddMovie" >
  <button className="mb-4 p-2  relative h-[50px] w-40 overflow-hidden border border-green-900 bg-white text-green-900 shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-green-900 before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-green-900 after:duration-500 hover:text-white hover:shadow-green-900 hover:before:h-2/4 hover:after:h-2/4"> <span className="relative z-10">Add User</span></button>
  </Link>

    <table className="min-w-full bg-white border border-gray-300">
      <thead className="bg-gray-200">
        <tr>
        <th className="py-2 px-4 border border-gray-300">ID</th>
          <th className="py-2 px-4 border border-gray-300">Poster</th>
          <th className="py-2 px-4 border border-gray-300">Name</th>
          <th className="py-2 px-4 border border-gray-300">Trailer</th>
          <th className="py-2 px-4 border border-gray-300">Video</th>
          <th className="py-2 px-4 border border-gray-300">Description</th>
          <th className="py-2 px-4 border border-gray-300">Country</th>
          <th className="py-2 px-4 border border-gray-300">Duration</th>
          <th className="py-2 px-4 border border-gray-300">Year</th>
          <th className="py-2 px-4 border border-gray-300">Category</th>
          <th className="py-2 px-4 border border-gray-300">Movie/Serie</th>
          <th className="py-2 px-4 border border-gray-300">Main Actors</th>
          <th className="py-2 px-4 border border-gray-300">Comments</th>
          <th className="py-2 px-4 border border-gray-300">Rating</th>
          <th className="py-2 px-4 border border-gray-300">Price</th>
          <th className="py-2 px-4 border border-gray-300">Settings</th>
        </tr>
      </thead>
      <tbody>
          {movies && movies.map((movies) => (
            <tr key={movies._id} className="odd:bg-white even:bg-gray-100">
              <td className="py-2 px-4 border border-gray-300">{movies._id}</td>
              <td className="py-2 px-4 border border-gray-300">
                <img src={movies.poster} />
              </td>
              <td className="py-2 px-4 border border-gray-300">{movies.name}</td>
              <td className="py-2 px-4 border border-gray-300">
                <img src={movies.trailer} />
              </td>
              <td className="py-2 px-4 border border-gray-300">
                <img src={movies.video} />
              </td>
              <td className="py-2 px-4 border border-gray-300">{movies.description}</td>
              <td className="py-2 px-4 border border-gray-300">{movies.country}</td>
              <td className="py-2 px-4 border border-gray-300">{movies.duration}</td>
              <td className="py-2 px-4 border border-gray-300">{movies.year}</td>
              <td className="py-2 px-4 border border-gray-300">{movies.category}</td>
              <td className="py-2 px-4 border border-gray-300">{movies.type}</td>
              <td className="py-2 px-4 border border-gray-300">{movies.main_actors}</td>
              <td className="py-2 px-4 border border-gray-300">{movies.comments}</td>
              <td className="py-2 px-4 border border-gray-300">{movies.rating}</td>
              <td className="py-2 px-4 border border-gray-300">{movies.price}</td>
              <td className="py-2 px-4 border border-gray-300">
              <Link to={`admin/movies/${movies._id}`}>
              <button className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full"><span className="relative z-10">Edit</span></button>
              </Link>
              <button onClick={() => handleDelete(movies._id)} className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full"><span className="relative z-10">Delete</span></button>
              </td>
            </tr>
          ))}
        </tbody>
    </table>
  </div>
  )
}

export default Movies