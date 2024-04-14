import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import uploadImageToCloudinary from "../../utils/uploadCloudinary";
import { BASE_URL, token } from "../../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";
import { useContext } from "react";
import { authContext } from "../../context/AuthContext";

const Profile = ({userData}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [file, useFile]  = useState(null)
  const [loading, setLoading] = useState(false);
  const { dispatch, user } = useContext(authContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: null,
    gender: "",
    bloodType: "",
  });

  useEffect(()=>{
    console.log("user",user)
    setFormData({name:user.name, email:user.email, password:user.password,photo:user.photo, gender:user.gender, bloodType:user.bloodType})
  },[user])
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    useFile(e.target.files[0])
    const picData = await uploadImageToCloudinary(file);
    setSelectedFile(picData.url);
    setFormData({ ...formData, photo: picData.url});

  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {

      const res = await fetch(`${BASE_URL}/users/${user._id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization : `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });
      const { message, data } = await res.json();
      if (!res.ok) {
        throw new Error(message);
      }
      console.log(data,"data")
      dispatch({
        type: "PROFILE_UPDATED",
        payload: {
          user: data,
          token: token,
          role: data.role,
        },
      });
      setLoading(false);
      toast.success(message);
      navigate("/users/profile/me");
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="mt-10">
        <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Full Name"
                  className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[18px] leading-8 text-headingColor placeholder:text-textColor"
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  name="email"
                  readOnly
                  aria-readonly
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter Your Email"
                  className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[18px] leading-8 text-headingColor placeholder:text-textColor"
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[18px] leading-8 text-headingColor placeholder:text-textColor"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  name="bloodType"
                  value={formData.bloodType}
                  onChange={handleInputChange}
                  required
                  placeholder="Blood Type"
                  className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[18px] leading-8 text-headingColor placeholder:text-textColor"
                />
              </div>

              <div className="mb-5 flex items-center justify-between">
                
                <label
                  htmlFor="gender"
                  className="text-[16px] leading-7 text-headingColor font-bold"
                >
                  Gender:
                  <select
                    name="gender"
                    id="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="text-[15px] leading-7 text-textColor font-semibold px-4 py-3 focus:outline-none"
                  >
                    <option value="" className="hover:bg-red">
                      Select
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>
              <div className="mb-5 flex items-center gap-3">
                {formData.photo && (
                  <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                    <img src={formData.photo} alt="" className="rounded-full" />
                  </figure>
                )}
                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    onChange={handleFileInputChange}
                    className="w-full absolute top-0 left-0 h-full opacity-0 cursor-pointer"
                    accept=".jpg, .png"
                  />
                  <label
                    className="absolute h-full w-full top-0 left-0 flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor rounded-lg font-semibold cursor-pointer truncate"
                    htmlFor="customFile"
                  >
                    {file? file.name :'Upload Photo'}
                  </label>
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn w-full rounded-md text-[18px] leading-[30px]"
              >
                {loading ? <HashLoader size={25} color="#ffffff" /> : "Update"}
              </button>
          
            </form>
    </div>
  )
}

export default Profile
