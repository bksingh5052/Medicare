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
          {about}
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex gap-2 items-center">
          Education
        </h3>
        <ul className="pt-4 md:p-5">

          {qualifications?.map((item,index) => <li key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-[15px] leading-6 font-semibold text-irisBlueColor">
              {/* {formateDate(item.startingDate)} - {formateDate(item.endingDate)} */}
              {`${item.startingDate.split("-")[0]}-${item.endingDate.split('-')[0]}`}
              
              </span>
              <p className="text-[15px] leading-6 text-textColor font-medium">
                {item.degree}
              </p>
            </div>
            <p className="text-[15px] leading-6 text-textColor font-medium">
              {item.university}
            </p>
          </li> )}
        </ul>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex gap-2 items-center">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">

            {experiences?.map((item,index)=><><li key={index} className="p-4 rounded bg-[#fff9ea]">
            <span className="text-[15px] leading-6 font-semibold text-yellowColor">
            {`${item.startingDate?.split("-")[0]}-${item.endingDate?.split('-')[0]}`}
            </span>
            <p className=" text-textColor text-[16px] leading-6 font-medium">{item.position}</p>
            <p className=" text-textColor text-[14px] leading-5 font-medium">{item.hospital}</p>
          </li>
          </>)}


          
        </ul>
      </div>
      
    </div>
  );
};

export default DoctorAbout;
