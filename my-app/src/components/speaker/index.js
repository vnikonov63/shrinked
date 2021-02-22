import React from 'react'

const floatingDivStyles = {
  position: "relative",
  width: "100px",
  height: "50px",
  backgroundColor: "green",
  border: "2px solid black",
  top: "196px"
}

function Speaker() {
  return (
    <div style={{ display:"flex", height: "250px", border: "1px solid black" }}>
      <img alt="emperor" width="180px" height="250px" src="/pictures/russianEmperors/alexander2.jpg" />
      <div style={{ marginLeft: "10px", marginRight: "10px", backgroundColor:"red"}}>Helloooooooooooooooo</div>
    </div>
  )
}

export default Speaker
