import useFetchData from "../../hooks/useFetchData"
import { BASE_URL } from "../../config"
import Loading from "../../components/Loader/Loading"
import Error from "../../components/error/Error"
import DoctorCard from "../../components/doctors/DoctorCard"

const MyBooking = () => {
  const {data:appoinments, loading , error} = useFetchData(`${BASE_URL}/users/appoinments/my-appoinments`)
  return (
    <div>
      {
        loading && !error && <Loading/>
      }
      {
        error &&  !loading && <Error errMessage={error}/>
      }
      {
        !error && !loading && <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
          {
            appoinments.map(doctor=>(
              <DoctorCard key={doctor._id} doctor={doctor}/>
            ))
          }
          {
            !loading && !error && appoinments.length === 0 && (
            <h2 className=" text-primaryColor mt-5 font-semibold leading-7 text-[20px]">You did not booked any doctor yet</h2>)
          }
        </div>
      }
    </div>
  )
}

export default MyBooking
