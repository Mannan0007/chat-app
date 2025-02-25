import React from 'react'
import '../styles/StartingPage.css'
import NavBar from './NavBar'
import RotatingText from './RotatingText'
import GradientCard from './GradientCard'
import Card from './PinkCard'
import Footer from './Footer'
import { FaBoltLightning } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { MdMoneyOff } from "react-icons/md";
import ReviewCard from './Reviews'
import DeveloperCard from './DeveloperCard'
import AnimatedContent from './AnimatedContent'
const StartingPage = () => {

  return (
    <>
      <NavBar />

      <AnimatedContent
      
      distance={150}
  direction="vertical"
  reverse={false}
  config={{ tension: 80, friction: 20 }}
  initialOpacity={0.2}
  animateOpacity
  scale={1.1}
  threshold={0.2}>
        

      <div className='welcome-line'>
        <h1 className='rainbow-text'>
          A <span style={{color:'green', fontSize:'50px' }}>
            safe
          </span> space
          <br />
          <span>
          for your conversations
          </span>
          
        </h1>

        <div className='tagline2'>
        
      <GradientCard 
        title={<RotatingText words={['Talk', 'Vibe', 'Sync']} />}
        description={'with your loved ones'} 
            buttonText={'Explore more'} />
          
          </div>
      </div>


            </AnimatedContent>


      
      <AnimatedContent
            distance={150}
  direction="vertical"
  reverse={false}
  config={{ tension: 80, friction: 20 }}
  initialOpacity={0.2}
  animateOpacity
  scale={1.1}
  threshold={0.2}>
        


      <h1 style={{ fontSize: '22px', fontFamily: 'fantasy', textAlign: 'center', position:'relative', top:'-205px'}}>With private messaging you can be yourself, speak freely and feel close to the most important
        people in your life no matter where they are</h1>
</AnimatedContent>

      <AnimatedContent
      distance={150}
  direction="vertical"
  reverse={false}
  config={{ tension: 80, friction: 20 }}
  initialOpacity={0.2}
  animateOpacity
  scale={1.1}
  threshold={0.2}
      >
        
      
      <div style={{display:'flex', fontSize:'40px', justifyContent:'center', textAlign:'center', position:'relative', top:'-10px'}}>
        <h1>Why Choose us?</h1>
      </div>
    </AnimatedContent>
      


      <AnimatedContent
            distance={150}
  direction="vertical"
  reverse={false}
  config={{ tension: 80, friction: 20 }}
  initialOpacity={0.2}
  animateOpacity
  scale={1.1}
  threshold={0.2}>

      <div className='key-factors'>

        <div className='elements'>
        <MdMoneyOff style={{fontSize:'50px'}} />
        <Card
         title={'Free'}
         description={'What do we charge? Well nothing'} />        
        </div>
        

        <div className='elements'>
      <FaBoltLightning />
        <Card 
         title={'Fast'}
         description={'Connect with people in just fraction of seconds'} />        
         </div>
   
          
        <div className='elements'>
      <FaLock />
        <Card
         title={'Privacy'}
         description={'Your Privacy is our first Priority'} />        
         </div>
        
        </div>
        
              </AnimatedContent>

      <AnimatedContent
            distance={150}
  direction="vertical"
  reverse={false}
  config={{ tension: 80, friction: 20 }}
  initialOpacity={0.2}
  animateOpacity
  scale={1.1}
  threshold={0.2}>


      <h1 className='review-heading'>What our users say about us</h1>
      
      <div className='reviews'>

        
        <ReviewCard
         name="Virat"
         review="An easy to use platform ! Highly recommended"
         rating={5}
         />

        
        <ReviewCard
         name="Harry"
         review="Amazing service! I can talk and stay connected with my friends."
         rating={4}
         />
        
        <ReviewCard
         name="Ron Weasely"
         review="Just loving it.Me and my friends stay all night and play games"
         rating={5}
         />
        
        <ReviewCard
         name="Hermione"
      review="Cloud Connect gives the best security "
        rating={4}
        />
        
        <ReviewCard
         name="Joey"
         review="Cloud Connect gives the best security "
         rating={5}
         />
        
        <ReviewCard
         name="Chandler"
         review="Cloud Connect gives the best security "
         rating={5}
         />
        
        <ReviewCard
         name="Phoebe"
         review="Cloud Connect gives the best security "
         rating={5}
         />
        
        <ReviewCard
         name="Rachel"
         review="Cloud Connect gives the best security "
         rating={5}
         />
      </div>
         </AnimatedContent>

      <AnimatedContent
      distance={150}
  direction="vertical"
  reverse={false}
  config={{ tension: 80, friction: 20 }}
  initialOpacity={0.2}
  animateOpacity
  scale={1.1}
  threshold={0.2}>




      <div style={{justifyContent:'center' , display:'flex'}}>
      <DeveloperCard/>
      
      </div>
      </AnimatedContent>



      <Footer/>

    </>
  )
}

export default StartingPage;
