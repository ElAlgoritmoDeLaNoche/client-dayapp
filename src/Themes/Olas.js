import React from 'react'

const Olas = () => {
  return (
    <div className='moved'>
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="a"
            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use xlinkHref="#a" x={48} fill="rgba(0,0,0,0.298)" />
          <use xlinkHref="#a" x={48} y={3} fill="rgba(0,0,0,0.715)" />
          <use xlinkHref="#a" x={48} y={5} fill="rgba(0,0,0,0.278)" />
          <use xlinkHref="#a" x={48} y={7} fill="#000" />
        </g>
      </svg>
    </div>
  )
}

export default Olas