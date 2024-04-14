import React from "react";
import { doctors } from "../../assets/data/doctors";
import DoctorCard from "../../components/doctors/DoctorCard";
import Testimonial from '../../components/testimonial/Testimonial'


const Doctors = () => {
  return (
    <>
      <section className="bg-[#FFF9EA]">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>

          <div className="max-w-[570px] mt-[30px] mx-auto rounded-md flex items-center justify-between bg-[#0066FF2C]">
            <input
              type="search"
              placeholder="search by doctor name or specialization"
              className="pl-4 pr-2 bg-transparent w-full focus:outline-none placeholder:text-textColor text-xl"
            />
            <button className="btn mt-0 rounded-[0] rounded-r-md py-5">
              Search
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
      {
      doctors.map((doctor ,index) => <DoctorCard key={index}  doctor={doctor}/>)
      }
    </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">
            What our patient say
            </h2>
            <p className="text_-para text-center">
            World-class care for everyone. Our health System offers unmatched, expert health care.
            </p>
          </div>
          <Testimonial/>
        </div>
      </section>
    </>
  );
};
export default Doctors;
