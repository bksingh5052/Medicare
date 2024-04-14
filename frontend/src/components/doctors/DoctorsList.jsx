import React from 'react'
import { useState, useEffect } from 'react';
import DoctorCard from './DoctorCard'
import {BASE_URL} from './../../config';
import useFetchData from './../../hooks/useFetchData';
import Loader from '../loader/Loading'
import Error from '../../components/error/Error';


const DoctorsList = () => {
  // const {data:doctors, loading,error} =useFetchData(`${BASE_URL}/doctors`);
  const [loading, setLoading] = useState(false);
  const [doctors, setDoctors] = useState([])
  const [error, setError] = useState(null)
  const [currentLocation, setCurrentLocation] = useState({longitude:'',latitude:'' })

  // get userlocation
  useEffect(()=>{
    const successCallback = (position) => {
      const {longitude, latitude} = position.coords
      console.log(longitude,latitude)
      setCurrentLocation(()=>({longitude:longitude, latitude :latitude }))
  
     };
     
     const errorCallback = (error) => {
       console.log(error);
     };
     
     navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  },[])
  useEffect(()=>{ 

    const getdoctors = async (e) => {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/doctors`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentLocation),
      });

      if (!res.ok) {
        throw new Error(result.message);
      }
      const result = await res.json();
      setDoctors(result.data);
      setLoading(false)
    } catch (err) {
      // toast.error(err.message);
      setLoading(false);
    }
  };
  getdoctors()
},[currentLocation, setCurrentLocation])


  console.log(doctors)
  return ( <>
    {loading && <Loader/>}
    {error && <Error/>}
    { !loading && !error &&<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
        {
        doctors.map((doctor ,index) => <DoctorCard key={doctor._id}  doctor={doctor}/>)
        }
      </div>}
    </>
  );
};

export default DoctorsList
