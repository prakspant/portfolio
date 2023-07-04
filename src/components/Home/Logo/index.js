import './index.scss';
import LogoPTransparent from '../../../assets/images/LogoPTransparent.png';
import {useRef, useEffect} from 'react';
import gsap from 'gsap-trial';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap.timeline()
    .to(bgRef.current, {
      duration: 1,
      opacity: 1
    })
    .from(outlineLogoRef.current, {
      drawSVG: 0,
      duration: 20
    })
  }, [])

  return (
    <div className='logo-container' ref={bgRef}>
      <img className='solid-logo' src={LogoPTransparent} alt="P"/>
      <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="500"
      height="500"
      viewBox="0 0 500 500"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          ref={outlineLogoRef}
          d="M4308 4103 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z M894 3538 l-29 -33 33 29 c17 17 32 31 32 33 0 8 -8 1 -36 -29z M4189 3103 l-34 -38 38 34 c20 19 37 36 37 38 0 8 -8 0 -41 -34z M2379 3053 c-13 -16 -12 -17 4 -4 9 7 17 15 17 17 0 8 -8 3 -21 -13z M4350 3013 l-55 -58 58 55 c53 50 62 60 54 60 -1 0 -27 -26 -57 -57z M2179 2983 c-13 -16 -12 -17 4 -4 9 7 17 15 17 17 0 8 -8 3 -21 -13z M2110 2805 c-24 -25 -42 -45 -39 -45 3 0 25 20 49 45 24 25 42 45 39 45 -3 0 -25 -20 -49 -45z M1989 2813 c-13 -16 -12 -17 4 -4 16 13 21 21 13 21 -2 0 -10 -8 -17 -17z M1845 2682 c-5 -4 -17 -16 -25 -27 -11 -15 -7 -14 13 4 24 22 32 31 25 31 -2 0 -7 -4 -13 -8z M1920 2615 c-24 -25 -42 -45 -39 -45 3 0 25 20 49 45 24 25 42 45 39 45 -3 0 -25 -20 -49 -45z M2420 2525 c13 -14 26 -25 28 -25 3 0 -5 11 -18 25 -13 14 -26 25 -28 25 -3 0 5 -11 18 -25z M2718 2463 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z M2833 2463 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -16 0 -22 -2 -12 -5z M1749 2433 c-13 -16 -12 -17 4 -4 9 7 17 15 17 17 0 8 -8 3 -21 -13z M2888 2373 c12 -2 32 -2 45 0 12 2 2 4 -23 4 -25 0 -35 -2 -22 -4z"
        />
      </g>
    </svg>
    </div>
  );
}


export default Logo
