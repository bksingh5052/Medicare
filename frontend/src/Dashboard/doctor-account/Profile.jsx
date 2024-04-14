import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import uploadImageToCloudinary from "../../utils/uploadCloudinary";
import { BASE_URL, token } from "../../config";
import { toast } from "react-toastify";



const Profile = ({doctorData}) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
    gender: "",
    specialization: "",
    ticketPrice: 0,
    qualifications: [{}],
    experiences: [{ startingDate: "", endingDate: "", position: "", hospital: "" }],
    timeSlots: [{}],
    about:'',
    photo: null
  });

  useEffect(()=>{
    setFormData({
      name:doctorData?.name,
      email: doctorData?.email,
      phone: doctorData?.phone,
      bio: doctorData?.bio,
      gender: doctorData?.gender,
      specialization: doctorData?.specialization,
      ticketPrice: doctorData?.ticketPrice,
      qualifications: doctorData?.qualifications,
      experiences: doctorData?.experiences,
      timeSlots: doctorData?.timeSlots,
      about:doctorData?.about,
      photo: doctorData?.photo
    })
  },[doctorData])  
  const [selectedFile, setSelectedFile] = useState(null);
  const [file, useFile]  = useState(null)


  useEffect(()=>{
    setFormData(
      {
        name: doctorData?.name,
        email: doctorData?.email,
        phone: doctorData?.phone,
        bio: doctorData?.bio,
        gender: doctorData?.gender,
        specialization: doctorData?.specialization,
        ticketPrice: doctorData?.ticketPrice,
        qualifications: doctorData?.qualifications,
        experiences: doctorData?.experiences,
        timeSlots: doctorData?.timeSlots,
        about: doctorData?.about,
        photo: doctorData?.photo
      }
    )
  },[doctorData])


  const handleFileInputChange = async (e) => {
    console.log("o")
    const file = e.target.files[0];
    useFile(e.target.files[0])
    const picData = await uploadImageToCloudinary(file);
    setSelectedFile(picData.url);
    setFormData({ ...formData, photo: picData.url});
    console.log(picData)

  };


  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  // reusable function for deleting items

  const deleteItem = (key,index)=>{

    setFormData((prev)=>({...prev, [key]: prev[key].filter((_,i)=> i !== index)}))
  }


  // reusable function for adding item

  const addItem = (key,item)=>{
    setFormData(prev=>({...prev, [key]: [...prev[key], item]}))
    console.log("added",formData)
  } 

  const addQualification = e=>{
    e.preventDefault();
    addItem("qualifications",{ startingDate: "", endingDate: "", degree: "", university: "" })
  }
   const addExperience = e=>{
    e.preventDefault();
    addItem("experiences",{ startingDate: "", endingDate: "", position: "", hospital: "" })
  }
  const addTimeSlot = e=>{
    e.preventDefault();
    addItem("timeSlots",{days:'', startingTime: "", endingTime: "" })
  }
  


const handleReusableInputChange = (key, index, event) => {
    const { name, value } = event.target;
    setFormData(prev => {
        const updatedItems = [...prev[key]]; // Clone the array
        if (index >= updatedItems.length) {
            // If index is beyond the current length, add a new object
            updatedItems.push({ [name]: value });
        } else {
            // If index is within the current length, update existing object
            updatedItems[index] = {
                ...updatedItems[index],
                [name]: value
            };
        }
        return {
            ...prev,
            [key]: updatedItems // Update the state with the modified array
        };
    });
};

  const handleQualificationChange = (event, index) =>{
    handleReusableInputChange('qualifications', index, event)
  }
  const handleexperienceChange = (event, index) =>{
    handleReusableInputChange('experiences', index, event)

  }
  const handletimeSlotChange = (event, index) =>{
    handleReusableInputChange('timeSlots', index, event)

  }

  const deleteQualification = (e,index)=>{
    e.preventDefault();
    deleteItem("qualifications",index)
  }
  
  const deleteExpreience = (e,index)=>{
    e.preventDefault();
    deleteItem("experiences",index)
  }

  const deletetimeslot = (e,index)=>{
    e.preventDefault();
    deleteItem("timeSlots",index)
  }
  const updateProfileHandler = async(e)=>{
    e.preventDefault();
    console.log(formData)
    try {
      const res = await fetch(`${BASE_URL}/doctors/${doctorData._id}`,{
        method: 'PUT',
        headers: {
          'content-type' : 'application/json',
          Authorization : `Bearer ${token}`
        },

        body: JSON.stringify(formData)
      })
      const result = await res.json();
      if(!res.ok){
        throw Error(result.message)
      }
      toast.success(result.message)
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <div>
      <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">
        Profile Information
      </h2>
      <form>
        <div className="mb-5">
          <p className="form__label">Name</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="form__input"
          />
        </div>
        <div className="mb-5">
          <p className="form__label">Email</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="form__input"
            readOnly
            aria-readonly
            disabled={true}
          />
        </div>
        <div className="mb-5">
          <p className="form__label">Phone</p>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone"
            className="form__input"
          />
        </div>
        <div className="mb-5">
          <p className="form__label">Bio</p>
          <input
            type="text"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            placeholder="Bio"
            className="form__input"
            maxLength={150}
          />
        </div>
        <div className="mb-5">
          <div className="grid grid-cols-3 gap-5 mb-[30px]">
            <div>
              <p className="form__lebel">Gender</p>
              <select
                name="gender"
                id="gender"
                // select={formData.gender}
                value={formData.gender}
                onChange={handleInputChange}
                className="form__input py-3.5"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <p className="form__lebel">Specialization</p>
              <select
                name="specialization"
                id="specialization"
                value={formData.specialization}
                onChange={handleInputChange}
                className="form__input py-3.5"
              >
                <option value="">Select</option>
                <option value="surgeon">Surgeon</option>
                <option value="neurologist">Neurologist</option>
                <option value="drmatologist">Drmatologist</option>
              </select>
            </div>
            <div>
              <p className="form__lebel">Ticket Price</p>
              <input
                type="number"
                placeholder="100"
                name="ticketPrice"
                value={formData.ticketPrice}
                onChange={handleInputChange}
                className="form__input"
              />
            </div>
          </div>
        </div>
        <div className="mb-5">
          <p className="form__label text-[20px]">Qualifications</p>
          {formData.qualifications?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5 mb-10">
                  <div>
                    <p className="form__label">Starrting Date*</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className="form__input"
                      onChange={e=>handleQualificationChange(e,index)}
                    />
                  </div>
                  <div>
                    <p className="form__label">Ending Date*</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form__input"
                      onChange={e=>handleQualificationChange(e,index)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mb-5">
                  <div>
                    <p className="form__label">Degree*</p>
                    <input
                      type="text"
                      name="degree"
                      value={item.degree}
                      className="form__input"
                      onChange={e=>handleQualificationChange(e,index)}
                    />
                  </div>
                  <div>
                    <p className="form__label">University*</p>
                    <input
                      type="text"
                      name="university"
                      value={item.university}
                      className="form__input"
                      onChange={e=>handleQualificationChange(e,index)}
                    />
                  </div>
                </div>
                <button onClick={e =>deleteQualification(e,index)} className="bg-red-600 rounded-full text-white text-[20px] p-[2px] mt-2 mb-[30px] cursor-pointer">
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}
          <button onClick={addQualification} className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer ">
            Add Qualification
          </button>
        </div>
        <div className="mb-5">
          <p className="form__label text-[20px]">Experiences</p>
          {formData.experiences?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5 mb-10">
                  <div>
                    <p className="form__label">Starrting Date*</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className="form__input"
                      onChange={e=>handleexperienceChange(e,index)}
                    />
                  </div>
                  <div>
                    <p className="form__label">Ending Date*</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form__input"
                      onChange={e=>handleexperienceChange(e,index)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mb-5">
                  <div>
                    <p className="form__label">Position*</p>
                    <input
                      type="text"
                      name="position"
                      value={item.position}
                      className="form__input"
                      onChange={e=>handleexperienceChange(e,index)}
                    />
                  </div>
                  <div>
                    <p className="form__label">Hospital*</p>
                    <input
                      type="text"
                      name="hospital"
                      value={item.hospital}
                      className="form__input"
                      onChange={e=>handleexperienceChange(e,index)}
                    />
                  </div>
                </div>
                <button onClick={e=>deleteExpreience(e,index)} className="bg-red-600 rounded-full text-white text-[20px] p-[2px] mt-2 mb-[30px] cursor-pointer">
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}
          <button onClick={addExperience} className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer ">
            Add Experience
          </button>
        </div> 
        <div className="mb-5">
          <p className="form__label text-[20px]">Time Slot</p>
          {formData.timeSlots?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-[30px]">
                  <div>
                    <p className="form__label">Days*</p>
                    <select
                      name="days"
                      id="days"
                      value={item.days}
                      className="form__input py-3.5"
                      onChange={e =>handletimeSlotChange(e,index)}
                    >
                      <option value="">Select</option>
                      <option value="monday">Monday</option>
                      <option value="tuesday">Tuesday</option>
                      <option value="wednesday">Wednesday</option>
                      <option value="thurusday">Thurusday</option>
                      <option value="friday">Friday</option>
                      <option value="saturday">Saturday</option>
                      <option value="sunday">Sunday</option>
                    </select>
                  </div>
                  <div>
                    <p className="form__label">Starting time*</p>
                    <input
                      type="time"
                      name="startingTime"
                      value={item.startingTime}
                      className="form__input"
                      onChange={e =>handletimeSlotChange(e,index)}

                    />
                  </div>
                  <div>
                    <p className="form__label">Ending time*</p>
                    <input
                      type="time"
                      name="endingTime"
                      value={item.endingTime}
                      className="form__input"
                      onChange={e =>handletimeSlotChange(e,index)}

                    /> 
                  </div>
                  <div className="flex items-center">
                    <button onClick={e=>deletetimeslot(e,index)} className="bg-red-600 rounded-full text-white text-[20px] p-[2px] mt-6 cursor-pointer">
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button onClick={addTimeSlot} className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer ">
            Add Time Slot
          </button>
        </div>
        <div className="mb-5">
          <p className="form__label">About*</p>
          <textarea name="about" value={formData.about} placeholder="Write about yourself" onChange={handleInputChange}className="form__input"></textarea>
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
        <div className="mt-7">
          <button type="submit" onClick={updateProfileHandler} className="bg-primaryColor text-white leading-[30px] w-full py-3 rounded-md">Upload Profile</button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
