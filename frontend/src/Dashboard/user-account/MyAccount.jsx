import React from "react";
import { useContext, useState } from "react";
import { authContext } from "../../context/AuthContext";
import Profile from "./Profile";
import MyBooking from "./MyBooking";
import useGetProfile from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/error/Error";
import { toast } from "react-toastify";


const MyAccount = () => {
  const { dispatch, user } = useContext(authContext);
  const [tab, setTab] = useState("bookings");
  const {data:userData, loading, error} = useGetProfile(`${BASE_URL}/users/profile/me`)


  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    toast.warning('Logged Out')
  };

  return (
    <section>
      {
        loading && !error && <Loading/>
      }
      {
        error &&  !loading && <Error errMessage={error}/>
      }
      {
        !loading && !error &&  <div className="max-w-[1170px] px-5 mx-auto">

        <div className="grid md:grid-cols-3 gap-10">
          <div className="pb-[50px] px-[30px] rounded-md">
            <div className="flex items-center justify-center">
              <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                <img
                  src={user.photo}
                  alt=""
                  className="rounded-full w-full h-full "
                />
              </figure>
            </div>

            <div className="text-center mt-4">
              <h3 className=" text-[18px] leading-[30px] text-headingColor font-bold">
                {user.name}
              </h3>
              <p className=" text-textColor font-medium text-[15px] leading-6">
                {user.email}
              </p>
              <p className=" text-textColor font-medium text-[15px] leading-6">
                Blood Type :{" "}
                <span className=" text-[22px] leading-8 ml-2 pt-2`">{user.bloodType}</span>
              </p>
            </div>

            <div className=" mt-[50px] md:mt-[100px]">
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
          <div className=" md:col-span-2 md:px-[30px]">
            <div>
              <button
                onClick={() => setTab("bookings")}
                className={`p-2 px-5 mr-5 rounded-md text-headingColor border border-solid border-primaryColor font-semibold text-[16px] leading-7 ${
                  tab === "bookings" && "bg-primaryColor text-white"
                }`}
              >
                My Booking
              </button>
              <button
                onClick={() => setTab("settings")}
                className={` py-2 px-5 rounded-md text-headingColor border border-solid border-primaryColor font-semibold text-[16px] leading-7  ${
                  tab === "settings" && "bg-primaryColor text-white"
                }`}
              >
                Profile Settings
              </button>
            </div>
            {tab === "bookings" ? <MyBooking /> : <Profile userData={userData} />}
          </div>
        </div>
      </div>
      }
     
    </section>
  );
};

export default MyAccount;
