export default function SharedSpriteSVG ({ name }: { name: string }) {
  switch (name) {
    case "prevButton":
      return (
        <svg className="stroke-black dark:stroke-[#D9D9D9]" width="32" height="13" viewBox="0 0 32 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.79175 6.2356L31.1251 6.2356" strokeWidth="1.6" strokeLinejoin="round"/>
          <path d="M1.79175 6.2356L30.2084 6.2356" strokeWidth="1.6" strokeLinejoin="round"/>
          <path d="M6.375 0.735597C4.22712 2.88348 3.02288 4.08771 0.875001 6.2356L6.375 11.7356" strokeWidth="1.6" strokeLinejoin="round"/>
        </svg>
      )
    case "nextButton":
      return (
        <svg className="stroke-black dark:stroke-[#D9D9D9]" width="32" height="13" viewBox="0 0 32 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.2083 6.2356L0.87492 6.2356" strokeWidth="1.6" strokeLinejoin="round"/>
          <path d="M30.2083 6.2356L1.7916 6.2356" strokeWidth="1.6" strokeLinejoin="round"/>
          <path d="M25.625 0.735597C27.7729 2.88348 28.9771 4.08771 31.125 6.2356L25.625 11.7356" strokeWidth="1.6" strokeLinejoin="round"/>
        </svg>
      )
    }
  }