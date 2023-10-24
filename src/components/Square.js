import React from "react"

const Square = (props) => {
  const handelClick = () => {
    // alert(props.index)
    props.handleGamePlay(props.index)
  }

  return (
    <>
      <div className="square" onClick={handleClick}>
        {props.value}
      </div>
    </>
  )
}
export default Square
