// import React from "react";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { BASE_URL,token } from "../../config";
import HashLoader from "react-spinners/HashLoader"
import {toast} from 'react-toastify';

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [loading,setLoading]=useState(false);

  const {id} = useParams()

  const handleSubmitReview = async(e)=>{
    e.preventDefault();
    setLoading(true);

    try {
      if(!rating || !reviewText){
        setLoading(false)
        return toast.error("Rating and Review Fields are required")  
      }

      const res= await fetch(`${BASE_URL}/reviews/${id}`,{
        method:'post',
        headers:{
          'Content-Type':'application/json',
          Authorization:`Bearer ${token}`
        },
        body:JSON.stringify({rating,reviewText})
      })

      const result = await res.json()
      if(!res.ok){
        throw new Error(result.message)
      }
      setLoading(false)
      toast.success(result.message);

    } catch (err) {
      setLoading(false)
      toast.error(err.message);
    }
  }
  return (
    <form>
      <div>
        <h3 className="text-[16px] leading-6 text-headingColor mb-4 font-semibold">
          How would you rate the overall experience?*
        </h3>
        <div>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;
            return (
              <button
                key={index}
                className={`${
                  index <= ((rating && hover) || hover)
                    ? "text-yellowColor"
                    : "text-gray-400"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
                type="button"
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>


      <div className="mt-[30px]">
        <h3 className="text-[16px] leading-6 text-headingColor mb-4 font-semibold mt-0">Share your feedback or suggestions*</h3>
        <textarea 
        rows="5"
        className="border border-solid border-[#0066ff34] focus:out outline-primaryColor w-full px-4 py-3 rounded-md"
        placeholder="Write your message"
        onChange={(e)=>setReviewText(e.target.value)}
        ></textarea>
      </div>
      <button className="btn" type="submit" onClick={handleSubmitReview}>
        {loading ? <HashLoader size={25} color="#fff"/> :'Submit Feedback'}
        </button>
    </form>
  );
};

export default FeedbackForm;
