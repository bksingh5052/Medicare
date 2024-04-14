import React from "react";

const DoctorAbout = ({name,experiences,qualifications,about}) => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex gap-2 items-center">
          About of
          <span className="text-[24px] leading-9 text-irisBlueColor font-bold">
            {name}
          </span>
        </h3>
        <p className="text__para">
          {DataTransfer.about}
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex gap-2 items-center">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-[15px] leading-6 font-semibold text-irisBlueColor">
                2006-2010
              </span>
              <p className="text-[15px] leading-6 text-textColor font-medium">
                BSc degree in Neurosciences
              </p>
            </div>
            <p className="text-[15px] leading-6 text-textColor font-medium">
              New Apollo Hospital
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-[15px] leading-6 font-semibold text-irisBlueColor">
                2010-2012
              </span>
              <p className="text-[15px] leading-6 text-textColor font-medium">
                PHD degree in Neurosciences
              </p>
            </div>
            <p className="text-[15px] leading-6 text-textColor font-medium">
              New Apollo Hospital
            </p>
          </li>
        </ul>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex gap-2 items-center">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-[15px] leading-6 font-semibold text-yellowColor">2012-2015</span>
            <p className=" text-textColor text-[16px] leading-6 font-medium">Associate Professor</p>
            <p className=" text-textColor text-[14px] leading-5 font-medium">Mount Adora Hospital, Sylhet</p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-[15px] leading-6 font-semibold text-yellowColor">2016-2018</span>
            <p className=" text-textColor text-[16px] leading-6 font-medium">Medical & General Neurologist</p>
            <p className=" text-textColor text-[14px] leading-5 font-medium">Patna Medical College</p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-[15px] leading-6 font-semibold text-yellowColor">2019-2023 </span>
            <p className=" text-textColor text-[16px] leading-6 font-medium">Sr. Professor</p>
            <p className=" text-textColor text-[14px] leading-5 font-medium">MAG Osmani Medical College, Sylhet</p>
          </li>
          
        </ul>
      </div>
      
    </div>
  );
};

export default DoctorAbout;
