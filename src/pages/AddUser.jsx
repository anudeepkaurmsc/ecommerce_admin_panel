import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import {useForm} from 'react-hook-form';
import {FaUser} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { registerUser } from "../api/UserApi";
import { RiLockPasswordFill } from "react-icons/ri";
 const AddUser = () => {
   const navigate = useNavigate();
    const{
        register,
        handleSubmit,
        formState:{errors, isSubmitting},
    } = useForm();
     const onSubmit = async (data) => {
  try{
    await registerUser(data);

    navigate("/admin/users");

  }catch(error) {
    console.log("Adduser is failed:", error);
  }
};
  return (
    <div className='min-h-screen  rounded-lg w-full shadow  bg-gray-300 flex justify-center items-start p-8'>
      <div className="  ">
       <h2 className='text-2xl font-bold mb-2'>Add User</h2>
         <p className='text-gray-500 mb-6'>Crate a new user account</p>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            <div className='flex border rounded-lg overflow-hidden focus-within:ring-2'>
              <span className="bg-gray-100 px-4 flex items-center"><FaUser/>Name</span>
              <input {...register("name",
               {
                required:true,
                minLength:{value :3, meassage:'First name must be at least is required'},
               })}
                placeholder='Enter name'
                className='w-full p-3 outline-none'/>
                {errors.name && (<p className='text-red-500 text-sm'>{errors.name.message}</p>
              )}
           </div >
           <div className='flex border rounded-lg overflow-hidden' >
              <span className="bg-gray-100 px-4 flex items-center"><MdEmail/>Email</span>
              <input {...register('email',{required:true})}
              placeholder='Enter email'
              className='w-full p-3 outline-none'/>
           </div>
           <div className='flex border rounded-lg overflow-hidden' >
              <span className="bg-gray-100 px-4 flex items-center"> <RiLockPasswordFill/>Password</span>
              <input {...register('password',{required:true,maxLength:8})}
              placeholder='Enter Password'
              className='w-full  p-3 outline-none '/>
          </div>
          <div className='flex border rounded-lg overflow-hidden'>
             <span className="bg-gray-100 px-4 flex items-center"><FaUser/>Role </span>
              <select
                {...register("role",{required:true})}
                className="w-full p-3 outline-none"
              >
                <option value="">Select role</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>
          </div>
           <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  className="px-5 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Add User
                </button>
            </div>
        </form>
    </div>
    </div>  
  )
}

export default AddUser
