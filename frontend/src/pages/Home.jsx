import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarImg from "../assets/images/avatar-icon.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import DoctorsList from "../components/doctors/DoctorsList";
import Testimonial from "../components/testimonial/Testimonial";

const Home = () => {
  return (
    <>
      {/* ==============hero section============== */}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-[90px]">
            {/* ========hero content========== */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] font-[800] text-headinColor md:text-[60px] md:leading-[70px]">
                  We help patitent live a healthy, longer life
                </h1>
                <p className="text__para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  suscipit voluptas minus tempore et ex excepturi optio iure
                  assumenda molestiae repudiandae magni quia, libero iste.
                </p>
                <button className="btn">Request an Appointmet</button>
              </div>
              {/* ========hero counter========== */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full mt-[-14px] block"></span>
                  <p className="text__para">Years of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full mt-[-14px] block"></span>
                  <p className="text__para">Clinic Location</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full mt-[-14px] block"></span>
                  <p className="text__para">Patient Satisfaction</p>
                </div>
              </div>
            </div>

            {/* ========hero content========== */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img className="w-full mb-[30px]" src={heroImg02} alt="" />
                <img className="w-full" src={heroImg03} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============hero end section============== */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="px-5 py-[30px]">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-center text-headingColor font-[700]">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor text-center font-[400] mt-4">
                  World-class care for everyone. Our health System offers
                  unmatched, expert health care. From the lab to the clinic.
                </p>
                <Link
                  to={"/doctors"}
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center hover:bg-primaryColor hover:border-none group"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="px-5 py-[30px]">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-center text-headingColor font-[700]">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor text-center font-[400] mt-4">
                  World-class care for everyone. Our health System offers
                  unmatched, expert health care. From the lab to the clinic.
                </p>
                <Link
                  to={"/doctors"}
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center hover:bg-primaryColor hover:border-none group"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="px-5 py-[30px]">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-center text-headingColor font-[700]">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor text-center font-[400] mt-4">
                  World-class care for everyone. Our health System offers
                  unmatched, expert health care. From the lab to the clinic.
                </p>
                <Link
                  to={"/doctors"}
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center hover:bg-primaryColor hover:border-none group"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


 

      {/* =============Features section============== */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* =============Feature content============== */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get virtual treatment <br />
                anytime.
              </h2>
              <ul className="pl-4">
                <li className="text__para">
                  1. Schedule the appointment directly.
                </li>
                <li className="text__para">
                  2. Search for your physician here, and contact their office.
                </li>
                <li className="text__para">
                  3. View our physicians who are accepting new patients, use the
                  online scheduling tool to select an appointment time.
                </li>
              </ul>
              <Link to="/">
                {" "}
                <button className="btn">Learn More</button>
              </Link>
            </div>

            {/* =============Feature Img section============== */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] xl:mt-0">
              <img src={featureImg} alt="" className="w-3/4" />
              <div className="w-[150px] lg:w-[248px] absolute bg-white bottom-[50px] md:bottom-[100px] left-0 md:left-5 z-20 p-2 pb-3 lg:pb-[26px] lg:pt-4 lg:px-4 rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      10:00 AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>
                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] px-2 py-1 lg:px-[10px] lg:py-[6px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 font-[500] text-irisBlueColor mt-2 lg:mt-4 rounded-full">
                  Consultation
                </div>

                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarImg} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700]">
                    Yellen Collins
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============Our great doctors============== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our great doctors</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>
          <DoctorsList />
        </div>
      </section>




      {/* =============Testimonial============== */}
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

export default Home;
