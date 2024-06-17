export default function SpriteSVG ({ name }: { name: string }) {
  switch (name) {
    case "person":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
          <path
            fill="#3892F5" fillRule="evenodd"
            d="M8 7a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm0 6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 4.9997 4.9997 0 0 0-5-5H8Z"
            clipRule="evenodd"
          />
        </svg>
      )
  }
}