import { useContext, useState } from "react";
import { authContext } from "../../context/AuthContext";
import { BiMenu } from "react-icons/bi";
import { toast } from "react-toastify";

const Tabs = ({tab, setTab}) => {
  const { dispatch, user } = useContext(authContext);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    toast.warning('Logged Out')
  };

  return (
    <div>
        <span className='lg:hidden'>
            <BiMenu className='w-6 h-6 cursor-pointer'/>
        </span>
        <div className='hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md'>
            <button onClick={()=>{setTab('overview')}} className={` ${tab === 'overview' ? "bg-indigo-100 text-primaryColor" : "bg-transparent text-headingColor"} w-full btn mt-0 rounded-md`}>Overview</button>
            <button onClick={()=>{setTab('appointments')}} className={` ${tab === 'appointments' ? "bg-indigo-100 text-primaryColor" : "bg-transparent text-headingColor"} w-full btn mt-0 rounded-md`}>Appointments</button>
            <button onClick={()=>{setTab('profiles')}} className={` ${tab === 'profiles' ? "bg-indigo-100 text-primaryColor" : "bg-transparent text-headingColor"} w-full btn mt-0 rounded-md`}>Profile</button>

            <div className="mt-[100px] w-full">
              <button
                onClick={handleLogout}
                className=" w-full p-3 rounded-md text-[16px] leading-7 bg-[#181A1E] text-white"
              >
                Logout
              </button>
              <button className=" w-full p-3 rounded-md text-[16px] leading-7 bg-red-600 mt-4 text-white">
                Delete account
              </button>
            </div>

        </div>
    </div>

  )
}

export default Tabs
