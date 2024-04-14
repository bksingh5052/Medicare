import React from "react";
import signupImg from "../assets/images/signup.gif";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import uploadImageToCloudinary from "../utils/uploadCloudinary";
import { BASE_URL } from "../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "patient",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    const data = await uploadImageToCloudinary(file);
    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
    setPreviewURL(data.url);
    console.log(data.url)
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }
      setLoading(false);
      toast.success(message);
      navigate("/login");
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* ============Image section=========== */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <img src={signupImg} alt="" className="w-full rounded-lg" />
          </div>
          {/* ============Signup form============== */}
          <div className="lg:pl-16 py-10 rounded-l-lg">
            <h3 className="text-[22px] leading-9 text-headingColor font-bold mb-10">
              Create an <span className="  text-primaryColor">Account</span>
            </h3>
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
                  required
                  placeholder="Password"
                  className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[18px] leading-8 text-headingColor placeholder:text-textColor"
                />
              </div>

              <div className="mb-5 flex items-center justify-between">
                <label
                  htmlFor="role"
                  className="text-[16px] leading-7 text-headingColor font-bold"
                >
                  Are you a:
                  <select
                    name="role"
                    id="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="text-[15px] leading-7 text-textColor font-semibold px-4 py-3 focus:outline-none"
                  >
                    <option value="patient" className="hover:bg-red">
                      Patient
                    </option>
                    <option value="doctor" className="hover:bg-primaryColor">
                      Doctor
                    </option>
                  </select>
                </label>
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
                {selectedFile && (
                  <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                    <img src={previewURL} alt="" className="rounded-full" />
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
                    Upload Photo
                  </label>
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn w-full rounded-md text-[18px] leading-[30px]"
              >
                {loading ? <HashLoader size={25} color="#ffffff" /> : "Sign Up"}
              </button>
              <p className="mt-5 text-center text-textColor">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primaryColor font-medium ml-1 cursor-pointer"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
