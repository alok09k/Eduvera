import React from 'react'
import './Testimonial.css'
import { useRef } from 'react'
import back_btn from '../../assets/back-icon.png'
import next_btn from '../../assets/next-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

function Testimonial() {

  const slider =  useRef();
  let tx = 0;

  const slideBack = () => {
    if (tx > -75) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideNext = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className='testimonial'>
        <img src={back_btn} alt="" className='back-btn' onClick={slideNext}/>
        <img src={next_btn} alt="" className='next-btn' onClick={slideBack} />
        <div className='sliders'>
            <ul ref={slider}>
              <li>
                <div className='slide'>
                  <div className='user-info'>
                    <img src={user_1} alt="" />
                    <div>
                      <h3>William Jackson</h3>
                      <span>Edusity, USA</span>
                    </div>
                  </div>
                  <p>Choosing to pursue my degree at Edusity was one of the best decisions I\'ve ever made. 
                    The supportive community, state-of-the-art facilities, and commitment to 
                    academic excellence have truly exceeded my expectations.
                  </p>
                </div>
              </li>

              <li>
                <div className='slide'>
                  <div className='user-info'>
                    <img src={user_2} alt="" />
                    <div>
                      <h3>John Doe</h3>
                      <span>Edusity, USA</span>
                    </div>
                  </div>
                  <p>The supportive community, state-of-the-art facilities, and 
                    commitment to academic excellence have truly exceeded my expectations.
                  </p>
                </div>
              </li>

              <li>
                <div className='slide'>
                  <div className='user-info'>
                    <img src={user_3} alt="" />
                    <div>
                      <h3>Sarah Parker</h3>
                      <span>Edusity, USA</span>
                    </div>
                  </div>
                  <p>The best decision I\'ve ever made.
                     The supportive community, state-of-the-art facilities, and commitment
                      to academic excellence have truly exceeded my expectations.
                  </p>
                </div>
              </li>

              <li>
                <div className='slide'>
                  <div className='user-info'>
                    <img src={user_4} alt="" />
                    <div>
                      <h3>Emily Smith</h3>
                      <span>Edusity, USA</span>
                    </div>
                  </div>
                  <p>Commitment to academic excellence have truly exceeded my expectations.
                  </p>
                </div>
              </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonial