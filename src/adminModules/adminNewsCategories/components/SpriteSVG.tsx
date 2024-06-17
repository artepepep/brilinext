export default function SpriteSVG({ name }: { name: string }) {
  switch (name) {
    case "fill":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="none">
          <path fill="#525252" stroke="#525252" strokeWidth="2"
                d="M36.5833 30.25c0 1.4727-1.1939 2.6667-2.6666 2.6667-1.4728 0-2.6667-1.194-2.6667-2.6667 0-.3887.1844-.9863.7487-1.8329.4411-.6616 1.0754-1.4175 1.918-2.2689.8425.8514 1.4769 1.6073 1.9179 2.2689.5644.8466.7487 1.4442.7487 1.8329Z"/>
          <path stroke="#525252" strokeLinecap="round" strokeWidth="2" d="m19.1157 5.0457 3.2409 3.241"/>
          <path stroke="#525252" strokeLinejoin="round" strokeWidth="2"
                d="m21.7082 7.6384-14.26 14.2601 10.3709 10.3708 14.26-14.26L21.7082 7.6384Z"/>
          <path stroke="#525252" strokeLinecap="round" strokeWidth="2"
                d="m11 18.4005 15.5476 5.1117M3.6665 39.4167h36.6667"/>
        </svg>
      )
  }
}