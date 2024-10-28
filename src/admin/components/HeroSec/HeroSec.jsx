import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

const HeroSec = () => {

const [hero, setHero] = useState([])

const fetchHeros = async () =>{
  try {
    console.log("object")
    const response = await fetch('http://localhost:8000/hero');
    if (!response.ok) throw new Error('Failed to fetch heros');
    const data = await response.json();
    setHero(data);
  } catch (error) {
    console.error('Error fetching heros:', error);
  }
}

  useEffect(() => {
    fetchHeros();
  }, [])

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/hero/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        await response.json();

      };
      
      // Remove the deleted hero from the state
      setHero(hero.filter(hero => hero._id !== id));
    } catch (error) {
      console.error('Error deleting hero:', error);
    }
  };

  return (
    <div className="my-8 mx-8 overflow-x-auto">
  <Link to="./AddHero" >
  <button className="mb-4 p-2  relative h-[50px] w-40 overflow-hidden border border-green-900 bg-white text-green-900 shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-green-900 before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-green-900 after:duration-500 hover:text-white hover:shadow-green-900 hover:before:h-2/4 hover:after:h-2/4">
   <span className="relative z-10">Add Hero</span>
  </button>
  </Link>

    <table className="min-w-full bg-white border border-gray-300">
      <thead className="bg-gray-200">
        <tr>
          <th className="py-2 px-4 border border-gray-300">ID</th>
          <th className="py-2 px-4 border border-gray-300">Image</th>
          <th className="py-2 px-4 border border-gray-300">Text</th>
          <th className="py-2 px-4 border border-gray-300">Settings</th>
        </tr>
      </thead>
      <tbody>
          {hero && hero.map((hero) => (
            <tr key={hero._id} className="odd:bg-white even:bg-gray-100">
              <td className="py-2 px-4 border border-gray-300">{hero._id}</td>
              <td className="py-2 px-4 border border-gray-300">
                <img src={hero.bg_image} />
              </td>
              <td className="py-2 px-4 border border-gray-300">{hero.text}</td>
              <td className="py-2 px-4 border border-gray-300">
              <Link to={`admin/hero/${hero._id}`}>
              <button className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full"><span className="relative z-10">Edit</span></button>
              </Link>
              <button onClick={() => handleDelete(hero._id)} className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full"><span className="relative z-10">Delete</span></button>
              </td>
            </tr>
          ))}
        </tbody>
    </table>
  </div>
  )
}

export default HeroSec