import React from 'react'
import { useRef } from 'react'
//import emailjs from 'node_modules\@emailjs\browser'
import './Join.css'


const Join = () => {
  {/**const form=useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_mfmkp84', 'template_4dkg7ah', form.current, 'ok-wC2FDc3UzCbaeL')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }; */}
  return (
    <div className="Join" id="join-us">
        <div className="left-j">
            <hr/>

            <div>
                <span className='stroke-text'>READY TO </span>
                <span>LEVEL UP</span>    
            </div>
            <div>
                <span>YOUR BODY </span>
                <span className='stroke-text'>WITH US?</span>    
            </div>
        </div>
        <div className="right-j">
            <form  className="email-container" >
                <input type="email" name="user_email" placeholder="Enter your Email address" />
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
    

  )
}

export default Join