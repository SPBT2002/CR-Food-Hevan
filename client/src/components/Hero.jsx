import React from 'react'
import Rating from './Rating'

const Hero = () => {
  return (
    <section className='max-padd-container'>
        <div className="lg:bg-[url('/src/assets/bg.png')] bg-cover bg-center bg-no-repeat h-screen w-full rounded-2xl relative">
    
            {/* CONTAINER */}
            <div className='mx-auto max-w-[1440px] px-4 flex flex-col justify-between h-full'>
                {/* Top */}
                <div className='max-w-[788px] pt-44 lg:pt-58'>
                    <h3>Welcome to Candriya Food Hevan</h3>
                    <h2 className='uppercase |mb-0 traking-[0.22rem]'>
                        <span className='text-solidOne'>Get More </span><span className='text-solidTwo'>for Less - 25% off!</span>
                    </h2 >
                    <h1 className='font-[800] leading-none'>
                        on Rice & Curries
                    </h1>
                    <div className='flex items-center'>
                        <h3>Starting From</h3>
                        <span className='bg-white p-1 inline-block -rotate-2 ml-2.5 text-5xl font-extrabold'>
                            <span className='text-2xl relative bottom-3'> $</span>04.
                            <span className='text-2xl'>99</span>
                        </span>
                    </div>
                    <button className='btn-solid rounded-3 p-5 w-52 text-lg font-bold mt-8'>Shop Now</button>
                </div>
                {/* Bottom */}
                <div className="pb-9">
                    <Rating />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero