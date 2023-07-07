import './index.scss';
import LogoPTransparent from '../../../assets/images/LogoPTransparent.png';
import { useRef, useEffect } from 'react';
// import gsap from 'gsap-trial';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();
  // 
  // useEffect(() => {
  //   gsap.registerPlugin(DrawSVGPlugin)
  //
  //   const tl = gsap.timeline();
  //
  //   tl.to(bgRef.current, {
  //     duration: 1,
  //     opacity: 1
  //   })
  //   .from(outlineLogoRef.current, {
  //     drawSVG: 0,
  //     duration: 2
  //   })
  //   .to(solidLogoRef.current, {
  //     opacity: 0.3,
  //     duration: 2
  //   }, '-=1'); // this will start 1 second before the previous animation ends
  // }, [])

  return (
    <div className='logo-container' ref={bgRef}>
      <img className='solid-logo' src={LogoPTransparent} alt="P" ref={solidLogoRef}/>

    </div>
  );
}

export default Logo;
