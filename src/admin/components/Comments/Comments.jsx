import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

const Comments = () => {

const [comments, setComments] = useState([])

const fetchComments = async () =>{
  try {
    console.log("object")
    const response = await fetch('http://localhost:8000/comments');
    if (!response.ok) throw new Error('Failed to fetch comments');
    const data = await response.json();
    setUsers(data);
  } catch (error) {
    console.error('Error fetching comments:', error);
  }
}

  useEffect(() => {
    fetchComments();
  }, [])

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/comments/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
         await response.json();

      };
      
      // Remove the deleted comment from the state
      setComments(comments.filter(comments => comments._id !== id));
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  return (
    <div className="my-8 mx-8 overflow-x-auto">
  <Link to="./AddComment" >
  <button className="mb-4 p-2  relative h-[50px] w-40 overflow-hidden border border-green-900 bg-white text-green-900 shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-green-900 before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-green-900 after:duration-500 hover:text-white hover:shadow-green-900 hover:before:h-2/4 hover:after:h-2/4">
   <span className="relative z-10">Add Comment</span>
   </button>
  </Link>

    <table className="min-w-full bg-white border border-gray-300">
      <thead className="bg-gray-200">
        <tr>
          <th className="py-2 px-4 border border-gray-300">ID</th>
          <th className="py-2 px-4 border border-gray-300">Comment</th>
          <th className="py-2 px-4 border border-gray-300">User ID</th>
          <th className="py-2 px-4 border border-gray-300">Movie ID</th>
          <th className="py-2 px-4 border border-gray-300">Settings</th>
        </tr>
      </thead>
      <tbody>
          {comments && comments.map((comments) => (
            <tr key={comments._id} className="odd:bg-white even:bg-gray-100">
              <td className="py-2 px-4 border border-gray-300">{comments._id}</td>
              <td className="py-2 px-4 border border-gray-300">{comments.comment}</td>
              <td className="py-2 px-4 border border-gray-300">{comments.userId}</td>
              <td className="py-2 px-4 border border-gray-300">{comments.movieId}</td>
              <td className="py-2 px-4 border border-gray-300">
              <Link to={`admin/comments/${comment._id}`}>
              <button className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full"><span className="relative z-10">Edit</span></button>
              </Link>
              <button onClick={() => handleDelete(faq._id)} className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full"><span className="relative z-10">Delete</span></button>
              </td>
            </tr>
          ))}
        </tbody>
    </table>
  </div>
  )
}

export default Comments