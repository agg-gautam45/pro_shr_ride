import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom"

function PublishHome() {
    const [index,setIndex] = useState(0);
    const navigate = useNavigate();
    
    const list = [
        {
            text : "5 years of using BlaBlaCar, dozens of journeys, as many meetings and exchanges, not a single disappointment. THANK YOU!",
            name : "John"
        },
        {
            text : "The benefit is always mutual, it only takes one passenger to turn a simple ride into an unexpected journey.",
            name : "Mia"
        },
        {
            text : "More than 400€ paid into my account thanks to BlaBlaCar, even though I've only been using it for a few months... There's no denying how good their app is!",
            name : "Simon"
        }
    ]
    const handleSubmit = () => {
        navigate("/pick");
    }

  return (
    <>  
        <div>
            <div className='flex flex-col gap-4 div-1'>
                <p className='text-[#054652] font-bold text-[30px] ml-36'>Become a FuFuCar driver and save on travel costs by <br/>sharing your ride with passengers.</p>
                <div className='flex justify-start p-12 ml-24'>
                    <div className="rounded-xl bg-white shadow-md shadow-slate-400 flex flex-col gap-1 font-semibold w-[350px] items-center overflow-hidden">
                        <h3 className='border-b-[1px] border-slate-300 mb-2 py-2 w-72 mt-6 px-1 flex items-center gap-2'><i className="fa-solid fa-compact-disc text-[10px]"></i>Delhi</h3>
                        <h3 className='border-b-[1px] border-slate-300 mb-2 py-2 w-72 mt-6 px-1 flex items-center gap-2'><i className="fa-solid fa-compact-disc text-[10px]"></i>Jaipur</h3>
                        <h3 className='border-b-[1px] border-slate-300 mb-2 py-2 w-72 mt-6 px-1 flex items-center gap-2'><i className="fa-regular fa-user text-[10px]"></i>2 Passengers</h3>
                        <h2 className='text-[#054652] text-2xl mb-3 font-bold px-1'>Save up to <span className='text-sky-500'>₹1,180</span> <br/>on your first ride.</h2>
                        <button className='flex justify-center items-center text-white bg-sky-500 w-full py-3 text-lg' onClick={handleSubmit}>Publish a ride</button>
                    </div>
                    <div>
                        <img src="https://cdn.blablacar.com/kairos/assets/images/driver-c3bdd70e6a29c6af9ef1.svg" className='h-[350px] w-[450px] ml-64' />
                    </div>
                </div>
            </div>
            <hr />
            <div className='flex flex-col gap-8 mt-16'>
                <p className='text-[30px] text-[#054652] font-bold ml-28'>The Best of Carpooling with FuFuCar</p>
                <div className='flex items-center ml-28'>
                    <div className='mr-10'>
                        <i class="ri-money-dollar-circle-line text-3xl text-yellow-500"></i>
                        <h4 className='font-bold mb-2'>Save on travel costs</h4>
                        <p className='font-bold text-slate-500'>Share your ride with passengers on your <br /> way, and save every time you travel by car. <br /> Sign up as a driver to start saving on travel <br /> costs.</p>
                    </div>
                    <div className='mr-10'>
                        <i className="ri-verified-badge-line text-3xl text-green-700"></i>
                        <h4 className='font-bold mb-2'>Join a trustworthy community</h4>
                        <p className='font-bold text-slate-500'>We know each of our members: both drivers <br />and passengers. We verify ratings, profiles <br />and IDs, so you know exactly who you’re <br />travelling with.</p>
                    </div>
                    <div className=''>
                        <i class="ri-rocket-fill text-3xl"></i>
                        <h4 className='font-bold mb-2'>Carpooling made simple</h4>
                        <p className='font-bold text-slate-500'>Our technology makes the entire experience <br />with BlaBlaCar simple, so you can easily <br />find, chat with and meet passengers right <br />on your way.</p>
                    </div>
                </div>
            </div>
            <div className='flex mt-16 bg-[#054652] items-center p-10'>
                  <img src="https://cdn.blablacar.com/kairos/assets/images/testimonials-485b6b3ff0b4040c4e7b.png" alt="" /> 
                  <div className='flex flex-col ml-40 h-[320px] gap-24'>
                    <div className='flex gap-4 items-center'>
                        <button onClick={()=>{
                                            index===0?setIndex(index):setIndex(index-1);
                                        }}>
                            <i class="ri-arrow-left-line text-[#13B4F4] text-2xl font-bold  bg-white rounded-full p-2"></i>
                        </button>
                        <div className='h-[200px] w-[450px] bg-white rounded-xl relative p-7'>
                            <div className='text-[#054652] font-bold'>{list[index].text}</div>
                            <div className='text-[#054652]  mt-4'>{list[index].name}</div>
                        </div>
                        <button onClick={()=>{
                                            index===2?setIndex(index):setIndex(index+1);
                                        }}>
                            <i class="ri-arrow-right-line text-[#13B4F4] text-2xl font-bold  bg-white rounded-full p-2"></i>
                        </button>
                    </div>
                  </div> 
            </div>
            <div className='mt-16 text-[#054652] ml-80'>
                <h2 className=' font-semibold text-4xl text-[#054652] mb-16'>Publish your ride in just minutes</h2>
                <div className='flex flex-col gap-6 mt-8'>
                    <div className='flex items-center gap-4'>
                        <i class="fa-regular fa-user"></i>
                        <div className='flex flex-col'>
                            <h2 className='font-semibold'>Create a FuFuCar Account</h2>
                            <h3 className='font-semibold text-gray-400'>Add your profile picture, a few words about you and your <br />phone number to increase trust between members.</h3>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <i class="fa-solid fa-car"></i>
                        <div  className='flex flex-col'>
                            <h2  className='font-semibold'>Publish your ride</h2>
                            <h3 className='font-semibold text-gray-400'>Indicate departure and arrival points, the date of the ride <br /> and check our recommended price to increase your chances <br /> of getting your first passengers and ratings.</h3>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <i class="fa-solid fa-cloud-bolt"></i>
                        <div  className='flex flex-col'>
                            <h2  className='font-semibold'>Accept booking requests</h2>
                            <h3 className='font-semibold text-gray-400'>Review passenger profiles and accept their requests to ride <br /> with you. That’s how easy it is to start saving on travel costs!</h3>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='flex bg-slate-400 flex-col gap-8 mt-16 mb-32'>
                <h1 className='text-3xl font-bold mt-16 ml-16 text-[#054652]'>We’re here every step of the way</h1>
                <div className='flex gap-24 justify-center'>
                    <div className='mb-6'>
                        <i className="ri-chat-1-line text-4xl text-gray-600"></i>
                        <h2 className='text-[#054652] font-semibold mb-2'>At your service 24/7</h2>
                        <h3>Our team is at your disposal to answer any <br /> questions by email or social media. You can <br /> also have a live chat directly with <br />experienced members.</h3>
                    </div>
                    <div className='mb-6'>
                        <i className="fa-solid fa-car text-4xl text-gray-600"></i>
                        <h2 className='text-[#054652] font-semibold mb-2'>FuFuCar at our side</h2>
                        <h3>For just 2 €, benefit from the reimbursement <br />of up to 1,500€ of your excess when you <br />publish a ride as a driver on BlaBlaCar</h3>                   
                    </div>
                    <div className='mb-6'>
                        <i className="ri-verified-badge-line text-4xl text-gray-600"></i>
                        <h2 className='text-[#054652] font-semibold mb-2'>100% secure information</h2>
                        <h3>Our team is dedicated to the protection of <br />your data, which is always 100% confidential <br /> thanks to monitoring tools, secure <br />navigation and encrypted data.</h3>
                    </div>
                </div>
            </div>
            <div className='border-t-[1px] border-slate-200 mt-16 flex justify-center items-center py-4 w-full bottom-0 fixed bg-white'>
               <button className="bg-sky-600 text-white rounded-xl px-14 py-3 " onClick={handleSubmit}>Publish a ride</button>
            </div>
        </div>
    </>
  )
}

export default PublishHome
