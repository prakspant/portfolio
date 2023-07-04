import './index.scss';


function AnimatedLetters({letterClass, strArray, index}) {
  console.log(index);
  return (
    <span>
      {
        strArray.map((char, i) =>
          <span key={char + i} className={`${letterClass} _${i + index}`}>
            {char}
          </span>
        )
      }
    </span>
  )
}

export default AnimatedLetters
