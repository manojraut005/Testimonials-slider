import React from "react";
import { FaQuoteLeft ,FaQuoteRight  } from "react-icons/fa"; 


const images = require.context('../../src/Images', true);



const Card = (props) =>{
    let review = props.review;
    let userImage = images(`./${review.image}.jpeg`);
    return (
        <div className="flex flex-col md:relative">
            <div className="absolute top-[-7rem] z-[10] mx-auto">
               <img src={userImage} className="aspect-square rounded-full w-[140px] h-[140px] z-25 select-none"></img>
               <div className="rounded-full w-[140px] h-[140px] z-[-10] absolute bg-red-500 top-[-6px] left-[10px]"></div>
            </div>

            <div className='text-center mt-7'>
                <p className='tracking-wider font-bold text-2xl capitalize'>{review.name}</p>
                <p className='text-red-300 uppercase text-sm'>{review.job}</p>
            </div>

           

            <div className='text-red-400 mx-auto mt-5'>
                <FaQuoteLeft/>
            </div>

            <div  className='text-center mt-4 text-slate-500'>
            {review.text}
            </div>

            <div className='text-red-400 mx-auto mt-5'>
                <FaQuoteRight/>
            </div>

          



        </div>
    )
}

export default Card