import React from 'react' 
import Header from '../Header/Header'
import './Hero.css' ;
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {motion} from 'framer-motion';
{/*importing the pngs required for website */}



const Hero = () => {
  const transition={type:'spring',duration:3}
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header/>   
            {/*The best ad section*/}

            <div className="the-best-ad">
              <motion.div
                initial={{left:'238px'}}
                whileInView={{left:'8px'}}
                transition={{...transition,type:"tween"}}>

              </motion.div>
              {/*The empty div creates the orange blob */}
              
              <span>The best fitness club in Mumbai</span>
            </div>

            {/*Hero Heading */}
            <div className="hero-text">
              <div> 
                <span className='stroke-text'>Shape </span>
                <span>Your</span>
              </div>
              <div> 
                <span>ideal body</span>
              </div>
              <div><span>in here we will help you to shape and build your ideal body and live your life to the fullest</span></div>
    
            </div>

            {/*adding figure here*/}

            <div className="figures">
              <div>
                <span>+140</span>
                <span>EXPERT COACHES</span>
              </div>
              <div>
                <span>+978</span>
                <span>MEMBERS JOINED</span>
              </div>
              <div>
                <span>+50</span>
                <span>FITNESS PROGRAMS</span>
              </div>   
            </div>

            {/*hero buttons */}
            <div className="hero-buttons">
                <buttons className="btn">Get Started</buttons>
                <buttons className="btn">Learn More</buttons>
            </div>

        </div>
        <div className="right-h">
          <button className="btn">Join Now</button>
          <motion.div initial={{right:"-1rem"}} whileInView={{right:"4rem"}} transition={transition} className="heart-rate">
            <img src={Heart} alt=""/>
            <span>Heart Rate</span>
            <span>116 pps</span>
          </motion.div>

          {/*hero images */}
          <img src={hero_image} alit="" className='hero-image'/>
          <motion.img 
          initial={{right:'11rem'}}
          whileInView={{right:'20rem'}}
          transition={transition}
          src={hero_image_back} alit="" className='hero-image-back'/>
          {/*calories */}
          <motion.div initial={{right:"45rem"}} 
            whileInView={{right:"35rem"}}
            transition={transition}
            className="calories">
            <img src={Calories} alt=""/>
            <div>
              <span>Calories Burned</span>
              <span>220 kcal</span>
            </div>
           
          </motion.div>
        </div>
    </div>
  )
}

export default Hero
