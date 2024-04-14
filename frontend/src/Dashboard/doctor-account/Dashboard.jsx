import React from "react";
import { useState } from "react";
import Loader from "../../components/loader/Loading.jsx";
import Error from "../../components/error/Error.jsx";
import useGetProfile from "../../hooks/useFetchData.jsx";
import { BASE_URL } from "../../config.js";
import Tabs from "./Tabs.jsx";
import startIcon from "../../assets/images/Star.png"
import DoctorAbout from '../../pages/doctors/DoctorAbout.jsx'
import Profile from "./Profile.jsx";
import Appointments from "./Appointments.jsx";


const Dashboard = () => {
  const { data, error, loading } = useGetProfile(
    `${BASE_URL}/doctors/profile/me`
  );
  console.log(data)

  console.log(data.appointments)

  const [tab, setTab] = useState("overview");
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loader />}
        {error && !loading && <Error />}
        {!loading && !error && (
          <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
            <Tabs tab={tab} setTab={setTab} />
            <div className="lg:col-span-2">
              {data.isApproved === "pending" && (
                <div className="flex py-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg">
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      Rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000
                      2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Info</span>
                  <div className="ml-3 text-sm font-medium">
                    To get approval please complete your profile. We&apos;11
                    review manually and approve within 3days.
                  </div>
                </div>
              )}
              <div className="mt-8">
                {tab === "overview" && (
                  <div>
                    <div className="flex items-center gap-4 mb-10">
                      <figure className="max-w-[200px] max-h-[200px]">
                        <img src={data?.photo} alt="" className="w-full" />
                      </figure>
                      <div>
                        <span className="bg-[#ccf0f3] text-irisBlueColor py-1 px-4 lg:py-2 lg:px-6 rounded text-[12px] lg:text-[16px] leading-4 lg:leading-6 font-semibold ">
                          {data.specialization}
                        </span>
                        <h3 className="text-[22px] leading-9 font-bold text-headingColor mt-3">
                          {data.name}
                        </h3>
                        <div className="flex items-center gap-[6px]">
                          <span className="flex items-center gap-[6px] text-headingColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold"><img src={startIcon}/>{data.averageRating}</span>
                          <span className="  text-textColortext-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">({data.totalRating})</span>
                        </div>
                        <p className="text__para font-[15px] lg:max--w-[390px] leading-6">{data?.bio}
                        </p>
                      </div>
                    </div>

                    <DoctorAbout name={data.name} about={data.about} qualifications={data.qualifications} experiences={data.experiences}/>
                  </div>
                )}
              </div>
              {tab === "appointments" && <Appointments appointments={data.appointments}/>}
              {tab === "profiles" && <Profile doctorData={data}/>}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
