import React from 'react'
import './style.css';
import SmallHeading from '../UI/SmallHeading';
import MediumHeading from '../UI/MediumHeading';
import testimonialLeftpic from '../../assets/images/testimonials-01.jpg'
import testimonialRightpic from '../../assets/images/testimonials-02.jpg'
import testimonialProfilePic from '../../assets/images/testimonial-pic.jpg'
import Card from '../UI/Card/Card';


const Testimonial = (props) => {
  return (
    <div className="container" style={{ padding: '50px 0' }}>
      <div>
        <SmallHeading text="Testimonials" />
        <MediumHeading text="What People Say" />
      </div>
      <div
        className="flex-row wrap align-center justify-content"
        style={{ padding: '50px 0' }}
      >
        <div className="testimonialimagecontainer">
          <img src={testimonialLeftpic} alt="" />
        </div>
        <Card style={{ width: '500px', height: '300px', padding: '30px' }}>
          <div className="flex-row align-center">
            <div className="profilepicImageContainer">
              <img src={testimonialProfilePic} alt="" />
            </div>
            <div className="mlr-10">
              <p className="primaryColor font-16"> Abu Huraira</p>
              <p className="textColor font-14 bold-500">
                Associate Software Engineer (Mern Stack)
              </p>
            </div>
          </div>
          <p className="mtb-10 grey">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text,
          </p>
        </Card>
        <div className="testimonialimagecontainer">
          <img src={testimonialRightpic} alt="" />
        </div>
      </div>
      <Card className="m-auto" style={{ width: '500px', padding: '30px' }}>
        <p className="text-center font-12 mtb-10">
          Have any project in mind? <span className='primaryColor'>Say Hello At</span>
        </p>
        <p className="text-center font-25 ">anjumhussainkasur@gmail.com</p>
      </Card>
    </div>
  );
}

export default Testimonial