import * as React from "react";

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M17 6.06a3 3 0 00-1.15 5.77A2 2 0 0114 13.06h-4a3.91 3.91 0 00-2 .56V7.88a3 3 0 10-2 0v8.36a3 3 0 102.16.05A2 2 0 0110 15.06h4a4 4 0 003.91-3.16A3 3 0 0017 6.06zm-10-2a1 1 0 11-1 1 1 1 0 011-1zm0 16a1 1 0 111-1 1 1 0 01-1 1zm10-10a1 1 0 111-1 1 1 0 01-1 1z" />
    </svg>
  );
}

export default SvgComponent;
