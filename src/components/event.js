import React from "react";

function event() {
  const handleClick = () => {
    alert("berhasil !!!");
  };

  return (
    <div>
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
}

export default event;
