export default function SpriteSVG ({ name }: { name: string }) {
  switch (name) {
    case "plus":
      return (
        <svg width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M25 12H14V1a1 1 0 1 0-2 0v11H1a1 1 0 0 0-1 1 .91.91 0 0 0 1 .94h11V25a1 1 0 0 0 2 0V14h11a1 1 0 0 0 0-2Z"
            fill="#525252"/>
        </svg>
      )
    case "fill":
      return (
        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.167 11a.833.833 0 0 1-1.667 0c0-.102.05-.293.25-.59.137-.207.33-.442.583-.706.254.264.447.5.584.705.2.298.25.489.25.591Z"
            fill="#525252" stroke="#525252"/>
          <path d="M6.951 1.835 8.13 3.013" stroke="#525252" strokeLinecap="round"/>
          <path d="M7.894 2.778 2.708 7.963l3.771 3.771 5.186-5.185-3.771-3.771Z" stroke="#525252"
                strokeLinejoin="round"/>
          <path d="M4 6.691 9.654 8.55M1.333 14.333h13.334" stroke="#525252" strokeLinecap="round"/>
        </svg>
      )
    case "bold":
      return (
        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd"
                d="M8.469 8a3.328 3.328 0 0 0 3.323-3.333 3.328 3.328 0 0 0-3.323-3.334H3.333V8H8.47ZM9.677 14.667A3.328 3.328 0 0 0 13 11.333 3.328 3.328 0 0 0 9.677 8H3.333v6.667h6.344Z"
                stroke="#525252" strokeWidth="2.123" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case "italic":
      return (
        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.667 2H12M4 14h5.334M9.667 1.984 6.333 14" stroke="#525252" strokeWidth="1.416"
                strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case "underline":
      return (
        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.667 14.667h10.666" stroke="#525252" strokeWidth="1.416" strokeLinecap="round"
                strokeLinejoin="round"/>
          <path d="M12.333 2.032v5.301a4.333 4.333 0 0 1-8.666 0v-5.3" stroke="#525252" strokeWidth="1.416"
                strokeLinecap="round"/>
        </svg>
      )
    case "textLeft":
      return (
        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 3H2M11.333 6.333H2M14 9.667H2M11.333 13H2" stroke="#525252" strokeLinecap="round"
                strokeLinejoin="round"/>
        </svg>
      )
    case "textCenter":
      return (
        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6.333H4M14 3H2M14 9.667H2M12 13H4" stroke="#525252" strokeLinecap="round"
                strokeLinejoin="round"/>
        </svg>
      )
    case "textRight":
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 3.00003H2" stroke="#525252" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.0001 6.3334H4.66675" stroke="#525252" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 9.6666H2" stroke="#525252" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.0001 12.9999H4.66675" stroke="#525252" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case "numbersList":
      return (
        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.667 10.667H3V11h-.667v.667H3V12H1.667v.667h2V10h-2v.667ZM2.333 6H3V3.333H1.667V4h.666v2Zm-.666 1.333h1.2l-1.2 1.4v.6h2v-.666h-1.2l1.2-1.4v-.6h-2v.666ZM5 4v1.333h9.333V4H5Zm0 8h9.333v-1.333H5V12Zm0-3.333h9.333V7.333H5v1.334Z"
            fill="#525252"/>
        </svg>
      )
    case "dotsList":
      return (
        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.667 7c-.534 0-1 .467-1 1 0 .533.466 1 1 1 .533 0 1-.467 1-1 0-.533-.467-1-1-1Zm0-3.333c-.534 0-1 .466-1 1 0 .533.466 1 1 1 .533 0 1-.467 1-1 0-.534-.467-1-1-1Zm0 6.666c-.534 0-1 .467-1 1 0 .534.466 1 1 1 .533 0 1-.466 1-1 0-.533-.467-1-1-1ZM5 4v1.333h9.333V4H5Zm0 8h9.333v-1.333H5V12Zm0-3.333h9.333V7.333H5v1.334Z"
            fill="#525252"/>
        </svg>
      )
    case "image":
      return (
        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.467 7.333 12 10.667H4l2-2.6 1.4 1.8 1.933-2.534h.134Zm-3.8 0c.533 0 1-.466 1-1 0-.533-.467-1-1-1-.534 0-1 .467-1 1 0 .534.466 1 1 1Zm9-3.333v8c0 .733-.6 1.333-1.334 1.333H2.667c-.734 0-1.334-.6-1.334-1.333V4c0-.733.6-1.333 1.334-1.333h10.666c.734 0 1.334.6 1.334 1.333Zm-1.334 1.867V4H2.667v8h10.666V5.867Z"
            fill="#525252"/>
        </svg>
      )
  }
}