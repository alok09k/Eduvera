import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

function About({setPlayState}) {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={() => setPlayState(true)}/>
        </div>
        <div className='about-right'>
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>
                Embark on a transformative educational journey with our
                university's comprehensive eduaction programs. Our cutting-edge
                curriculum is designed to empower student with the knowledge,
                skills, and experiences needed to excel in the dynamic field of
                eduaction.
            </p>
            <p>
                With a focus on innovation, hand-on learing, and personalized 
                mentorship, our programs prepare aspiring educators to make a 
                meaningful impact in classrooms, schools, ansd communities.
            </p>
            <p>
                Whether you aspire to become a teacher, administrator,
                counselor, or educational Leaders, our diverse range of programoffers the perfect pathway
                to achieve your goals and unlock your full potential in shaping in shaping the future of eduaction.
            </p>
        </div>
    </div>
  )
}

export default About