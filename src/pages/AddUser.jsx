import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/UserApi";
export default function AddUser() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "Admin",
  
    
  });
   const [profileImage, setProfileImage] = useState(null);
   const [imagePreview, setImagePreview] = useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState("");
   const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
   
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };
  
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    navigate("/");
    setError("");
    setSuccess("")
    if(!user.name || !user.email || !user.password){
      setError("Please fill field");
      return
    }
    try{
      setLoading(true);
      const response =await registerUser({
        name: user .name,
        email: user.email,
        password: user .password,
        role: user .role,
      })
      setTimeout(() =>{
        navigate("admin/users");
      },1000);
    }catch (err){
      setError(err.response?.data?.message || "Failed to create user");

    } finally{
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6">Add New User</h2>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Role */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Role
          </label>
          <select
            name="role"
            onChange={handleChange}
            className="w-full border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Admin">Admin</option>
            <option value="Customer">Customer</option>
          </select>
        </div>
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Profile Image
            </label>
            <div className="flex items-center gap-3 border border-gray-300 rounded p-2">
              <img
                src={imagePreview || "https://via.placeholder.com/50"}
                alt="preview"
                className="w-12 h-12 rounded object-cover"
              />
              <label className="cursor-pointer text-sm text-gray-600">
                {profileImage ? profileImage.name : "Click to upload image"}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        <button 
           type ="submit"
           disabled={loading}
           className="w-full bg-blue-600 text-white p-2 rounded hover :bg-blue-700 transition">
          {loading ? "Adding User..." : "Add User"}
        </button>

      </form>
    </div>
  );
}