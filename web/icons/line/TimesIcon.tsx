import * as React from "react"

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M13.41 12l4.3-4.29a1 1 0 10-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 00-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 000 1.42 1 1 0 001.42 0l4.29-4.3 4.29 4.3a1 1 0 001.42 0 1 1 0 000-1.42z"
      />
    </svg>
  )
}

export default SvgComponent
