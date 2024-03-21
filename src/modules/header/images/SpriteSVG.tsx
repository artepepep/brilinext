export default function SpriteSVG ({ name }: { name: string }) {
  switch (name) {
    case "openBurgerMenu":
      return (
        <svg 
          className="stroke-[#0F0F0F] dark:stroke-[#D9D9D9]"
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          fill="none">
          <path  
            strokeWidth="2" 
            d="M0 7.6362h24M0 16.3633h24"
          />
        </svg>
      )
    case "arrowToBottom":
      return (
        <svg
          className="dark:text-white light:text-black" 
          xmlns="http://www.w3.org/2000/svg" 
          width="18" 
          height="18" 
          fill="none">
          <path 
            fill="currentColor" 
            fillRule="evenodd" 
            d="m13.1465 6.3965-4.5 4.5L9 11.25l.3535-.3535-4.5-4.5-.707.707L9 11.957l4.8535-4.8535-.707-.707Z"/>
        </svg>
      )
  }
}