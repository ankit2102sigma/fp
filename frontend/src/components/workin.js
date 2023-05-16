import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './working.css';

function Working() {
  const [visible, setVisible] = useState(false);

  const fadeIn = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(50px)',
  });

  return (
    <>
      <div className='working-class'>
        <div className='container-Home'>
          <div className='row'>
            <animated.div
              className='column-working'
              style={fadeIn}
              onMouseEnter={() => setVisible(true)}
            >
              <h2>Step-1</h2>
              <p className='top-para'>
                "The first step in using our career guidance platform is to
                complete a comprehensive form with the necessary information.
                This includes details such as your skills, interests, 12th-grade
                marks, and academic stream. By providing us with this
                information, we can better understand your strengths and
                aspirations, and provide you with personalized guidance to help
                you achieve your career goals."
              </p>
            </animated.div>
            <animated.div
              className='column-img-working'
              style={fadeIn}
              onMouseEnter={() => setVisible(true)}
            >
              <img src='/images/9.jpg' alt='Image' />
            </animated.div>
          </div>
        </div>
      </div>
      <div className='working-class'>
        <div className='container-Home'>
          <div className='row'>
            <animated.div
              className='column-img-working'
              style={fadeIn}
              onMouseEnter={() => setVisible(true)}
            >
              <img src='/images/90.jpg' alt='Image' />
            </animated.div>
            <animated.div
              className='column-working'
              style={fadeIn}
              onMouseEnter={() => setVisible(true)}
            >
              <h2>Step-2</h2>
              <p className='top-para'>
                "Based on the information you provide in the form, our platform
                will recommend various career options that are best suited to
                your skills, interests, and academic background. We use a
                sophisticated algorithm to analyze your data and provide
                personalized recommendations that align with your career
                aspirations. This step is essential in helping you identify
                career paths that are most likely to lead to your long-term
                success and fulfillment."
              </p>
            </animated.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Working;
