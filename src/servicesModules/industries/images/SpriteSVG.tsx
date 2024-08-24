export default function SpriteSVG ({ name }: { name: string }) {
  switch (name) {
    case "arrow":
      return (
        <svg className={"stroke-current"} width="32" height="13" viewBox="0 0 32 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.083 6.5L0.749676 6.5" strokeWidth="1.6" strokeLinejoin="round"/>
          <path d="M30.083 6.5L1.66636 6.5" strokeWidth="1.6" strokeLinejoin="round"/>
          <path d="M25.5 1C27.6479 3.14788 28.8521 4.35212 31 6.5L25.5 12" strokeWidth="1.6"
                strokeLinejoin="round"/>
        </svg>
      )
  }
}
