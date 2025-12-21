import React from 'react'
import Title from './Title'
import { assetd } from '../assets/data';

const About = () => {
  return (
    <section>
        {/*CONTAINER*/}
        <div>
        {/* Left Side*/}
            <div className='flex-1'>
                <Title />
            </div>
            {/* Right Side*/}
            <div className='flex-1'>
            </div>
        </div>
    </section>
  )
}

export default About