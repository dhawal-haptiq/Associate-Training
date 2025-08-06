// import React from 'react'

// const Payment = () => {
//   return (
//     <div>
//          <div className="h-screen flex flex-col md:flex-row">
//       <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/lamodeline3.jpeg')" }}></div>

//       <div className="w-1/2 flex items-center justify-center bg-gray-100">
//         <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
//           <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login to Your Account</h2>

//           {/* {error && <div className="text-red-500 text-sm text-center mb-4">{error}</div>} */}

//           <form  className="space-y-6">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//               <input
//                 id="email"
//                 type="email"
                
//                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//               <input
//                 id="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-black text-white py-2 px-4 rounded-md"
//             >
//               {loading ? 'Logging in...' : 'Login'}
//             </button>
//           </form>

//           <div className="my-6 text-center text-gray-400">or</div>

//           <p className="text-center text-sm text-gray-600">
//             Don’t have an account?{' '}
//             <Link to="/register" className="text-blue-500 hover:underline">Sign up</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Payment